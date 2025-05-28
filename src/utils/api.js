export const generateSite = async (formDataToSend) => {
  try {
    const res = await fetch("/.netlify/functions/generateSite", {
      method: "POST",
      body: formDataToSend,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Server error:", errorText);
      return "";
    }

    const html = await res.text(); // ✅ Treat response as raw HTML
    return html;
  } catch (err) {
    console.error("Fetch failed:", err);
    return "";
  }
};
