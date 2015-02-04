/**
 * Created by mauriceb on 2-2-2015.
 */

describe('Various demos', function () {
    'use strict';

    describe('assertions', function () {
        var maurice = {firstName: 'Maurice', lastName: 'de Beijer'};

        it('maurice should not be another object', function () {
            expect(maurice).not.toBe({firstName: 'Maurice', lastName: 'de Beijer'});
        });

        it('maurice should equal another object', function () {
            expect(maurice).toEqual({firstName: 'Maurice', lastName: 'de Beijer'});
        });

        it('maurice should also equal another object with another order', function () {
            expect(maurice).toEqual({lastName: 'de Beijer', firstName: 'Maurice'});
        });

        it('maurice should not equal another object with an extra property', function () {
            expect(maurice).not.toEqual({firstName: 'Maurice', lastName: 'de Beijer', city: 'Zoetermeer'});
        });

        it('maurice should not equal another object with fewer properties', function () {
            expect(maurice).not.toEqual({firstName: 'Maurice'});
        });

        it('0.1 + 0.2 !== 0.3', function () {
            expect(0.1 + 0.2).not.toBe(0.3);
        });

        it('0.1 + 0.2 almost === 0.3', function () {
            expect(0.1 + 0.2).toBeCloseTo(0.3);
        });

    });


    describe('async specs', function () {
        it('should pass later', function (done) {
            setTimeout(function () {
                expect(true).toBeTruthy();
                done();
            }, 100);
        });

        xit('should fail later', function (done) {
            setTimeout(function () {
                expect(false).toBeTruthy();
                done();
            }, 100);
        });
    });


    describe('spies and mocks', function () {

        var sut = {
            doStuff: function (x) {
                if (x % 2 === 0) {
                    this.isEven(x);
                }
                else {
                    this.isOdd(x);
                }
            },
            isEven: function (x) {
                // Do something
            },
            isOdd: function (x) {
                // Do something
            }
        };


        it('2 is even', function(){
            spyOn(sut,'isEven');
            spyOn(sut,'isOdd');

            sut.doStuff(2);

            expect(sut.isEven).toHaveBeenCalled();
            expect(sut.isOdd).not.toHaveBeenCalled();
        })


        it('3 is odd', function(){
            spyOn(sut,'isEven');
            spyOn(sut,'isOdd');

            sut.doStuff(3);

            expect(sut.isEven).not.toHaveBeenCalled();
            expect(sut.isOdd).toHaveBeenCalledWith(3);
        })
    });
});
