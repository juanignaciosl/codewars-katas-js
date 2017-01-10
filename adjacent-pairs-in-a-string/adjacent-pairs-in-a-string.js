'use strict';
var expect = require('chai').expect;

function countAdjacentPairs(s) {
    return s.toLowerCase().split(' ').reduce((n, current, i, arr) => (arr[i - 1] === current && current != n[1] ? [n[0] + 1, current] : [n[0], null] ), [0, null])[0];
}

describe("Solution", function () {
    it("should test for something", function () {
        expect(countAdjacentPairs('')).to.equal(0);
        expect(countAdjacentPairs('cat dog dog')).to.equal(1);
        expect(countAdjacentPairs('orange Orange kiwi pineapple apple')).to.equal(1);
        expect(countAdjacentPairs('banana banana banana')).to.equal(1);
    });
});