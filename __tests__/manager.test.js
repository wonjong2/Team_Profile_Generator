const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("initialize", () => {
        it(`should create an object with 'Park' for name, '1' for id, 'park@gmail.com' for email and 111 for officeNumber`, () => {
            const manager = new Manager('Park', 1, 'park@gmail.com', 111);
            expect(manager).toEqual({name: 'Park', id: 1, email: 'park@gmail.com', officeNumber: 111});
        });
    });
    describe('getName', () => {
        it(`should return 'Lee'`, () => {
            const manager = new Manager('Lee', 2, 'lee@gmail.com', 222);
            expect(manager.getName()).toEqual('Lee');
        });
    });
    describe('getId', () => {
        it(`should return '3'`, () => {
            const manager = new Manager('Kim', 3, 'kim@gmail.com', 333);
            expect(manager.getId()).toEqual(3);
        });
    });
    describe('getEmail', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const manager = new Manager('Hong', 4, 'hong@gmail.com', 444);
            expect(manager.getEmail()).toEqual('hong@gmail.com');
        });
    });
    describe('getOfficeNumber', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const manager = new Manager('Han', 5, 'han@gmail.com', 555);
            expect(manager.getOfficeNumber()).toEqual(555);
        });
    });
    describe('getRole', () => {
        it(`should return 'Employee'`, () => {
            const manager = new Manager('Choi', 6, 'choi@gmail.com', 654);
            expect(manager.getRole()).toEqual('Manager');
        });
    });    
});