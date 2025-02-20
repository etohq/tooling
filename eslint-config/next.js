module.exports = {
  extends: [
    "next",
    "turbo",
    "prettier",
    // "plugin:tailwindcss/recommended"
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "tailwindcss/no-custom-classname": "off",
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    // "tailwindcss/classnames-order": "error"
  },
  settings: {
    "tailwindcss": {
      "callees": ["cn", "classname"],
      "config": "tailwind.config.js"
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
