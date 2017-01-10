'use strict';
var expect = require('chai').expect;

var buy = function (x, arr) {
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
        expect(buy(randomInt(), [])).to.be.null;
    });
    it("should return Nothing on a short list", function () {
        expect(buy(randomInt(), [randomInt()])).to.be.null;
    });
    it("should work for the examples", function () {
        expect(buy(2, [1, 1])).to.deep.equal([0, 1]);
        expect(buy(3, [1, 1])).to.be.null;
        expect(buy(5, [5, 2, 3, 4, 5])).to.deep.equal([1, 2]);
        expect(buy(5, [1, 2, 3, 4, 5])).to.deep.equal([0, 3]);
        expect(buy(5, [0, 0, 0, 2, 3])).to.deep.equal([3, 4]);
    });
    it("should return the correct indices if there are any", function () {
        var arr, x, r, i;
        for (i = 0; i < 20; ++i) {
            arr = randomArray(randomInt()), x = randomInt(), r = buy(x, arr.concat([]));
            if (r !== null)
                expect(x).to.deep.equal(arr[r[0]] + arr[r[1]])
        }
    });
});