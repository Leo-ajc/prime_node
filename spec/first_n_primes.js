var expect = require("chai").expect;
var first_n_primes = require('../src/first_n_primes.js');
describe("#first_n_primes", function() {
    it("It returns the first n primes in an array", function() {
        expect(first_n_primes(7)).to.eql([2,3,5,7,11,13,17]);
    });
});