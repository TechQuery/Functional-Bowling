'use strict';

exports.sum = function (first, second) {

  return first + second;
};


exports.isSpare = function (first, second) {

  return  ((first !== 10)  &&  (first + second === 10))  ?  1  :  0;
};


exports.isStrike = function (first) {

  return  (first === 10)  ?  1  :  0;
};


exports.curry = function (origin) {

  var count = origin.length;

  return  function curry() {

    var param = Array.from( arguments );

    return  (count > param.length) ?
      function () {

        param.push.apply(param, arguments);

        return  curry.apply(this, param);
      } :
      origin.apply(this, arguments);
  };
};


exports.round = function (this_first, this_second, next_one, next_two) {

  return  this_first + this_second +
    exports.isSpare(this_first, this_second) * next_one +
    exports.isStrike(this_first, this_second) * (next_one + next_two);
};


const curry_round = exports.curry( exports.round );

const score = [ ], stack = [ ];

exports.hit = function hit(count) {

  var length = score.push( count ), curry;

  if (length % 2) {

    stack.push(curry = curry_round( count ));
  }

  for (let i = stack.length - 1;  i >= 0;  i--) {
    if (
        (curry !== stack[i])  &&
        (stack[i] instanceof Function)
    ) {
      stack[i] = stack[i]( count );
    }
  }

  if ((length % 2)  &&  (count === 10)) {

    hit( 0 );
  }
};


exports.scoreOf = function (index) {

  return  stack[ index ];
};


exports.score = function () {

  return  stack.slice(0, 10).reduce( exports.sum );
};
