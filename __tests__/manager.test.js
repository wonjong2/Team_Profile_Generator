const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("initialize", () => {
        it(`should create an object with 'Park' for name, '1' for id, 'park@gmail.com' for email and 111 for officeNumber`, () => {
            const manager = new Manager({name: 'Park', id: 1, email: 'park@gmail.com', officeNumber: 111});
            expect(manager).toEqual({name: 'Park', id: 1, email: 'park@gmail.com', officeNumber: 111});
        });
    });
    describe('getName', () => {
        it(`should return 'Lee'`, () => {
            const manager = new Manager({name: 'Lee', id: 2, email: 'lee@gmail.com', officeNumber: 222});
            expect(manager.getName()).toEqual('Lee');
        });
    });
    describe('getId', () => {
        it(`should return '3'`, () => {
            const manager = new Manager({name: 'Kim', id: 3, email: 'kim@gmail.com', officeNumber: 333});
            expect(manager.getId()).toEqual(3);
        });
    });
    describe('getEmail', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const manager = new Manager({name: 'Hong', id: 4, email: 'hong@gmail.com', officeNumber: 444});
            expect(manager.getEmail()).toEqual('hong@gmail.com');
        });
    });
    describe('getOfficeNumber', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const manager = new Manager({name: 'Han', id: 5, email: 'han@gmail.com', officeNumber: 555});
            expect(manager.getOfficeNumber()).toEqual(555);
        });
    });
    describe('getRole', () => {
        it(`should return 'Manager'`, () => {
            const manager = new Manager({name: 'Choi', id: 6, email: 'choi@gmail.com', officeNumber: 654});
            expect(manager.getRole()).toEqual('Manager');
        });
    });    
});