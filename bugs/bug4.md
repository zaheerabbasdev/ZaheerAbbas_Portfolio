# Bug 4: Relative Hash Links Breaking Navigation from Sub-pages

## 📋 Summary
Clicking any navbar link (About, Skills, Projects, etc.) while on a project detail page (e.g., `/projects/kaarkun`) did not navigate to the correct section. Instead, the hash was appended to the current URL.

## 🔍 How to Find It
1. Open any project detail page: `http://localhost:3000/projects/kaarkun`
2. Click any navbar link, e.g. "Skills"
3. Observe the URL — instead of going to `http://localhost:3000/#skills`, the browser URL became:

```
❌ http://localhost:3000/projects/kaarkun#skills
```

4. The page did not scroll or navigate anywhere — it stayed on the project detail page.

## 🐛 Root Cause
The navbar links used **relative hash links**:

```tsx
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  ...
];
```

A hash link like `#skills` is **relative to the current URL**. The browser simply appends it to whatever URL you are currently on. Since the project detail page `/projects/kaarkun` has no elements with `id="about"` or `id="skills"`, nothing happened.

```
Current URL:  /projects/kaarkun
Link clicked: #skills
Result:       /projects/kaarkun#skills   ❌ Wrong!
```

## 🛠️ Approach to Fix
Prefix every hash link with `/` to make it an **absolute path**. This tells the browser to always start from the root of the site before applying the hash:

```tsx
// ❌ Before — relative hash links
{ name: "About", href: "#about" },
{ name: "Skills", href: "#skills" },

// ✅ After — absolute path + hash
{ name: "About", href: "/#about" },
{ name: "Skills", href: "/#skills" },
```

Now the navigation flow works correctly from any page:

```
Current URL:  /projects/kaarkun
Link clicked: /#skills
Result:       /?#skills → /#skills    ✅ Correct!
```

## ✅ Lesson Learned
- In a **multi-page Next.js app**, if navbar links target sections on the homepage, always use `/#section` (absolute) instead of `#section` (relative).
- Test navigation links from **every route** in your app, not just the homepage.
- This is especially easy to miss during development since most testing happens on the homepage where both `#skills` and `/#skills` behave identically.
