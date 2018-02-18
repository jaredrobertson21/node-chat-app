var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct messsage object', () => {
    const from = 'Jared';
    const text = 'Hello';
    const message = generateMessage(from, text);
    
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
  });
});