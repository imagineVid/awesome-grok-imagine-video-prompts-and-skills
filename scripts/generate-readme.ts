/**
 * [INPUT]: 依赖英文发布配置、本地视频工作流、已核验社区案例与官方案例
 * [OUTPUT]: 对外提供从结构化真源重建 README.md 的命令行入口
 * [POS]: scripts 的单视图发布编排器，确保空仓库与后续视频案例使用同一生成路径
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import fs from "node:fs";
import {
  fetchAllPrompts,
  fetchOfficialCases,
  fetchPromptCategories,
  sortPrompts,
} from "./utils/prompt-repository.js";
import { generateMarkdown, SUPPORTED_LANGUAGES } from "./utils/markdown-generator.js";

async function buildCollectionView(): Promise<void> {
  for (const language of SUPPORTED_LANGUAGES) {
    const { allCategories } = await fetchPromptCategories(language.code);
    const officialCases = await fetchOfficialCases();
    const { docs: prompts, total } = await fetchAllPrompts(language.code, allCategories);
    const sorted = sortPrompts(prompts, total);
    const markdown = generateMarkdown(
      { ...sorted, categories: allCategories, officialCases },
      total,
      language.code
    );

    fs.writeFileSync(language.readmeFileName, markdown, "utf8");
    console.log(
      `${language.readmeFileName}: ${total} verified video cases, ${sorted.featured.length} featured.`
    );
  }
}

buildCollectionView()
  .then(() => console.log("Grok Imagine Video collection view generated successfully."))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
