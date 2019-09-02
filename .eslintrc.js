module.exports = {
  "parser": "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  "settings": {
    "ecmascript": 6,
    "jsx": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  extends: [
    'airbnb',
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/state-in-constructor": 0,
    "arrow-parens": 0,
    "react/jsx-indent": 0
  },
  plugins: [
    'react',
  ],
};
