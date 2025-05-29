import { useState } from "react";

const SectionCard = ({ section, onUpdate }) => {
  const { type, content } = section;
  cnst [isExpanded, setIsExpanded] = useState(true);o

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpdate({ image: file });
    }
  };

  return (
    <div className="space-y-4 text-black border border-gray-200 rounded p-4 mb-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h2 className="text-xl font-semibold capitalize">{type} Section</h2>
        <button className="text-sm text-blue-600 underline">
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* All section type logic remains exactly the same */}
          {type === "hero" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="col-span-full max-w-sm mx-auto">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Display Company As</label>
                <select
                  value={content.displayType || "text"}
                  onChange={(e) => onUpdate({ displayType: e.target.value })}
                  className="w-full border px-4 py-2 rounded"
                >
                  <option value="text">Company Name (Text)</option>
                  <option value="logo">Logo (Image)</option>
                </select>
              </div>
              {content.displayType === "text" && (
                <div className="col-span-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={content.companyName}
                    onChange={(e) => onUpdate({ companyName: e.target.value })}
                    className="w-full border px-4 py-2 rounded text-base max-w-lg mx-auto"
                    placeholder="Enter company name"
                  />
                </div>
              )}
              {content.displayType === "logo" && (
                <div className="col-span-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Logo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          onUpdate({ logo: reader.result });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full max-w-sm mx-auto"
                  />
                  {content.logo && (
                    <img
                      src={content.logo}
                      alt="Logo Preview"
                      className="mt-3 mx-auto max-w-xs max-h-32 object-contain border rounded bg-white p-2"
                    />
                  )}
                </div>
              )}
              <div className="col-span-full">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Slogan</label>
                <input
                  type="text"
                  value={content.slogan}
                  onChange={(e) => onUpdate({ slogan: e.target.value })}
                  className="w-full border px-4 py-2 rounded text-base max-w-xl mx-auto"
                  placeholder="Enter slogan"
                />
              </div>
              <div className="col-span-full max-w-sm mx-auto">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Background Type</label>
                <select
                  value={content.bgType || "color"}
                  onChange={(e) => onUpdate({ bgType: e.target.value })}
                  className="w-full border px-4 py-2 rounded"
                >
                  <option value="color">Use Background Color</option>
                  <option value="image">Use Background Image</option>
                </select>
              </div>
              {(content.bgType || "color") === "color" && (
                <div className="mx-auto w-48 col-span-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Background Color</label>
                  <input
                    type="color"
                    value={content.bgColor}
                    onChange={(e) => onUpdate({ bgColor: e.target.value })}
                    className="w-full h-12 rounded"
                  />
                </div>
              )}
              {content.bgType === "image" && (
                <>
                  <div className="col-span-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Hero Background Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            onUpdate({ image: reader.result });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="w-full max-w-sm mx-auto"
                    />
                    {content.image && (
                      <img
                        src={content.image}
                        alt="Hero Background Preview"
                        className="mt-3 max-w-full mx-auto max-h-64 object-contain border rounded"
                      />
                    )}
                  </div>
                  <div className="mx-auto w-48 col-span-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Background Overlay Color</label>
                    <input
                      type="color"
                      value={content.bgOverlayColor || "#000000"}
                      onChange={(e) => onUpdate({ bgOverlayColor: e.target.value })}
                      className="w-full h-12 rounded"
                    />
                  </div>
                  <div className="mx-auto w-48 col-span-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Overlay Opacity (0.0 - 1.0)</label>
                    <input
                      type="number"
                      min="0"
                      max="1"
                      step="0.05"
                      value={content.bgOpacity ?? 0.5}
                      onChange={(e) => onUpdate({ bgOpacity: parseFloat(e.target.value) })}
                      className="w-full border px-4 py-2 rounded"
                    />
                  </div>
                </>
              )}
              <div className="mx-auto w-48 col-span-full">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Text Color</label>
                <input
                  type="color"
                  value={content.textColor || "#000000"}
                  onChange={(e) => onUpdate({ textColor: e.target.value })}
                  className="w-full h-12 rounded"
                />
              </div>
            </div>
          )}

          {/* Continue the same pattern for cta, about, services, gallery here... */}
          {isExpanded && (
            <div className="space-y-4">
                {type === "cta" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="col-span-full">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Email</label>
                        <input
                        type="email"
                        value={content.email || ""}
                        onChange={(e) => onUpdate({ email: e.target.value })}
                        className="w-full border px-4 py-2 rounded text-base max-w-sm"
                        placeholder="example@company.com"
                        />
                    </div>

                    <div className="col-span-full">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                        type="tel"
                        value={content.phone || ""}
                        onChange={(e) => onUpdate({ phone: e.target.value })}
                        className="w-full border px-4 py-2 rounded text-base max-w-sm"
                        placeholder="123-456-7890"
                        />
                    </div>

                    <div className="col-span-full max-w-xs mx-auto">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
                        <select
                        value={content.method || "call"}
                        onChange={(e) => onUpdate({ method: e.target.value })}
                        className="w-full border px-4 py-2 rounded"
                        >
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        </select>
                    </div>

                    <div className="mx-auto w-48">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Button Background</label>
                        <input
                        type="color"
                        value={content.btnBg || "#000000"}
                        onChange={(e) => onUpdate({ btnBg: e.target.value })}
                        className="w-full h-12 rounded"
                        />
                    </div>

                    <div className="mx-auto w-48">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Button Text Color</label>
                        <input
                        type="color"
                        value={content.btnTextColor || "#ffffff"}
                        onChange={(e) => onUpdate({ btnTextColor: e.target.value })}
                        className="w-full h-12 rounded"
                        />
                    </div>
                    </div>
                )}
            </div>
          )}

          {isExpanded && (
            <div className="space-y-4">
                {type === "about" && (
                    <>
                    <textarea
                        className="border p-2 w-full max-w-xl mx-auto h-40"
                        placeholder="About Text"
                        value={content.text || ""}
                        onChange={(e) => onUpdate({ text: e.target.value })}
                    />
                    <label className="block mt-2 font-medium">Image (optional)</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {content.image && (
                        <div className="mt-2">
                        <img
                            src={URL.createObjectURL(content.image)}
                            alt="about-section"
                            className="w-full h-32 object-cover rounded"
                        />
                        </div>
                    )}

                    <label className="block mt-2 font-medium">Layout</label>
                    <select
                        className="border p-2 w-full"
                        value={content.layout || "image-top"}
                        onChange={(e) => onUpdate({ layout: e.target.value })}
                    >
                        <option value="image-top">Image Top</option>
                        <option value="image-left">Image Left</option>
                    </select>
                    </>
                )}
            </div>
          )}

          {isExpanded && (
            <div className="space-y-4">
                {type === "services" && (
                    <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Services</h3>

                    {content.services.map((service, idx) => (
                    service && (
                        <div key={idx} className="border rounded p-4 space-y-2 bg-gray-50 max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Service Title"
                            value={service.title}
                            onChange={(e) => {
                            const updated = [...content.services];
                            updated[idx].title = e.target.value;
                            onUpdate({ services: updated });
                            }}
                            className="w-full border p-2 rounded"
                        />
                        <textarea
                            placeholder="Service Description"
                            value={service.description}
                            onChange={(e) => {
                            const updated = [...content.services];
                            updated[idx].description = e.target.value;
                            onUpdate({ services: updated });
                            }}
                            className="w-full border p-2 rounded"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                            const file = e.target.files[0];
                            const updated = [...content.services];
                            updated[idx].image = file;
                            onUpdate({ services: updated });
                            }}
                        />

                        {service.image && (
                            <img
                            src={URL.createObjectURL(service.image)}
                            alt={`service-${idx}`}
                            className="w-full max-h-32 object-cover rounded"
                            />
                        )}

                        <button
                            onClick={() => {
                            const updated = content.services.filter((_, i) => i !== idx);
                            onUpdate({ services: updated });
                            }}
                            className="text-red-600 text-sm underline"
                        >
                            Remove Service
                        </button>
                        </div>
                    )
                    ))}


                    <button
                    onClick={() => {
                        const updated = [...content.services, { title: "", description: "", image: null }];
                        onUpdate({ services: updated });
                    }}
                    className="text-blue-600 text-sm underline"
                    >
                    + Add Another Service
                    </button>
                </div>
                )}
            </div>
          )}

          {isExpanded && (
            <div className="space-y-4">
                {type === "gallery" && (
                    <>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => {
                        const newFiles = Array.from(e.target.files);
                        onUpdate({
                            images: [...(content.images || []), ...newFiles],
                        });
                        }}
                    />

                    {content.images?.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 mt-2">
                        {content.images.map((img, i) => (
                            <div key={i} className="relative group">
                            <img
                                src={URL.createObjectURL(img)}
                                alt={`gallery-${i}`}
                                className="w-full h-24 object-cover rounded"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                onUpdate({
                                    images: content.images.filter((_, idx) => idx !== i),
                                })
                                }
                                className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded px-1 opacity-0 group-hover:opacity-100 transition"
                            >
                                ✕
                            </button>
                            </div>
                        ))}
                        </div>
                    )}
                    </>
                )}
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default SectionCard;
