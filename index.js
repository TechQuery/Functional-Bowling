export function sum(first, second) {

    return  first + second;
}


export function isSpare(first, second) {

    return  ((first !== 10) && (first + second === 10))  ?  1  :  0;
}


export function isStrike(first) {

    return  (first === 10)  ?  1  :  0;
}


export function curry(origin) {

    const count = origin.length;

    return  function curry() {

        return  (count > arguments.length)  ?
            curry.bind(null, ...arguments)  :  origin.apply(this, arguments);
    };
}


export function round(this_first, this_second, next_one, next_two) {

    return  this_first + this_second +
        isSpare(this_first, this_second) * next_one +
        isStrike(this_first, this_second) * (next_one + next_two);
}


const curry_round = curry( round );

const point = [ ], stack = [ ];

export function hit(count) {

    var length = point.push( count ),  curry;

    if (length % 2)  stack.push(curry = curry_round( count ));

    for (let i = stack.length - 1;  i >= 0;  i--)
        if ((curry !== stack[i])  &&  (stack[i] instanceof Function))
            stack[i] = stack[i]( count );

    if ((length % 2)  &&  (count === 10))  hit( 0 );
}


export function scoreOf(index) {

    return  stack[ index ];
}


export function score() {

    return  stack.slice(0, 10).reduce( exports.sum );
}
