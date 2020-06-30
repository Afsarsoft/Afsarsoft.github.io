Based on JavaScript version https://youtu.be/3PHXvlpOkf4
Counter app, TypeScript

Switching from Production to Development:
- In package.json file, update the following in "scripts" tag
"build": "webpack"
- Execute the following to build bundle.js
npm run build

Switching from Development to Production:
- In package.json file, update the following in "scripts" tag
"build": "webpack --config webpack.config.prod.js"
- Execute the following to build bundle.js
npm run build