const expect = require('expect');
const {isRealString} = require('./validation.js');
// import isRealString

// isRealString
describe('isRealString', () => {
  it('should reject non-string values', () => {
    const str = 123;
    expect(isRealString(str)).toBe(false);
  }) 

  it('should reject string with only spaces', () => {
    const str = '   ';
    expect(isRealString(str)).toBe(false);
  })

  it('should allow string with non-space characters', () => {
    const str = 'This is a test string ';
    expect(isRealString(str)).toBe(true);
  })
});
