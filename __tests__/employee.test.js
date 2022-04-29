const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('initialize', () => {
        it(`should create an object with 'Park' for name, '1' for id, 'park@gmail.com' for email`, () => {
            const employee = new Employee({name: 'Park', id: 1, email: 'park@gmail.com'});
            expect(employee).toEqual({name: 'Park', id: 1, email: 'park@gmail.com'});
        });
    });
    describe('getName', () => {
        it(`should return 'Lee'`, () => {
            const employee = new Employee({name: 'Lee', id: 2, email: 'lee@gmail.com'});
            expect(employee.getName()).toEqual('Lee');
        });
    });
    describe('getId', () => {
        it(`should return '3'`, () => {
            const employee = new Employee({name: 'kim', id: 3, email: 'kim@gmail.com'});
            expect(employee.getId()).toEqual(3);
        });
    });
    describe('getEmail', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const employee = new Employee({name: 'Hong', id: 4, email: 'hong@gmail.com'});
            expect(employee.getEmail()).toEqual('hong@gmail.com');
        });
    });
    describe('getRole', () => {
        it(`should return 'Employee'`, () => {
            const employee = new Employee({name: 'Choi', id: 5, email: 'choi@gmail.com'});
            expect(employee.getRole()).toEqual('Employee');
        });
    });    
});