import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import SectionCard from "../components/SectionCard";
import LayoutPicker from "./LayoutPicker";const initialSections = [
  { id: "hero", type: "hero", content: { companyName: "", slogan: "", bgColor: "#ffffff", displayType: "text" } },
  { id: "cta", type: "cta", content: { email: "", phone: "", method: "call", btnBg: "#000", btnTextColor: "#fff" } },
  { id: "about", type: "about", content: { text: "" } },
  { id: "services", type: "services", content: { services: [
    { title: "", description: "", image: null },
    { title: "", description: "", image: null },
    { title: "", description: "", image: null }
  ] } },
  { id: "gallery", type: "gallery", content: { images: [] } },
];
import Preview from "../components/Preview";
import { generateSite } from "../utils/api";



const SortableItem = ({ section, onUpdate }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="bg-white p-4 rounded shadow border mb-4"
    >
      <div
        {...listeners}
        className="cursor-grab text-gray-500 text-sm mb-2 select-none"
      >
        ⠿ Drag Section
      </div>
      <SectionCard section={section} onUpdate={onUpdate} />
    </div>
  );
};

const SiteBuilder = () => {
  const fonts = [
    "Arial", "Georgia", "Times New Roman", "Courier New", "Verdana",
    "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins"
  ];
  const [sections, setSections] = useState(initialSections);
  const [layout, setLayout] = useState("layout1");
  const [headingFont, setHeadingFont] = useState("Arial");
  const [paragraphFont, setParagraphFont] = useState("Arial");
  const [previewHtml, setPreviewHtml] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fixedIds = ["hero", "cta"];
    if (fixedIds.includes(active.id) || fixedIds.includes(over.id)) return;

    const reorderable = sections.filter(s => !fixedIds.includes(s.id));
    const oldIndex = reorderable.findIndex((s) => s.id === active.id);
    const newIndex = reorderable.findIndex((s) => s.id === over.id);

    const updated = sections.slice();
    const reordered = arrayMove(reorderable, oldIndex, newIndex);
    let newSections = [];
    sections.forEach((s) => {
      if (s.id === "hero") newSections.push(s);
    });
    reordered.forEach((s) => newSections.push(s));
    sections.forEach((s) => {
      if (s.id === "cta") newSections.push(s);
    });
    setSections(newSections);
  };

  const updateSectionContent = (id, newContent) => {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id === id ? { ...sec, content: { ...sec.content, ...newContent } } : sec
      )
    );
  };

  const handleSubmit = async () => {
  const formDataToSend = new FormData();
  formDataToSend.append("layout", layout);
  formDataToSend.append("headingFont", headingFont);
  formDataToSend.append("paragraphFont", paragraphFont);
  formDataToSend.append("sections", JSON.stringify(sections));
  formDataToSend.append("backgroundColor", backgroundColor);
  formDataToSend.append("textColor", textColor);

  // ✅ Handle hero logo and section-level image uploads
    sections.forEach((section, idx) => {
      const { content } = section;
      if (section.type === "hero" && content.displayType === "logo" && content.logo) {
        formDataToSend.append(`logo_${idx}`, content.logo);
      }
      if (content.image) {
        formDataToSend.append(`sectionImage_${idx}`, content.image);
      }
      if (Array.isArray(content.images)) {
        content.images.forEach((img, i) => {
          formDataToSend.append(`gallery_${idx}_${i}`, img);
        });
      }
    });

    // ✅ Add service card images
    sections.forEach((section, idx) => {
      if (section.type === "services" && Array.isArray(section.content.services)) {
        section.content.services.forEach((service, serviceIdx) => {
          if (service.image) {
            formDataToSend.append(`serviceImage_${idx}_${serviceIdx}`, service.image);
          }
        });
      }
    });

    try {
      const html = await generateSite(formDataToSend);
      setPreviewHtml(html);
    } catch (err) {
      console.error("Error generating site:", err);
      alert("Failed to generate site preview.");
    }
  };



  const reorderableSections = sections.filter(
    (section) => section.type !== "hero" && section.type !== "cta"
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">One-Page Site Builder</h1>

      <div className="mb-6 max-w-md mx-auto">
        <label className="block font-medium mb-1">Heading Font</label>
        <div className="mb-4">
          <select
            value={headingFont}
            onChange={(e) => setHeadingFont(e.target.value)}
            className="border p-2 w-full bg-white text-black rounded"
          >
            {fonts.map((font) => (
              <option key={font} value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
        </div>

        <label className="block font-medium mt-4 mb-1">Paragraph Font</label>
        <div className="mb-4">
          <select
            value={paragraphFont}
            onChange={(e) => setParagraphFont(e.target.value)}
            className="border p-2 w-full bg-white text-black rounded"
          >
            {fonts.map((font) => (
              <option key={font} value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-md font-semibold mb-2">
            Page Background Color
          </label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-48 h-10 border rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block text-md font-semibold mb-2">
            Page Text Color
          </label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-48 h-10 border rounded"
          />
        </div>
      </div>

      {sections
        .filter((s) => s.type === "hero")
        .map((section) => (
          <div key={section.id} className="bg-white p-4 rounded shadow border mb-4">
            <div className="text-gray-400 text-sm italic mb-2">Hero Section (Fixed Position)</div>
            <SectionCard
              section={section}
              onUpdate={(content) => updateSectionContent(section.id, content)}
            />
          </div>
        ))}

      {sections
        .filter((s) => s.type === "cta")
        .map((section) => (
          <div key={section.id} className="bg-white p-4 rounded shadow border mb-4">
            <div className="text-gray-400 text-sm italic mb-2">Call to Action (Fixed Position)</div>
            <SectionCard
              section={section}
              onUpdate={(content) => updateSectionContent(section.id, content)}
            />
          </div>
        ))}

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={reorderableSections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
          {reorderableSections.map((section) => (
            <SortableItem
              key={section.id}
              section={section}
              onUpdate={(content) => updateSectionContent(section.id, content)}
            />
          ))}
        </SortableContext>
      </DndContext>

      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={handleSubmit}
      >
        Generate Site
      </button>

      {previewHtml && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Preview</h2>
          <iframe
            title="site-preview"
            className="w-full h-[800px] border"
            srcDoc={previewHtml}
          />
        </div>
      )}
    </div>
  );
};

export default SiteBuilder;
