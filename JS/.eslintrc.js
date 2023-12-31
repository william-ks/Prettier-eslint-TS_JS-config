module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["prettier"],
  rules: {
    "no-unused-vars": "off",
  },
};
