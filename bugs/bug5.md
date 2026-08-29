# Bug 5: Duplicate Component Export — Build Error

## 📋 Summary
The `Projects.tsx` component file had two `export function Projects()` declarations, causing a build error and unexpected rendering behavior.

## 🔍 How to Find It
The Next.js dev server showed a build error about a duplicate identifier. Looking at the file, the new redesigned component had been added **above** the old component instead of **replacing** it, resulting in two exported functions with the same name in the same file.

```tsx
// Line 1-133: New redesigned component
export function Projects() { ... }  // ← new

// Line 136-252: Old component still present!
export function Projects() { ... }  // ← old — duplicate!
```

## 🐛 Root Cause
When using the `replace_file_content` tool to update the imports section at the top of the file, the tool matched only the `import` lines (the `TargetContent`). The replacement content included the **entire new component** (because the imports and new function were written together), but the **old component body was not removed** — it remained in the file below the new one.

This resulted in two exported functions with the same name:

```
SyntaxError: Identifier 'Projects' has already been declared
```

## 🛠️ Approach to Fix
**Step 1:** View the full file to confirm the duplication and identify exact line ranges of the old component.

**Step 2:** Use `replace_file_content` to target and delete only the old duplicate function block (from its `export function` line to its closing `}`).

**Step 3 (better approach):** Use `write_to_file` with `Overwrite: true` to completely rewrite the file when doing a full component redesign — this avoids any partial-replacement duplication issues.

```tsx
// ✅ Best practice for full rewrites
write_to_file({
  TargetFile: "Projects.tsx",
  Overwrite: true,
  CodeContent: `/* complete new file content */`
})
```

## ✅ Lesson Learned
- When **fully redesigning** a component (not just editing a few lines), always use a full file overwrite (`Overwrite: true`) rather than partial replacement.
- After any large edit, always verify the file by reading it top-to-bottom to check for duplicated exports or leftover code.
- TypeScript/JavaScript files cannot have two `export function` declarations with the same name — always search for the function name in the file before adding a new version.
