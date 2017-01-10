'use strict';
var expect = require('chai').expect;

var buy = function (x, arr) {
    if(arr.length === 0) {
        return null;
    }
    let nextValidIndex = function(firstIndex) {
        let firstPrice = arr[firstIndex];
        return arr.findIndex((price, index) => index > firstIndex && firstPrice + price === x);
    }

    let firstIndex = 0;
    let validIndex = -1;
    while((validIndex = nextValidIndex(firstIndex)) === -1 && firstIndex < arr.length) { firstIndex++; };
    return validIndex === -1 ? null : [firstIndex, validIndex];
}

describe("buy", function () {
    var randomInt = function () {
        return Math.round(Math.random() * 100);
    }
    var randomArray = function (n) {
        var i, r = [];
        for (i = 0; i < n; ++i) r.push(randomInt());
        return r;
    }
    it("should return Nothing on an empty list", function () {
        expect(buy(randomInt(), []).to.be(null));
    });
    it("should return Nothing on a short list", function () {
        Test.assertEquals(buy(randomInt(), [randomInt()]), null);
    });
    it("should work for the examples", function () {
        Test.assertSimilar(buy(2, [1, 1]), [0, 1]);
        Test.assertSimilar(buy(3, [1, 1]), null);
        Test.assertSimilar(buy(5, [5, 2, 3, 4, 5]), [1, 2]);
        Test.assertSimilar(buy(5, [1, 2, 3, 4, 5]), [0, 3]);
        Test.assertSimilar(buy(5, [0, 0, 0, 2, 3]), [3, 4]);
    });
    it("should return the correct indices if there are any", function () {
        var arr, x, r, i;
        for (i = 0; i < 20; ++i) {
            arr = randomArray(randomInt()), x = randomInt(), r = buy(x, arr.concat([]));
            if (r !== null)
                Test.assertEquals(x, arr[r[0]] + arr[r[1]]);
        }
    });
});