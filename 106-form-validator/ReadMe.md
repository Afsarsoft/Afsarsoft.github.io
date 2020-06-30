TypeScript Form Validator
Based on JavaScript ES5 version of https://vanillawebprojects.com/

## Form Validator (Intro Project)
Simple client side form validation. Check required, length, email and password match

## Project Specifications
- Create form UI
- Show error messages under specific inputs
- checkRequired() to accept array of inputs
- checkLength() to check min and max length
- checkEmail() to validate email with regex
- checkPasswordsMatch() to match confirm password


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
