npm install --save-dev mocha chai babel-core

npm install babel-preset-es2015 --save-dev

./node_modules/mocha/bin/mocha --compilers js:babel-core/register --watch where-my-anagrams-at/where-my-anagrams-at.js