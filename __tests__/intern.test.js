const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("initialize", () => {
        it(`should create an object with 'Park' for name, '1' for id, 'park@gmail.com' for email and @park for github`, () => {
            const intern = new Intern({name: 'Park', id: 1, email: 'park@gmail.com', school: 'University1'});
            expect(intern).toEqual({name: 'Park', id: 1, email: 'park@gmail.com', school: 'University1'});
        });
    });
    describe('getName', () => {
        it(`should return 'Lee'`, () => {
            const intern = new Intern({name: 'Lee', id: 2, email: 'lee@gmail.com', school: 'University2'});
            expect(intern.getName()).toEqual('Lee');
        });
    });
    describe('getId', () => {
        it(`should return '3'`, () => {
            const intern = new Intern({name: 'Kim', id: 3, email: 'kim@gmail.com', school: 'University3'});
            expect(intern.getId()).toEqual(3);
        });
    });
    describe('getEmail', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const intern = new Intern({name: 'Hong', id: 4, email: 'hong@gmail.com', school: 'University4'});
            expect(intern.getEmail()).toEqual('hong@gmail.com');
        });
    });
    describe('getSchool', () => {
        it(`should return 'University5'`, () => {
            const intern = new Intern({name: 'Han', id: 5, email: 'han@gmail.com', school: 'University5'});
            expect(intern.getSchool()).toEqual('University5');
        });
    });
    describe('getRole', () => {
        it(`should return 'Intern'`, () => {
            const intern = new Intern({name: 'Choi', id: 6, email: 'choi@gmail.com', school: 'University6'});
            expect(intern.getRole()).toEqual('Intern');
        });
    });    
});