TypeScript Movie Seat Booking
Based on JavaScript ES5 version of https://vanillawebprojects.com/

## Movie Seat Booking

Display movie choices and seats in a theater to select from in order to purchase tickets

## Project Specifications

- Display UI with movie select, screen, seats, legend & seat info
- User can select a movie/price
- User can select/deselect seats
- User can not select occupied seats
- Number of seats and price will update
- Save seats, movie and price to local storage so that UI is still populated on refresh

Design inspiration from [Dribbble](https://dribbble.com/shots/3628370-Movie-Seat-Booking)


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
