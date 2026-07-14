/**
 * [INPUT]: 依赖后续从英文真源完成并人工审核的翻译
 * [OUTPUT]: 暂不提供扩展语言，避免继承兄弟仓库的旧文案
 * [POS]: scripts/utils/locales 的扩展语言边界，首版保持显式空集合
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { Translation } from "../translation-types.js";

export const EXTENDED_TRANSLATIONS: Record<string, Translation> = {};
