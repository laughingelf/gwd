// /src/pages/SiteBuilder.jsx
import { useState } from "react";
import SiteForm from "./SiteForm";
import LayoutPicker from "./LayoutPicker";
import Preview from "../components/Preview";
import { generateSite } from "../utils/api";

const SiteBuilder = () => {
  const [formData, setFormData] = useState({});
  const [layout, setLayout] = useState("layout1");
  const [previewHtml, setPreviewHtml] = useState("");

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("data", JSON.stringify(formData));
    formDataToSend.append("layout", layout);
  
    if (formData.heroImage) {
      formDataToSend.append("heroImage", formData.heroImage);
    }
  
    if (formData.workImages?.length) {
      formData.workImages.forEach((img, idx) => {
        formDataToSend.append(`workImage_${idx}`, img);
      });
    }
  
    const html = await generateSite(formDataToSend); // now it receives FormData
    setPreviewHtml(html);
  };
  

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">One-Page Site Builder</h1>
      <SiteForm formData={formData} setFormData={setFormData} />
      <LayoutPicker selected={layout} setLayout={setLayout} />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSubmit}
      >
        Generate Site
      </button>
      {previewHtml && <Preview html={previewHtml} />}
    </div>
  );
};

export default SiteBuilder;
