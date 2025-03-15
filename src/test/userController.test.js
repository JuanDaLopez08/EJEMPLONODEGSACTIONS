const request = require('supertest');
const app = require('../server');
const userService = require('../userService');

test("Debe obtener los usuarios(integracion)", async () => {
    userService.addUser({ name: 'ElTomas'});
    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe("ElTomas");    
});