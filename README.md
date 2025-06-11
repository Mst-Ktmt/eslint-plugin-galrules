
# eslint-plugin-galrules

TypeScript-friendly ESLint rules:

- early-return
- promise-catch
- exhaustive-switch
- no-console-prod

## Install

```bash
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-galrules
```

## Usage

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "galrules"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:galrules/recommended"],
};
```
