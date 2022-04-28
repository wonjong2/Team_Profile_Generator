const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('initialize', () => {
        it(`should create an object with 'Park' in name, '1' in id, 'park@gmail.com' in email`, () => {
            const employee = new Employee('Park', 1, 'park@gmail.com');
            expect(employee).toEqual({name: 'Park', id: 1, email: 'park@gmail.com'});
        });
    });
    describe('getName', () => {
        it(`should return 'Lee'`, () => {
            const employee = new Employee('Lee', 2, 'lee@gmail.com');
            expect(employee.getName()).toEqual('Lee');
        });
    });
    describe('getId', () => {
        it(`should return '3'`, () => {
            const employee = new Employee('Kim', 3, 'kim@gmail.com');
            expect(employee.getId()).toEqual(3);
        });
    });
    describe('getEmail', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const employee = new Employee('Hong', 4, 'hong@gmail.com');
            expect(employee.getEmail()).toEqual('hong@gmail.com');
        });
    });
    describe('getRole', () => {
        it(`should return 'Employee'`, () => {
            const employee = new Employee('Choi', 5, 'choi@gmail.com');
            expect(employee.getRole()).toEqual('Employee');
        });
    });    
});