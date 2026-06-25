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

### Codex

Copy the skill folder into your Codex skills directory:

```sh
cp -R skills/vercel-geist-design ~/.codex/skills/
```

Then start a new Codex session and invoke it explicitly:

```text
Use $vercel-geist-design to redesign this dashboard in a clean Vercel-style UI.
```

### Claude / Claude Code

Use the `skills/vercel-geist-design` folder as the skill package. Depending on your Claude surface, either upload that folder as a skill package or copy it into the skills location supported by your Claude/Claude Code setup.

Invoke it with:

```text
Use $vercel-geist-design to review this UI for Vercel/Geist design consistency.
```

### npx skills

This repository follows the common skills repository layout:

```text
skills/
  vercel-geist-design/
    SKILL.md
    agents/openai.yaml
    references/
skills.sh.json
package.json
```

If your `skills` CLI supports GitHub/repository installs, point it at this repository and select `vercel-geist-design`.

Local validation can be run with:

```sh
npm install
npm run validate
```

The validation script uses the public `skills` npm package. Review third-party packages before executing them.

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

