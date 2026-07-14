/**
 * [INPUT]: 依赖 markdown-generator 的英文发布接口与 Grok Imagine Video 数据契约
 * [OUTPUT]: 验证空仓库首屏、官方事实、产品链接、视频媒体和分类行为
 * [POS]: scripts/utils 的 README 发布回归套件，阻止旧模型文案重新进入仓库
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import assert from "node:assert/strict";
import test from "node:test";
import {
  SUPPORTED_LANGUAGES,
  generateAnimationPreview,
  generateMarkdown,
  generateMediaTable,
  getGrokImagineProductUrl,
  groupPromptsByWorkflow,
} from "./markdown-generator.js";
import type { FilterCategory, Prompt } from "./prompt-repository.js";

const categories: FilterCategory[] = [
  { id: 4, title: "Video Workflow Groups", slug: "video-workflow-groups", sort: 0 },
  {
    id: 61,
    title: "Camera Direction & Shot Design",
    slug: "camera-direction-shot-design",
    parentId: 4,
    parentSlug: "video-workflow-groups",
    featured: true,
    sort: 61,
  },
];

function prompt(overrides: Partial<Prompt> = {}): Prompt {
  return {
    id: 1,
    model: "grok-imagine-video-1.5",
    title: "Ember-lit battlefield push-in",
    description: "A controlled image-to-video camera move with synchronized ambience.",
    content:
      "Slow cinematic push-in as embers cross the frame. Preserve the helmet silhouette and add distant battlefield ambience.",
    sourceLink: "https://x.com/creator/status/1234567890",
    sourcePublishedAt: "2026-07-01T00:00:00.000Z",
    sourceMedia: ["https://example.com/preview.jpg"],
    video: { url: "https://example.com/result.mp4", thumbnail: "https://example.com/preview.jpg" },
    author: { name: "@creator", link: "https://x.com/creator" },
    language: "en",
    videoCategories: {
      workflows: [
        {
          id: 61,
          title: "Camera Direction & Shot Design",
          slug: "camera-direction-shot-design",
          featured: true,
          sort: 61,
        },
      ],
    },
    ...overrides,
  };
}

test("launches with one rewritten English surface", () => {
  assert.deepEqual(SUPPORTED_LANGUAGES, [
    { code: "en", name: "English", readmeFileName: "README.md" },
  ]);
});

test("renders a Grok Imagine Video empty-state README without inherited model copy", () => {
  const markdown = generateMarkdown(
    { all: [], featured: [], regular: [], stats: { total: 0, featured: 0 }, categories },
    0
  );

  assert.match(markdown, /Awesome Grok Imagine Video Prompts & Skills/);
  assert.match(markdown, /grok-imagine-video-1\.5/);
  assert.match(markdown, /x\.ai\/news\/grok-imagine-video-1-5/);
  assert.match(markdown, /imaginevid\.io\/grok-imagine/);
  assert.doesNotMatch(markdown, /Nano Banana|Gemini 2\.5 Flash Image|Raycast/i);
});

test("uses the verified ImagineVid product route", () => {
  assert.equal(getGrokImagineProductUrl(), "https://imaginevid.io/grok-imagine");
});

test("groups a video prompt by its single production workflow", () => {
  const groups = groupPromptsByWorkflow([prompt()], categories);
  assert.equal(groups.length, 1);
  assert.equal(groups[0].category.slug, "camera-direction-shot-design");
  assert.equal(groups[0].prompts[0].id, 1);
});

test("renders parallel preview media without dropping a clip thumbnail", () => {
  const markdown = generateMediaTable(
    ["https://example.com/a.jpg", "https://example.com/b.jpg"],
    "Directed shot"
  );
  assert.match(markdown, /a\.jpg/);
  assert.match(markdown, /b\.jpg/);
  assert.match(markdown, /<table>/);
});

test("links an animated preview to the canonical source", () => {
  const markdown = generateAnimationPreview(
    "https://example.com/preview.gif",
    "Animated shot",
    "https://x.com/creator/status/1234567890"
  );
  assert.match(markdown, /preview\.gif/);
  assert.match(markdown, /x\.com\/creator\/status\/1234567890/);
});
