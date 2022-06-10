import { remark } from "remark";
import html from "remark-html";

async function markdownToHtml(markdown: string) {
  const output = await remark().use(html).process(markdown);
  return output.toString();
}

export { markdownToHtml };
