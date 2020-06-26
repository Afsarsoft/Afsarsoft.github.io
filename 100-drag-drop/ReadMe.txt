// Compile one file without the need of package.json and tsconfig.json files
tsc app.ts --target ESNEXT --watch

// To create package.json
npm ini

// To create tsconfig.json file
tsc --init

// watch mode when we have tsconfig.json file
// tsc --watch or tsc -w