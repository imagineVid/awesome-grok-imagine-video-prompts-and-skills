/**
 * [INPUT]: 依赖英文 core、空扩展语言包与 Translation 字段契约
 * [OUTPUT]: 对外提供 Translation 类型与 README 文案查询函数 t
 * [POS]: scripts/utils 的英文首发文案门面，为后续人工翻译保留稳定接口
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import { CORE_TRANSLATIONS } from "./locales/core.js";
import { EXTENDED_TRANSLATIONS } from "./locales/extended.js";
import type { Translation } from "./translation-types.js";

export type { Translation } from "./translation-types.js";

const translations: Record<string, Translation> = {
  ...CORE_TRANSLATIONS,
  ...EXTENDED_TRANSLATIONS,
};

export function t(key: keyof Translation, locale = "en"): string {
  return (translations[locale] || translations.en)[key] || translations.en[key];
}
