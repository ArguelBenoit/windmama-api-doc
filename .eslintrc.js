module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  plugins: [
    'vue'
  ],
  rules: {
    "comma-dangle": 1,
    "jsx-quotes": 1,
    "no-console": 0,
    "no-trailing-spaces": 1,
    "quotes": [2, "single"],
    "semi": 1,
    "strict": 0
  }
}
