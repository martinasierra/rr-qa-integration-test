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
    });

    describe('sumGreaterThan', () => {
        test('given null as argument, returns The params should be numbers', () => {
            expect(complexOperations.sumGreaterThan()).toMatch('The params should be numbers');
        });
        test('given undefined and null as arguments, returns The params should be numbers', () => {
            expect(complexOperations.sumGreaterThan(undefined,[])).toMatch('The params should be numbers');
        });
        test('given 2,4,8 as arguments, returns The params should be numbers', () => {
            expect(complexOperations.sumGreaterThan(2,4,8)).toMatch('6 is less than 8');
        });
        test('given 8,2,4 as arguments, returns The params should be numbers', () => {
            expect(complexOperations.sumGreaterThan(8,2,4)).toMatch('10 is greater than 4');
        });
    });

    describe('intersectionBetweenArrays', () => {
        test('given null as argument, returns The params should be arrays', () => {
            expect(complexOperations.intersectionBetweenArrays()).toMatch('The params should be arrays');
        });
        test('given null as argument, returns The params should be arrays', () => {
            expect(complexOperations.intersectionBetweenArrays([2,2,2])).toMatch('The params should be arrays');
        });
        test('given [1,2,3],[4,5,6] as arguments, returns There are no matching elements', () => {
            expect(complexOperations.intersectionBetweenArrays([1,2,3],[4,5,6])).toMatch('There are not matching elements');
        });
        test('given [\'hola\'],[\'chau\'] as arguments, returns There are not matching elements', () => {
            expect(complexOperations.intersectionBetweenArrays(['hola'],['chau'])).toMatch('There are not matching elements');
        });
        test('given [\'azul\',\'rojo\'], [\'amarillo\',\'rojo\'] as arguments, returns \'rojo\'', () => {
            expect(complexOperations.intersectionBetweenArrays(['azul','rojo'], ['amarillo','rojo'])).toMatch['rojo'];
        });
        test('given as arguments, returns', () => {
            expect(complexOperations.intersectionBetweenArrays()).toMatch('');
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        
    })
});


//node --experimental-specifier-resolution=node complexOperations
// npm run test-coverage