const userService = require('../userService');

test("Debe agregar un usuario", () => {
    const user = userService.addUser({ name: 'ElTomas'});
    expect(user.name).toBe("ElTomas");
    expect(userService.getUsers().length).toBe(1);
})