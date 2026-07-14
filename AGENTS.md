# awesome-grok-imagine-video-prompts-and-skills
ImagineVid-branded public field guide for source-verifiable Grok Imagine Video prompts and production patterns.

<directory>
data/ - English truth sources plus reviewed prompt and taxonomy overlays for thirteen additional languages.
docs/ - Model scope, contribution contract, local workflow, and X-source review policy.
public/images/ - Original ImagineVid cover and future licensed preview assets.
scripts/ - Local data validation, candidate scoring, and README generation.
.github/ - Repository-specific issue intake, labels, and publication automation.
</directory>

<config>
AGENTS.md - Repository architecture and content boundaries.
package.json - Node 24 and pnpm commands for validation, tests, and generation.
</config>

## Product Scope
- The target repository is `imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills`.
- The collection covers Grok Imagine video workflows, with current official facts anchored to xAI's generally available `grok-imagine-video-1.5` model.
- The primary product route is `https://imaginevid.io/grok-imagine`; model-version notes may also link to `https://imaginevid.io/grok-imagine-1-5`.
- The public collection starts with 13 independently sourced Grok Imagine Video community cases. No inherited sibling-repository example or placeholder case may enter the data set.

## Content Rules
- English is the canonical source language. Thirteen reviewed locale overlays are derived only from this repository's rewritten English source, never from sibling repositories.
- A community record requires the original prompt or a transparently labeled reconstruction, a canonical X source, author attribution, model evidence, and playable video or a trustworthy preview.
- Model claims must be traceable to current xAI documentation or release notes; product CTAs point to ImagineVid.
- Prompt discovery may use local APIs, but credentials and raw search caches never enter Git.
- README output is generated for English plus every locale supported by ImagineVid. Public data and generated views must pass structural, localization, and duplicate checks before publication.

## Launch Boundary
- `data/prompts.json` contains 13 Grok Imagine-specific community cases; `data/official-cases.json` remains empty until first-party cases have reusable prompt and media evidence.
- The repository publishes 14 README surfaces: English plus Spanish, Portuguese, Italian, German, French, Arabic, Japanese, Korean, Simplified Chinese, Dutch, Russian, Turkish, and Polish.
- The workflow taxonomy is video-native: camera direction, native audio, commercial motion, image-to-video continuity, stylized motion, and video editing.
- Before committing, run `pnpm run generate`, `pnpm test`, and `pnpm run typecheck`.

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
