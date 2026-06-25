# Vercel Geist Design Skill

A lightweight community Agent Skill for applying Vercel's Geist design language to frontend and app UI work.

It helps Codex, Claude, and other `SKILL.md`-aware agents design, refactor, and review clean developer-product interfaces: dashboards, app shells, settings pages, docs surfaces, tables, forms, dialogs, and Vercel-inspired product UI.

This is not an official Vercel skill. It is a compact, practical interpretation of Vercel's public Geist design documents for agent workflows.

## Sources

Primary public sources:

- [Vercel Geist light theme](https://vercel.com/design.md)
- [Vercel Geist dark theme](https://vercel.com/design.dark.md)

The bundled reference files summarize stable design rules and token values for local agent use. For strict docs-verified work, agents should re-open the live Vercel documents because those pages are marked alpha.

## Included Skill

- `vercel-geist-design`: lightweight Geist/Vercel visual guidance for frontend UI design and review.

## Install

### npx skills

Recommended install path:

```sh
npx skills@latest add 0xdenny218/vercel-geist-design-skill --skill vercel-geist-design
```

Install globally for Codex:

```sh
npx skills@latest add 0xdenny218/vercel-geist-design-skill --skill vercel-geist-design --agent codex --global
```

Install globally for Claude Code:

```sh
npx skills@latest add 0xdenny218/vercel-geist-design-skill --skill vercel-geist-design --agent claude-code --global
```

Install for both Codex and Claude Code:

```sh
npx skills@latest add 0xdenny218/vercel-geist-design-skill --skill vercel-geist-design --agent codex --agent claude-code --global
```

Preview the available skill without installing:

```sh
npx skills@latest add 0xdenny218/vercel-geist-design-skill --list
```

You can also use the skill without installing it:

```sh
npx skills@latest use 0xdenny218/vercel-geist-design-skill --skill vercel-geist-design
```

If a future `skills` CLI release changes behavior, pin to the verified version:

```sh
npx skills@1.5.13 add 0xdenny218/vercel-geist-design-skill --skill vercel-geist-design
```

### Codex

Manual fallback:

```sh
cp -R skills/vercel-geist-design ~/.codex/skills/
```

Then start a new Codex session and invoke it explicitly:

```text
Use $vercel-geist-design to redesign this dashboard in a clean Vercel-style UI.
```

### Claude / Claude Code

Manual fallback for Claude Code:

```sh
cp -R skills/vercel-geist-design ~/.claude/skills/
```

For Claude surfaces that support uploaded skills, use the `skills/vercel-geist-design` folder as the skill package.

Invoke it with:

```text
Use $vercel-geist-design to review this UI for Vercel/Geist design consistency.
```

### Repository Layout

This repository follows the common `skills` repository layout:

```text
skills/
  vercel-geist-design/
    SKILL.md
    agents/openai.yaml
    references/
skills.sh.json
package.json
```

Local validation can be run with:

```sh
npm run validate
```

The validation script is local and has no package dependencies.

## Positioning

There is already a more comprehensive community skill, [`Joe-Simo/skills` `vercel-geist-design-system`](https://github.com/Joe-Simo/skills/tree/main/skills/vercel-geist-design-system), that emphasizes strict official-source gates and deeper verification.

This repository intentionally takes a lighter approach:

- compact `SKILL.md`
- concise reference files
- practical token guidance
- easy day-to-day use in Codex and Claude
- no executable scripts bundled in the skill itself

## License

MIT. Vercel and Geist are trademarks or design assets of their respective owners. This repository does not grant permission to copy Vercel product screens, private assets, logos, or trademarks.
