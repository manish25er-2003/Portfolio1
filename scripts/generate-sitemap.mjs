import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://manishpro.in";
const publicUrls = ["/"];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${publicUrls
    .map((pathValue) => `<url><loc>${siteUrl}${pathValue}</loc></url>`)
    .join("\n  ")}
</urlset>
`;

const outDir = path.resolve("public");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml, "utf8");
