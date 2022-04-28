const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("initialize", () => {
        it(`should create an object with 'Park' for name, '1' for id, 'park@gmail.com' for email and @park for github`, () => {
            const intern = new Intern('Park', 1, 'park@gmail.com', 'University1');
            expect(intern).toEqual({name: 'Park', id: 1, email: 'park@gmail.com', school: 'University1'});
        });
    });
    describe('getName', () => {
        it(`should return 'Lee'`, () => {
            const intern = new Intern('Lee', 2, 'lee@gmail.com', 'University2');
            expect(intern.getName()).toEqual('Lee');
        });
    });
    describe('getId', () => {
        it(`should return '3'`, () => {
            const intern = new Intern('Kim', 3, 'kim@gmail.com', 'University3');
            expect(intern.getId()).toEqual(3);
        });
    });
    describe('getEmail', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const intern = new Intern('Hong', 4, 'hong@gmail.com', 'University4');
            expect(intern.getEmail()).toEqual('hong@gmail.com');
        });
    });
    describe('getSchool', () => {
        it(`should return 'University5'`, () => {
            const intern = new Intern('Han', 5, 'han@gmail.com', 'University5');
            expect(intern.getSchool()).toEqual('University5');
        });
    });
    describe('getRole', () => {
        it(`should return 'Intern'`, () => {
            const intern = new Intern('Choi', 6, 'choi@gmail.com', 'University6');
            expect(intern.getRole()).toEqual('Intern');
        });
    });    
});