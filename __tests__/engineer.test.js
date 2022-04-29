const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("initialize", () => {
        it(`should create an object with 'Park' for name, '1' for id, 'park@gmail.com' for email and @park for github`, () => {
            const engineer = new Engineer({name: 'Park', id: 1, email: 'park@gmail.com', github: '@park'});
            expect(engineer).toEqual({name: 'Park', id: 1, email: 'park@gmail.com', github: '@park'});
        });
    });
    describe('getName', () => {
        it(`should return 'Lee'`, () => {
            const engineer = new Engineer({name: 'Lee', id: 2, email: 'lee@gmail.com', github: '@lee'});
            expect(engineer.getName()).toEqual('Lee');
        });
    });
    describe('getId', () => {
        it(`should return '3'`, () => {
            const engineer = new Engineer({name: 'Kim', id: 3, email: 'Kim@gmail.com', github: '@kim'});
            expect(engineer.getId()).toEqual(3);
        });
    });
    describe('getEmail', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const engineer = new Engineer({name: 'Hong', id: 4, email: 'hong@gmail.com', github: '@hong'});
            expect(engineer.getEmail()).toEqual('hong@gmail.com');
        });
    });
    describe('getGithub', () => {
        it(`should return '@han'`, () => {
            const engineer = new Engineer({name: 'Han', id: 5, email: 'han@gmail.com', github: '@han'});
            expect(engineer.getGithub()).toEqual('@han');
        });
    });
    describe('getRole', () => {
        it(`should return 'Engineer'`, () => {
            const engineer = new Engineer({name: 'Choi', id: 6, email: 'choi@gmail.com', github: '@choi'});
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });    
});