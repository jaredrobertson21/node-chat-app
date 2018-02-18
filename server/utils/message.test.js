var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Admin';
    const lat = 23.5233;
    const lng = 12.6234;
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    const location = generateLocationMessage(from, lat, lng);

    expect(location.from).toBe(from);
    expect(location.createdAt).toBeA('number');
    expect(location.url).toBe(url);
  });
});