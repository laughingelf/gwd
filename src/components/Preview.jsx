

const Preview = ({ html }) => {
  return (
    <div className="mt-8 border rounded overflow-hidden shadow-lg">
      <iframe
        title="Site Preview"
        srcDoc={html}
        className="w-full h-[600px] border-none"
      />
    </div>
  );
};

export default Preview;
