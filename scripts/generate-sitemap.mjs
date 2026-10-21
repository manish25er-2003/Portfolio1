import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://manish25er.workers.dev";
const publicUrls = [
  "",
  "/#home",
  "/#about",
  "/#experience",
  "/#skills",
  "/#ai-tools",
  "/#projects",
  "/#contact",
  "/projects/fz-gym-fitness",
  "/projects/khatabook-app",
  "/projects/roomspot",
  "/projects/smartbank-system",
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${publicUrls
    .map((pathValue) => {
      const url = pathValue === "" ? `${siteUrl}/` : `${siteUrl}${pathValue}`;
      return `  <url><loc>${url}</loc><changefreq>weekly</changefreq><priority>${pathValue === "" ? "1.0" : "0.8"}</priority></url>`;
    })
    .join("\n")}
</urlset>
`;

const outDir = path.resolve("public");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf8");
