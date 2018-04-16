// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should modulo 15/5/3 or return the number passed', function() {

    //normal inputs
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 10, expected: 'buzz'},
      {a: 9, expected: 'fizz'},
      {a: 7, expected: 7}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should throw error if not a number', function() {

    const badInputs = [
      {a:'7'},
      {a:'blue'},
      {a:false}
    ];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input.a)
      }).to.throw(Error);
    });
  });
});
