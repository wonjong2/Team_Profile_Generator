const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("initialize", () => {
        it(`should create an object with 'Park' for name, '1' for id, 'park@gmail.com' for email and @park for github`, () => {
            const engineer = new Engineer('Park', 1, 'park@gmail.com', '@park');
            expect(engineer).toEqual({name: 'Park', id: 1, email: 'park@gmail.com', github: '@park'});
        });
    });
    describe('getName', () => {
        it(`should return 'Lee'`, () => {
            const engineer = new Engineer('Lee', 2, 'lee@gmail.com', '@lee');
            expect(engineer.getName()).toEqual('Lee');
        });
    });
    describe('getId', () => {
        it(`should return '3'`, () => {
            const engineer = new Engineer('Kim', 3, 'kim@gmail.com', '@kim');
            expect(engineer.getId()).toEqual(3);
        });
    });
    describe('getEmail', () => {
        it(`should return 'hong@gmail.com'`, () => {
            const engineer = new Engineer('Hong', 4, 'hong@gmail.com', '@hong');
            expect(engineer.getEmail()).toEqual('hong@gmail.com');
        });
    });
    describe('getGithub', () => {
        it(`should return '@han'`, () => {
            const engineer = new Engineer('Han', 5, 'han@gmail.com', '@han');
            expect(engineer.getGithub()).toEqual('@han');
        });
    });
    describe('getRole', () => {
        it(`should return 'Engineer'`, () => {
            const engineer = new Engineer('Choi', 6, 'choi@gmail.com', '@choi');
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });    

});