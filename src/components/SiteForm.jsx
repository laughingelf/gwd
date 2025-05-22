

const SiteForm = ({ formData, setFormData }) => {
  const update = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full p-2 border rounded mb-4";

  return (
    <div className="space-y-4">
      <input
        type="text"
        name="businessName"
        placeholder="Business Name"
        onChange={update}
        className={inputClass}
      />
      <input
        type="text"
        name="tagline"
        placeholder="Tagline"
        onChange={update}
        className={inputClass}
      />
      <textarea
        name="about"
        placeholder="About Your Business"
        onChange={update}
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={update}
        className={inputClass}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={update}
        className={inputClass}
      />
      <input
        type="text"
        name="services"
        placeholder="Services (comma separated)"
        onChange={update}
        className={inputClass}
      />
      <input
        type="text"
        name="socialLinks"
        placeholder="Social Links (comma separated)"
        onChange={update}
        className={inputClass}
      />
      <label for='heroImage' className="text-left">Hero Image</label>
      <input
        type="file"
        name="heroImage"
        accept="image/*"
        onChange={(e) =>
            setFormData({ ...formData, heroImage: e.target.files[0] })
        }
        className={inputClass}
        />

        <input
        type="file"
        name="workImages"
        accept="image/*"
        multiple
        onChange={(e) =>
            setFormData({ ...formData, workImages: Array.from(e.target.files) })
        }
        className={inputClass}
        />
        <input
            type="color"
            name="color"
            onChange={update}
            className={inputClass}
            />

            <select name="font" onChange={update} className={inputClass}>
            <option value="">Choose a Font</option>
            <option value="Inter">Inter</option>
            <option value="Lobster">Lobster</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Roboto">Roboto</option>
            </select>

    </div>
  );
};

export default SiteForm;
