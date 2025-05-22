export const generateSite = async (formDataToSend) => {
  try {
    const res = await fetch("/.netlify/functions/generateSite", {
      method: "POST",
      body: formDataToSend,
    });

    const text = await res.text(); // 👈 get raw response

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("Server returned non-JSON:", text);
      throw new Error("Server returned invalid JSON");
    }

    if (!res.ok) {
      console.error("Server error:", data);
      return "";
    }

    return data.html;
  } catch (err) {
    console.error("Fetch failed:", err);
    return "";
  }
};
