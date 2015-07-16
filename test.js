var chai = require('chai');
var expect = chai.expect;
var regexCreator = require('./index');

// test cases
var eights = [
  '#ffffffff',
  '#00000000',
  '#f06d06cc',
  '#00ff00ff',
  '#ff00ff00',
  '#12acc3d4',
  '#1a2b3c4d',
  '#a1b2c3d4'
];
var eightsNonStrict = [
  'color: #12312312',
  '#987987ab more stuff',
  'in the #132abcff middle',
  'http://www.abcd.com/index.html#456abcf0'
];
var fours = [
  '#ffff',
  '#0000',
  '#1234',
  '#abcd',
  '#f0f0',
  '#0f0f',
  '#a1b2',
  '#4d3c',
  '#beef'
];
var foursNonStrict = [
  'color: #123a',
  '#987f more stuff',
  'in the #abc0 middle',
  'http://www.abcdabcd.com/index.html#beef'
];
var badMatches = [
  'obviously a bad match',
  'contains the right string abcd but no pound',
  'abcd',
  '1234',
  'ffff',
  'ffffffff',
  '00000000',
  '#123g',
  '#pabd',
  '#badm',
  '#ccc',
  '#1234k234',
  '12355321'
];

var badStrictMatches = [
  '#bbbbb',
  '#123aa321b',
  '#cccddd'
];

describe('Regular Expression Matching', function() {

  it('should match eight digit regex', function() {
    eights.map(function(hexa) {
      expect(regexCreator().test(hexa), 'test case - [' + hexa + ']').to.be.true;
    });
    eightsNonStrict.map(function(hexa) {
      expect(regexCreator().test(hexa), 'test case - [' + hexa + ']').to.be.true;
    });
  });

  it('should match four digit regex', function() {
    fours.map(function(hexa) {
      expect(regexCreator().test(hexa), 'test case - [' + hexa + ']').to.be.true;
    });
    foursNonStrict.map(function(hexa) {
      expect(regexCreator().test(hexa), 'test case - [' + hexa + ']').to.be.true;
    });
  });

});

describe('Strict Mode Matching', function() {
  it('should match strict matches', function() {
    eights.map(function(hexa) {
      expect(regexCreator({strict:true}).test(hexa), 'test case - [' + hexa + ']').to.be.true;
    });
    fours.map(function(hexa) {
      expect(regexCreator({strict:true}).test(hexa), 'test case - [' + hexa + ']').to.be.true;
    });
  });

  it('should not match nonstrict matches', function() {
    eightsNonStrict.map(function(hexa) {
      expect(regexCreator({strict:true}).test(hexa), 'test case - [' + hexa + ']').to.be.false;
    });
    foursNonStrict.map(function(hexa) {
      expect(regexCreator({strict:true}).test(hexa), 'test case - [' + hexa + ']').to.be.false;
    });
  });
});

describe('Bad Matches', function() {
  it('should not match things with no match', function() {
    badMatches.map(function(hexa) {
      expect(regexCreator({strict:true}).test(hexa), 'test case - [' + hexa + ']').to.be.false;
      expect(regexCreator().test(hexa), 'test case - [' + hexa + ']').to.be.false;
    });
  });

  it('should not match strict things with no match', function() {
    badStrictMatches.map(function(hexa) {
      expect(regexCreator({strict:true}).test(hexa), 'test case - [' + hexa + ']').to.be.false;
    });
  });
});
