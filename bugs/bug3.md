# Bug 3: React Hydration Mismatch Warning

## 📋 Summary
The browser console showed hydration mismatch warnings after loading the homepage, specifically in the `Hero` component. The app still worked but produced errors.

## 🔍 How to Find It
The browser console showed:

```
[browser] A tree hydrated but some attributes of the server rendered HTML 
didn't match the client properties.
```

The warning appeared every time the page loaded, logged from the Hero component.

## 🐛 Root Cause
The Hero component calculated orbital positions for animated tech icons using `Math.sin()` and `Math.cos()` with floating-point results. These values were computed both on the **server** (during SSR) and again on the **client** (during hydration). 

Due to floating-point precision differences between server and client JavaScript engines, the computed `style` values (like `top: 50.123456789%`) didn't match exactly, causing React to detect a mismatch.

```tsx
// ❌ Produced inconsistent floating point values
const x = 50 + radius * Math.cos(angle);
const y = 50 + radius * Math.sin(angle);

// Style: top: "50.12345678901234%" (server)
// Style: top: "50.12345678901235%" (client) — mismatch!
```

## 🛠️ Approach to Fix
Round the calculated values to a fixed number of decimal places using `.toFixed()` so both server and client produce **identical strings**:

```tsx
// ✅ Fixed — consistent on server and client
const x = parseFloat((50 + radius * Math.cos(angle)).toFixed(4));
const y = parseFloat((50 + radius * Math.sin(angle)).toFixed(4));

// Style: top: "50.1235%" (server and client — identical)
```

## ✅ Lesson Learned
- Any value used in JSX style props or attributes that is computed with math (especially `Math.sin`, `Math.cos`, `Math.random`, `Date.now()`) must produce **deterministic, identical results** on both server and client.
- Always use `.toFixed(n)` when passing floating-point numbers as CSS style values in SSR/hydration scenarios.
- `Math.random()` should **never** be used directly in rendered JSX on the server — use `useEffect` or a seeded random instead.
