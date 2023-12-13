# react-typescript-boilersplate

//configuring webpack for dev-evn
npm init
npm i react react-dom
npm i -D typescript @types/react @types/react-dom
create tsconfig.json and add configuration for ts complier
create index.tsx file and app.tsx file
react-template % npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime
create .babelrc and add configuration
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
npm i -D babel-loader : bable loader package which allows transpilling javascript files using babel and webpack
create webpack bundler (webpack.config.json)- the code that we write across different components can be bundled together, to be referenced to index.tsx file
create npm script to start/run the application
npm i -D css-loader style-loader
add declaration file (declarations.d.ts) file for '.png' '.svg'

//configuring webpack for dev-evn
create 3 files- webpack.common.js webpack.prod.js webpack.dev.js
npm i webpack-merge
create npm script to start/run the application in Prod/Dev env

//adding eslint support-
npm i -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
Create .eslintrc.js file

//adding prettier support-
npm i -D prettier eslint-co nfig-prettier eslint-plugin-prettier

//adding husky support-to avoid committing staged if not followed rules
npm i -D husky@4 lint-staged

//babel-runtime
npm i @babel/runtime @babel/plugin-transform-runtime

//copy web pack plugin
npm i -D copy-webpack-plugin

//webpack bundle analyser: tells about the size of the files after build
npm i -D webpack-bundle-analyzer
