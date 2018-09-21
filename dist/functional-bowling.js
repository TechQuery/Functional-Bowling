//
//  Generated by https://www.npmjs.com/package/amd-bundle
//
(function (factory) {

    if ((typeof define === 'function')  &&  define.amd)
        define('functional-bowling', factory);
    else if (typeof module === 'object')
        return  module.exports = factory();
    else
        return  this['functional-bowling'] = factory();

})(function () {

function merge(base, path) {
  return (base + '/' + path).replace(/\/\//g, '/').replace(/[^/.]+\/\.\.\//g, '').replace(/\.\//g, function (match, index, input) {
    return input[index - 1] === '.' ? match : '';
  });
}

function outPackage(name) {
  return /^[^./]/.test(name);
}

    var require = _require_.bind(null, './');

    function _require_(base, path) {

        var module = _module_[
                outPackage( path )  ?  path  :  ('./' + merge(base, path))
            ],
            exports;

        if (! module.exports) {

            module.exports = { };

            var dependency = module.dependency;

            for (var i = 0;  dependency[i];  i++)
                module.dependency[i] = require( dependency[i] );

            exports = module.factory.apply(
                null,  module.dependency.concat(
                    _require_.bind(null, module.base),  module.exports,  module
                )
            );

            if (exports != null)  module.exports = exports;

            delete module.dependency;  delete module.factory;
        }

        return module.exports;
    }

var _module_ = {
  './index': {
    base: '.',
    dependency: [],
    factory: function factory(require, exports, module) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sum = sum;
      exports.isSpare = isSpare;
      exports.isStrike = isStrike;
      exports.curry = curry;
      exports.round = round;
      exports.hit = hit;
      exports.scoreOf = scoreOf;
      exports.score = score;

      function sum(first, second) {
        return first + second;
      }

      function isSpare(first, second) {
        return first !== 10 && first + second === 10 ? 1 : 0;
      }

      function isStrike(first) {
        return first === 10 ? 1 : 0;
      }

      function curry(origin) {
        var count = origin.length;
        return function curry() {
          return count > arguments.length ? curry.bind.apply(curry, [null].concat(Array.prototype.slice.call(arguments))) : origin.apply(this, arguments);
        };
      }

      function round(this_first, this_second, next_one, next_two) {
        return this_first + this_second + isSpare(this_first, this_second) * next_one + isStrike(this_first, this_second) * (next_one + next_two);
      }

      var curry_round = curry(round);
      var point = [],
          stack = [];

      function hit(count) {
        var length = point.push(count),
            curry;
        if (length % 2) stack.push(curry = curry_round(count));

        for (var i = stack.length - 1; i >= 0; i--) {
          if (curry !== stack[i] && stack[i] instanceof Function) stack[i] = stack[i](count);
        }

        if (length % 2 && count === 10) hit(0);
      }

      function scoreOf(index) {
        return stack[index];
      }

      function score() {
        return stack.slice(0, 10).reduce(exports.sum);
      }
    }
  }
};

    return require('./index');
});