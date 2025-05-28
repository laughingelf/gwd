

const LayoutPicker = ({ selected, setLayout }) => {
  return (
    <div className="my-4">
      <label className="block font-semibold mb-2">Choose a Layout:</label>
      <select
        value={selected}
        onChange={(e) => setLayout(e.target.value)}
        className="w-full p-2 border rounded bg-white text-black"
      >
        <option value="layout1">Layout 1</option>
        <option value="layout2">Layout 2</option>
        <option value="layout3">Layout 3</option>
      </select>
    </div>
  );
};

export default LayoutPicker;
