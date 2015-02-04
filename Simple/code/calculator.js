/**
 * Created by mauriceb on 2-2-2015.
 */

function Calculator() {
    'use strict';

    this.add = function () {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    };

    this.multiply = function () {
        var product = 1;
        for (var i = 0; i < arguments.length; i++) {
            product *= arguments[i];
        }
        return product;
    };
}
