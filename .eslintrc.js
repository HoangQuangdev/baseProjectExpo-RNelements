module.exports = {
  extends: ["universe", "universe/native"],
  rules: {
    "import/order": 0,
    "react-native/no-inline-styles": 0,
    "import/namespace": 0,
    "no-duplicate-imports": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-use-before-define": ["error", { "variables": false }],
    "react/prop-types": ["error", {"ignore": ["navigation", "navigation.navigate"]}],
    "prettier/prettier": ["error",{"endOfLine": "auto",}],

    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    // "react-refresh/only-export-components": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": 0,
    "react/display-name": 0,

    "no-console": 1,
    "no-lonely-if": 1,
    "no-unused-vars": 1,
    "no-trailing-spaces": 1,
    "no-multi-spaces": 1,
    "no-multiple-empty-lines": 1,
    "space-before-blocks": ["error", "always"],
    "object-curly-spacing": [1, "always"],
    // "quotes": ["error", "single"],
    "array-bracket-spacing": 1,
    "linebreak-style": 0,
    "no-unexpected-multiline": "warn",
    "keyword-spacing": 1,
    "comma-dangle": 1,
    "comma-spacing": 1,
    "arrow-spacing": 1,
    
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};