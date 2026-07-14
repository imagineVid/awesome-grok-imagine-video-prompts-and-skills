/**
 * [INPUT]: 依赖 data/categories.json 的六类 Grok Imagine Video 工作流 slug
 * [OUTPUT]: 对外提供英文工作流说明查询函数 workflowDescription
 * [POS]: scripts/utils 的视频分类解释边界，保持渲染器只关心布局
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
const DESCRIPTIONS: Record<string, string> = {
  "camera-direction-shot-design": "Shot briefs built around framing, camera path, blocking, pacing, reveals, and transitions.",
  "dialogue-performance-native-audio": "Performance-led prompts where speech, acting, ambience, music, or synchronized sound carries the scene.",
  "product-motion-commercial-spots": "Commercial clips that keep a product, offer, garment, dish, device, or brand moment at the center of the motion.",
  "image-to-video-subject-continuity": "Image-anchored workflows that animate a still while preserving identity, composition, product geometry, or storyboard layout.",
  "stylized-motion-visual-effects": "Effects and animation patterns driven by transformations, simulation, surreal physics, graphic motion, or a distinctive media treatment.",
  "video-editing-restyling-scene-control": "Existing-video workflows that restyle, extend, add, remove, replace, or redirect part of a scene while protecting continuity."
};

export function workflowDescription(slug: string, _locale: string): string {
  return DESCRIPTIONS[slug] || "";
}
