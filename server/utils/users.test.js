const expect = require('expect');
const {Users} = require('./users.js');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Jared',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Matt',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '12',
      name: 'Jared',
      room: 'Cool'
    }

    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Matt']);
  });

  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jared']);
  });

  it('should remove a user', () => {
    var id = '1';
    var user = users.removeUser(id);

    expect(user.id).toBe(id);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var id = '12345';
    
    expect(users.removeUser(id)).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var id = '2';

    expect(users.getUser(id).id).toEqual(id);
  });

  it('should not find a user', () => {
    var id = '2345';

    expect(users.getUser(id)).toNotExist();
  });
})