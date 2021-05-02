import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Integration Tests', () => {

    describe('checkEmail', () => {
        test('given null as argument, returns The email should be an string', () => {
            expect(complexOperations.checkEmail()).toMatch('The email should be an string');
        });
        test('given an empty string as argument, returns The email should be an string', () => {
            expect(complexOperations.checkEmail('')).toMatch('The email should be an string');
        });
        test('given 12345 as argument, returns The email should be an string', () => {
            expect(complexOperations.checkEmail(12345)).toMatch('The email should be an string');
        });
        test('given hola@.com as argument, returns The email is invalid', () => {
            expect(complexOperations.checkEmail('hola@.com')).toMatch('The email is invalid');
        });
        test('given email as argument, returns The email is invalid', () => {
            expect(complexOperations.checkEmail('email')).toMatch('The email is invalid');
        });
        test('given hola@ as arguments, returns', () => {
            expect(complexOperations.checkEmail('hola@')).toMatch('The email is invalid');
        });
        test('given hola@radiumrocket.com as arguments, returns', () => {
            expect(complexOperations.checkEmail('hola@radiumrocket.com')).toMatch('The email is valid');
        });
    });

    describe('calculateArea', () => {
        test('given Parallelogram,2,4 as arguments, returns Parallelogram is not supported', () => {
            expect(complexOperations.calculateArea('Parallelogram', 2, 4)).toMatch('Parallelogram is not supported');
        });
        test('given undefined as argument, returns undefined is not supported', () => {
            expect(complexOperations.calculateArea()).toMatch('undefined is not supported');
        });
        test('given as arguments, returns', () => {
            expect(complexOperations.calculateArea('triangle', 'two', 'four')).toBe('number1 and number2 should be numbers');
        });
        test('given triange, 2, 4 as arguments, returns', () => {
            expect(complexOperations.calculateArea('triangle', 3, 4)).toBe(6);
        });
        test('given as arguments, returns', () => {
            expect(complexOperations.calculateArea('square', 4, 4)).toBe(16);
        });
    })
});


//node --experimental-specifier-resolution=node complexOperations
// npm run test-coverage