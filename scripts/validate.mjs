import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const skillName = "vercel-geist-design";
const skillRoot = join(root, "skills", skillName);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(path) {
  return readFileSync(path, "utf8");
}

JSON.parse(read(join(root, "package.json")));
const skillsIndex = JSON.parse(read(join(root, "skills.sh.json")));

assert(Array.isArray(skillsIndex.groupings), "skills.sh.json must include groupings");
assert(
  skillsIndex.groupings.some((group) => group.skills?.includes(skillName)),
  `skills.sh.json must list ${skillName}`,
);

for (const file of [
  "SKILL.md",
  "agents/openai.yaml",
  "references/geist-tokens.md",
  "references/implementation-guide.md",
  "references/review-checklist.md",
]) {
  assert(existsSync(join(skillRoot, file)), `Missing ${file}`);
}

const skill = read(join(skillRoot, "SKILL.md"));
assert(skill.startsWith("---\n"), "SKILL.md must start with YAML frontmatter");
const frontmatterEnd = skill.indexOf("\n---\n", 4);
assert(frontmatterEnd > 0, "SKILL.md must close YAML frontmatter");

const frontmatter = skill.slice(4, frontmatterEnd);
assert(/^name: vercel-geist-design$/m.test(frontmatter), "SKILL.md must declare the skill name");
assert(/^description: .{80,}$/m.test(frontmatter), "SKILL.md description must be descriptive");

const openai = read(join(skillRoot, "agents", "openai.yaml"));
assert(openai.includes('display_name: "Vercel Geist Design"'), "openai.yaml missing display_name");
assert(
  openai.includes('default_prompt: "Use $vercel-geist-design to design a clean developer-focused interface."'),
  "openai.yaml missing default_prompt",
);

console.log("Repository validation passed");
