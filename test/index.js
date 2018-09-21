import {sum, isSpare, isStrike, curry, round, hit, scoreOf, score} from '..';


describe('Functional bowling',  () => {

    it('Basic rules',  () => {

        sum(3, 4).should.be.equal( 7 );

        isSpare(3, 7).should.be.equal( 1 );

        isStrike(10, 0).should.be.equal( 1 );
    });


    it('Function currying',  () => {

        const curry_sum = curry( sum );

        curry_sum.should.be.instanceOf( Function );

        curry_sum(3, 4).should.be.equal( 7 );

        const left_add = curry_sum( 3 );

        left_add.should.be.instanceOf( Function );

        left_add( 4 ).should.be.equal( 7 );

        curry((a, b, c) => a + b + c)(1)(2)(3).should.be.equal( 6 );
    });


    it('Linkage rule',  () => {

        const curry_round = curry( round );

        var round_one = curry_round(3, 7);

        round_one.should.be.instanceOf( Function );

        round_one(3, 4).should.be.equal( 13 );

        round_one = curry_round(10, 0);

        round_one(3, 4).should.be.equal( 17 );
    });


    it('Whole game simulation',  () => {

        hit( 3 );

        hit( 7 );

        scoreOf( 0 ).should.be.instanceOf( Function );

        hit( 3 );

        scoreOf( 1 ).should.be.instanceOf( Function );

        hit( 4 );

        scoreOf( 0 ).should.be.equal( 13 );

        hit( 10 );

        hit( 3 );

        scoreOf( 3 ).should.be.instanceOf( Function );

        hit( 7 );

        scoreOf( 2 ).should.be.equal( 20 );

        for (let count  of  [10, 5, 3, 4, 3, 10, 5, 5, 3, 3, 0, 0])
            hit( count );

        score().should.be.equal( 132 );
    });
});
