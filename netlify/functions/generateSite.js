const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const Busboy = require("busboy");

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: "Method Not Allowed",
      };
    }

    return await new Promise((resolve, reject) => {
      const busboy = new Busboy({ headers: event.headers });
      const formData = {};
      const files = {};

      busboy.on("field", (fieldname, val) => {
        if (fieldname === "sections") {
          try {
            formData.sections = typeof val === "string" ? JSON.parse(val) : val;
          } catch (err) {
            console.error("Failed to parse sections:", val);
            throw new Error("Invalid sections JSON");
          }
        } else {
          formData[fieldname] = val;
        }
      });

      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        let buffers = [];

        file.on("data", (data) => {
          buffers.push(data);
        });

        file.on("end", () => {
          const buffer = Buffer.concat(buffers);
          console.log(`File received: ${filename}, size: ${buffer.length} bytes`);
          files[fieldname] = `data:${mimetype};base64,${buffer.toString("base64")}`;
        });
      });

      busboy.on("finish", async () => {
        try {
          const layout = formData.layout || "layout1";
          const layoutPath = path.join(process.cwd(), "netlify", "functions", "templates", `${layout}.html`);

          if (!fs.existsSync(layoutPath)) {
            throw new Error(`Template not found at ${layoutPath}`);
          }

          const template = fs.readFileSync(layoutPath, "utf8");

          const enrichedSections = formData.sections.map((section, idx) => {
            const enriched = { ...section };

            if (files[`sectionImage_${idx}`]) {
              enriched.content.image = files[`sectionImage_${idx}`];
            }

            if (section.type === "hero" && files[`logo_${idx}`]) {
              enriched.content.logo = files[`logo_${idx}`];
            }

            if (section.type === "gallery") {
              enriched.content.images = Object.keys(files)
                .filter((key) => key.startsWith(`gallery_${idx}_`))
                .map((key) => files[key]);
            }

            if (section.type === "services" && Array.isArray(section.content.services)) {
              enriched.content.services = section.content.services.map((service, sIdx) => {
                const imageKey = `serviceImage_${idx}_${sIdx}`;
                const imageData = files[imageKey] || null;

                return {
                  ...service,
                  image: imageData,
                };
              });
            }

            return enriched;
          });

          // ✅ Declare html here in the outer try block
          let html;

          try {
            html = ejs.render(template, {
              sections: enrichedSections,
              headingFont: formData.headingFont || "Inter",
              paragraphFont: formData.paragraphFont || "Inter",
              encodedHeadingFont: encodeURIComponent(formData.headingFont || "Inter"),
              encodedParagraphFont: encodeURIComponent(formData.paragraphFont || "Inter"),
              backgroundColor: formData.backgroundColor || "#ffffff",
              textColor: formData.textColor || "#000000",
            });
          } catch (err) {
            console.error("EJS Rendering Error:", err);
            return resolve({
              statusCode: 500,
              body: JSON.stringify({ error: "Template rendering failed", details: err.message }),
            });
          }

          // ✅ This will now work
          resolve({
            statusCode: 200,
            body: html,
          });
        } catch (err) {
          console.error("Error processing site:", err);
          reject({
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
          });
        }
      });


      busboy.end(Buffer.from(event.body, "base64"));
    });
  } catch (err) {
    console.error("Handler error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Template rendering failed",
        details: err.message,
      }),
    };
  }
};
