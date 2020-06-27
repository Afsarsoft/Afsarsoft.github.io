// Compile one file in watch mode without the need of package.json and tsconfig.json files
//
tsc app.ts --target ESNEXT -w

// To create package.json
npm ini

// To create tsconfig.json file
tsc --init

// watch mode when we have tsconfig.json file
// tsc --watch or tsc -w

// ++++++++++++++++++++++++++++++
// Development
//+++++++++++++++++++++++++++++++
// For multiple ts files, use webpack to have only one js file
// https://webpack.js.org/
// Webpack is a tool can bundle our files to one file,
// It optimize our code. We will have less code to download.
// To install for development:
npm install --save-dev webpack -cli webpack-dev-server typescript ts-loader
// Few packages gets install. In package.json you will have something as follow:
  "devDependencies": {
    "ts-loader": "^7.0.5", // work with webpack to compile our code to JavaScript
    "typescript": "^3.9.5", // installed typescript for this project locally
    "webpack": "^4.43.0", //bundle our files to one file
    "webpack-dev-server": "^3.11.0" // build in development server
  }

// remove all .js extensions from all imports
// Enable only the following setting in tsconfig.json file
  "target": "ESNext",
  "module": "ESNext",
  "sourceMap": true,
  "outDir": "./dist",
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true,
  "noFallthroughCasesInSwitch": true,
  "esModuleInterop": true,
  "experimentalDecorators": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true

// Create file webpack.config.js with following:
const path = require('path');

module.exports = {
  mode: 'development', // will do less optimization for debug needs.
  entry: './src/app.ts', //root entry file of project
  output: {
    filename: 'bundle.js', // single bundle js file at the end
    path: path.resolve(__dirname, 'dist'),   //absolute path to output file
    publicPath: 'dist' // for the dev server, bundle.js run in memory.
  },
  devtool: 'inline-source-map', // use sourceMap
  // how to deal with TypeScript
  // module in the end is just a file
  // we are telling what do do with files it finds
  module: {
    rules: [
      {
        test: /\.ts$/, // only files with ts extension
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};


// in package.json file add the following in "scripts" target
  "build": "webpack"

// delete all files from dist folder

// now run the following to build the project
npm run build
// Note: accept yes for 'webpack-cli' to be install

//run the following to start the webpack development server
npm start

// click on http://localhost:8080/ to check the project

// ++++++++++++++++++++++++++++++
// Production
//+++++++++++++++++++++++++++++++
Run the following:
npm install --save-dev clean-webpack-plugin
// create file webpack.config.prod.js with following:
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', // will do more optimization.
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'none', // not needed
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  // have plugins to delete the bundle.js each time
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};


// For Production, make sure package.json has the following:
  "build": "webpack --config webpack.config.prod.js"
// and run the following to build bundle.js for production
npm run build











