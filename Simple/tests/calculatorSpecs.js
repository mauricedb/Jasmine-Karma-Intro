/**
 * Created by mauriceb on 2-2-2015.
 */
describe('The calculator', function () {
    'use strict';

    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    it('can be created', function () {
        expect(calculator).toBeDefined();
    });

    describe('can add', function () {

        it('1 + 1', function () {
            var sum = calculator.add(1, 1);

            expect(sum).toBe(2);
        });

        it('1 + 1 + 1', function () {
            var sum = calculator.add(1, 1, 1);

            expect(sum).toBe(3);
        });
    });

    describe('can multiply', function () {

        it('1 * 1', function () {
            var sum = calculator.multiply(1, 1);

            expect(sum).toBe(1);
        });

        it('1 * 1 * 1', function () {
            var sum = calculator.multiply(1, 1, 1);

            expect(sum).toBe(1);
        });

        it('2 * 2', function () {
            var sum = calculator.multiply(2, 2);

            expect(sum).toBe(4);
        });
    });
});
