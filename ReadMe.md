# Functional Bowling

[Functional algorithm of Bowling scoring](http://cyber-dojo.org/review/show/DC2C0AC2A7?avatar=starfish) written in JavaScript with [TDD model](https://en.wikipedia.org/wiki/Test-driven_development), which came out from [@TechQuery](https://github.com/TechQuery/) after a Pair Programming activity of [FCC-CDG](https://freecodecamp-chengdu.github.io/) Council.

[![NPM Dependency](https://david-dm.org/TechQuery/Functional-Bowling.svg)](https://david-dm.org/TechQuery/Functional-Bowling)

[![NPM](https://nodei.co/npm/functional-bowling.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/functional-bowling/)



## Use it as a Library

First of all

```Shell
npm init

npm install functional-bowling
```
then you can use this package in two typical environments:

### Web Browser

```HTML
<head>
    <script src="node_modules/@babel/polyfill/dist/polyfill.min.js"></script>
    <script src="node_modules/functional-bowling/dist/functional-bowling.js"></script>
    <script>
        var bowling = window['functional-bowling'];
    </script>
</head>
```

### Node.JS

```JavaScript
import * as bowling from 'functional-bowling';
```


## Learn or Develop it

**Fork** this repository to *your namespace* on GitHub, and then execute commands shown below:

```Shell
git clone https://github.com/{your_namespace}/Functional-Bowling.git

npm install

# Modify some code, and then
npm test

# After developing
git commit -m "{What you have changed}"
```
In the end, you can create a **Pull request** to the original repository.
