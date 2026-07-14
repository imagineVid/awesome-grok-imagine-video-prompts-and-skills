# Localization Quality Report

## Scope

- Source language: English (`README.md` and English JSON fields)
- Published locales: `es`, `pt`, `it`, `de`, `fr`, `ar`, `ja`, `ko`, `zh`, `nl`, `ru`, `tr`, `pl`
- Coverage per locale: 86 interface fields, 7 category titles, 6 workflow descriptions, and 13 complete prompt records
- Product links: English uses `/grok-imagine`; translated pages use only locale routes present in ImagineVid's locale manifest

## Translation Trace

- Provider: Codex small-model workers
- Model: `gpt-5.6-luna`
- Packet strategy: locale-isolated JSON packets
- External translation API: disabled
- Human review owner: main repository agent

## Quality Gates

- Every locale preserves the English object's keys and required values.
- Every prompt translation includes title, description, and full prompt content.
- Localized prompt pages display the reviewed translation and retain the creator's English source prompt in a collapsible block.
- Prompt 8 remains valid nested JSON with the same control keys in every language.
- Bracketed production placeholders, model IDs, URLs, timecodes, aspect ratios, creator names, and character names remain intact.
- Script-family checks found no accidental Cyrillic, Arabic, CJK, Kana, or Hangul leakage into unrelated languages.
- Exact English prompt fallbacks, empty values, duplicate prompt IDs, duplicate sources, and duplicate media are rejected by validation.

## Review Notes

The first batch translation for several European languages introduced generic filler and mixed-language text; it was discarded and each affected locale was translated again in isolation. The first Korean packet summarized long prompts too aggressively; it was also discarded and rebuilt with paragraph-level source-to-target checks. All published packets passed the final structural and content-preservation review.

## Status

| Locale | Status | Review focus |
|---|---|---|
| es | pass | Spain usage, complete prompt instructions |
| pt | pass | Portugal usage, no Spanish leakage |
| it | pass | Natural creator terminology |
| de | pass | Complete directing and audio constraints |
| fr | pass | Natural production language |
| ar | pass | Modern Standard Arabic and valid JSON |
| ja | pass | Natural directing terminology and source fidelity |
| ko | pass | Long prompts rebuilt without summarization |
| zh | pass | Simplified Chinese and complete source coverage |
| nl | pass | Native workflow terminology |
| ru | pass | Script and source-content consistency |
| tr | pass | Natural production terminology |
| pl | pass | Native workflow terminology |

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
