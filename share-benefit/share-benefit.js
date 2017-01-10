'use strict';
var expect = require('chai').expect;

function bestProfit(values) {
    let min = values[0];
    let max = values[0];
    let candidateMin = values[0];
    for(let i = 1; i < values.length; i++) {
        let value = values[i];
        if(value < candidateMin) {
            candidateMin = value;
        }
        if((max - min) < (value - candidateMin)) {
            min = candidateMin;
            max = value;
        }
    }
    return max - min;
}

describe("Solution", function() {
   it("solves examples", function () {
       expect(bestProfit([0, 1])).to.equal(1);
       expect(bestProfit([0, 1, 2])).to.equal(2);
   });

   it("doesn't buy worse", function() {
       expect(bestProfit([2, 1, 0])).to.equal(0);
   });

   it("ex3", function() {
       expect(bestProfit([2, 3, 1, 0])).to.equal(1);
       expect(bestProfit([2, 3, 1, 5, 0])).to.equal(4);
   });

   it("ex4", function() {
       expect(bestProfit([2, 2, 1])).to.equal(0);
       expect(bestProfit([2, 2, 3])).to.equal(1);
       expect(bestProfit([2, 2, 0, 3])).to.equal(3);
   });
});
