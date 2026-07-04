const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const chaptersDir = path.join(root, "chapters");
const outFile = path.join(root, "wordcount-report.md");
const target = 250000;

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripTags(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[\s\S]*?<\/nav>/gi, "")
      .replace(/<footer[\s\S]*?<\/footer>/gi, "")
      .replace(/<aside[\s\S]*?<\/aside>/gi, "")
      .replace(/<header class="site-header"[\s\S]*?<\/header>/gi, "")
      .replace(/<[^>]+>/g, "\n")
  );
}

function normalize(text) {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function countText(text) {
  const noSpaces = text.replace(/\s/g, "");
  const cjk = (noSpaces.match(/[\u3400-\u9fff]/g) || []).length;
  const asciiWords = (text.match(/[A-Za-z0-9]+(?:[-_./][A-Za-z0-9]+)*/g) || []).length;
  const punctuation = (noSpaces.match(/[，。；：？！、“”‘’（）《》〈〉【】—…,.?!;:()[\]{}"']/g) || []).length;
  return {
    charsNoSpaces: noSpaces.length,
    cjk,
    asciiWords,
    punctuation,
    publishCount: cjk + asciiWords,
  };
}

function articleHtml(html) {
  const match = html.match(/<article class="article">([\s\S]*?)<\/article>/i);
  return match ? match[1] : html;
}

function getTitle(html) {
  const h1 = html.match(/<h1>([\s\S]*?)<\/h1>/i);
  return h1 ? stripTags(h1[1]).trim() : "";
}

function getSections(html) {
  const body = articleHtml(html);
  const parts = body.split(/(<h2>[\s\S]*?<\/h2>)/i);
  const sections = [];
  let current = null;
  for (const part of parts) {
    if (!part) continue;
    const heading = part.match(/<h2>([\s\S]*?)<\/h2>/i);
    if (heading) {
      if (current) sections.push(current);
      current = {
        title: stripTags(heading[1]).trim(),
        html: part,
      };
    } else if (current) {
      current.html += part;
    }
  }
  if (current) sections.push(current);
  return sections.map((section) => ({
    title: section.title,
    text: normalize(stripTags(section.html)),
    count: countText(normalize(stripTags(section.html))),
  }));
}

const chapterFiles = fs
  .readdirSync(chaptersDir)
  .filter((file) => /^chapter-\d+\.html$/.test(file))
  .sort();

const chapters = chapterFiles.map((file) => {
  const html = fs.readFileSync(path.join(chaptersDir, file), "utf8");
  const text = normalize(stripTags(articleHtml(html)));
  return {
    file,
    number: file.match(/\d+/)[0],
    title: getTitle(html),
    text,
    count: countText(text),
    sections: getSections(html),
  };
});

const total = chapters.reduce(
  (acc, chapter) => {
    acc.charsNoSpaces += chapter.count.charsNoSpaces;
    acc.cjk += chapter.count.cjk;
    acc.asciiWords += chapter.count.asciiWords;
    acc.punctuation += chapter.count.punctuation;
    acc.publishCount += chapter.count.publishCount;
    return acc;
  },
  { charsNoSpaces: 0, cjk: 0, asciiWords: 0, punctuation: 0, publishCount: 0 }
);

const remaining = Math.max(0, target - total.publishCount);
const averageNeeded = Math.ceil(target / chapters.length);
const currentAverage = Math.round(total.publishCount / chapters.length);

let report = "";
report += `# FDE 书稿字数统计\n\n`;
report += `统计口径：\n\n`;
report += `- 出版估算字数 = 中文字数 + 英文/数字词数，不含空白和标点。\n`;
report += `- 字符数 = 不含空白的全部字符，含标点。\n`;
report += `- 目标总字数：${target.toLocaleString("zh-CN")}。\n\n`;
report += `## 总览\n\n`;
report += `| 指标 | 数值 |\n|---|---:|\n`;
report += `| 当前出版估算字数 | ${total.publishCount.toLocaleString("zh-CN")} |\n`;
report += `| 当前字符数（不含空白，含标点） | ${total.charsNoSpaces.toLocaleString("zh-CN")} |\n`;
report += `| 中文字数 | ${total.cjk.toLocaleString("zh-CN")} |\n`;
report += `| 英文/数字词数 | ${total.asciiWords.toLocaleString("zh-CN")} |\n`;
report += `| 标点数 | ${total.punctuation.toLocaleString("zh-CN")} |\n`;
report += `| 距离 25 万字还差 | ${remaining.toLocaleString("zh-CN")} |\n`;
report += `| 26 章平均目标 | ${averageNeeded.toLocaleString("zh-CN")} / 章 |\n`;
report += `| 当前平均 | ${currentAverage.toLocaleString("zh-CN")} / 章 |\n\n`;

report += `## 章节字数\n\n`;
report += `| 章节 | 标题 | 出版估算字数 | 字符数 | 距离章均目标 |\n|---:|---|---:|---:|---:|\n`;
for (const chapter of chapters) {
  const gap = averageNeeded - chapter.count.publishCount;
  report += `| ${Number(chapter.number)} | ${chapter.title} | ${chapter.count.publishCount.toLocaleString("zh-CN")} | ${chapter.count.charsNoSpaces.toLocaleString("zh-CN")} | ${gap.toLocaleString("zh-CN")} |\n`;
}

report += `\n## 小节字数\n\n`;
for (const chapter of chapters) {
  report += `### 第 ${Number(chapter.number)} 章 ${chapter.title}\n\n`;
  report += `| 小节 | 出版估算字数 | 字符数 |\n|---|---:|---:|\n`;
  for (const section of chapter.sections) {
    report += `| ${section.title.replace(/\|/g, "\\|")} | ${section.count.publishCount.toLocaleString("zh-CN")} | ${section.count.charsNoSpaces.toLocaleString("zh-CN")} |\n`;
  }
  report += `\n`;
}

fs.writeFileSync(outFile, report, "utf8");
console.log(report);
