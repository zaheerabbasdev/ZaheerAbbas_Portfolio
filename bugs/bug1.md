# Bug 1: Missing Comma in Array — Build Error

## 📋 Summary
A syntax error caused the entire Next.js build to fail after adding a new service card to the `portfolio.ts` data file.

## 🔍 How to Find It
The Next.js dev server threw a build error in the terminal and browser:

```
Error: Expected ',', got '{'
./src/data/portfolio.ts (234:5)

> 234 |     {
      |     ^
```

The error pointed directly to line 234 in `portfolio.ts` inside the `services` array.

## 🐛 Root Cause
When a new object `{ id: "ai-solutions", ... }` was appended to the `services` array, the **trailing comma** was missing on the previous object. JavaScript/TypeScript arrays require a comma between every element.

```ts
// ❌ Broken
{
  id: "cloud",
  icon: "cloud"
}        // <-- missing comma here
{
  id: "ai-solutions",
  ...
}

// ✅ Fixed
{
  id: "cloud",
  icon: "cloud"
},       // <-- comma added
{
  id: "ai-solutions",
  ...
}
```

## 🛠️ Approach to Fix
1. Read the error message — it says `Expected ','` and gives the exact line number.
2. Go to that line in `portfolio.ts`.
3. Look at the **object just above** the flagged line.
4. Add the missing `,` at the end of that object's closing `}`.

## ✅ Lesson Learned
When adding new objects to an existing TypeScript/JavaScript array, always check that the **previous last element** ends with a comma. Use a linter (ESLint) or Prettier to auto-catch these issues before they reach the build step.
