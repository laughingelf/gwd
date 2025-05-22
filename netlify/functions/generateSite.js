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
        if (fieldname === "data") {
          try {
            Object.assign(formData, JSON.parse(val));
          } catch (e) {
            console.error("Failed to parse 'data' field as JSON", e);
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
          files[fieldname] = `data:${mimetype};base64,${buffer.toString("base64")}`;
        });
      });

      busboy.on("finish", async () => {
        try {
          const layout = formData.layout || "layout1";

          const layoutPath = path.join(process.cwd(), "netlify", "functions", "templates", `${layout}.html`);
          console.log("Resolved template path:", layoutPath);

          if (!fs.existsSync(layoutPath)) {
            throw new Error(`Template not found at ${layoutPath}`);
          }

          const template = fs.readFileSync(layoutPath, "utf8");
          console.log("Color received:", formData.color);

          const html = ejs.render(template, {
            data: {
              ...formData,
              color: formData.color || "#1D4ED8",
              services: typeof formData.services === "string"
                ? formData.services.split(",").map(s => s.trim())
                : [],
              socialLinks: typeof formData.socialLinks === "string"
                ? formData.socialLinks.split(",").map(s => s.trim())
                : [],
              heroImage: files.heroImage || null,
              workImages: Object.keys(files)
                .filter(key => key.startsWith("workImage_"))
                .map(key => files[key]),
            },
          });

          

          resolve({
            statusCode: 200,
            body: JSON.stringify({ html }),
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
