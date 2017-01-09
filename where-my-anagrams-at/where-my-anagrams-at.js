'use strict';
var expect = require('chai').expect;

function anagrams(word, words) {
  let prepare = (string) => string.split('').sort().join('');
  let sorted = prepare(word)
  return words.filter((word) => prepare(word) === sorted);
}

describe("Solution", function(){
  it("should test for something", function(){
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).to.deep.equal(['aabb', 'bbaa']);
  });
});
