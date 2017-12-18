'use strict';

const assert = require('assert'), bowling = require('./index');

// 基本规则
assert.equal(bowling.sum(3, 4), 7);

assert.equal(bowling.isSpare(3, 7), 1);

assert.equal(bowling.isStrike(10, 0), 1);

// 函数柯里化
const curry_sum = bowling.curry( bowling.sum );

assert.equal(curry_sum instanceof Function,  true);

assert.equal(curry_sum(3, 4),  7);

const left_add = curry_sum( 3 );

assert.equal(left_add instanceof Function,  true);

assert.equal(left_add( 4 ),  7);

assert.equal(
  bowling.curry(function (a, b, c) { return a + b + c; })(1)(2)(3),  6
);

// 联动规则
const curry_round = bowling.curry( bowling.round );

var round_one = curry_round(3, 7);

assert.equal(round_one instanceof Function,  true);

assert.equal(round_one(3, 4),  13);

round_one = curry_round(10, 0);

assert.equal(round_one(3, 4),  17);

// 整局模拟
bowling.hit( 3 );

bowling.hit( 7 );

assert.equal(bowling.scoreOf( 0 ) instanceof Function,  true);

bowling.hit( 3 );

assert.equal(bowling.scoreOf( 1 ) instanceof Function,  true);

bowling.hit( 4 );

assert.equal(bowling.scoreOf( 0 ),  13);

bowling.hit( 10 );

bowling.hit( 3 );

assert.equal(bowling.scoreOf( 3 ) instanceof Function,  true);

bowling.hit( 7 );

assert.equal(bowling.scoreOf( 2 ),  20);

for (let count of [10, 5, 3, 4, 3, 10, 5, 5, 3, 3, 0, 0]) {
  bowling.hit( count );
}

assert.equal(bowling.score(), 132);

// Do not remove this line.
// It is the green-traffic-llight pattern.
console.log('All tests passed');
