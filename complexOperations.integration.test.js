import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Integration Tests', () => {

    describe('checkEmail', () => {
        test('given null as argument, returns The email should be an string', () => {
            expect(complexOperations.checkEmail()).toEqual('The email should be an string');
        });
        test('given an empty string as argument, returns The email should be an string', () => {
            expect(complexOperations.checkEmail('')).toEqual('The email should be an string');
        });
        test('given 12345 as argument, returns The email should be an string', () => {
            expect(complexOperations.checkEmail(12345)).toEqual('The email should be an string');
        });
        test('given hola@.com as argument, returns The email is invalid', () => {
            expect(complexOperations.checkEmail('hola@.com')).toEqual('The email is invalid');
        });
        test('given email as argument, returns The email is invalid', () => {
            expect(complexOperations.checkEmail('email')).toEqual('The email is invalid');
        });
        test('given hola@ as arguments, returns', () => {
            expect(complexOperations.checkEmail('hola@')).toEqual('The email is invalid');
        });
        test('given hola@radiumrocket.com as arguments, returns', () => {
            expect(complexOperations.checkEmail('hola@radiumrocket.com')).toEqual('The email is valid');
        });
    });

    describe('calculateArea', () => {
        test('given Parallelogram,2,4 as arguments, returns Parallelogram is not supported', () => {
            expect(complexOperations.calculateArea('Parallelogram', 2, 4)).toEqual('Parallelogram is not supported');
        });
        test('given undefined as argument, returns undefined is not supported', () => {
            expect(complexOperations.calculateArea()).toEqual('undefined is not supported');
        });
        test('given triangle, two, four as arguments, returns number1 and number2 should be numbers', () => {
            expect(complexOperations.calculateArea('triangle', 'two', 'four')).toEqual('number1 and number2 should be numbers');
        });
        test('given triange, 2, 4 as arguments, returns 6', () => {
            expect(complexOperations.calculateArea('triangle', 3, 4)).toBe(6);
        });
        test('given square, 4, 4 as arguments, returns 16', () => {
            expect(complexOperations.calculateArea('square', 4, 4)).toBe(16);
        });
        test('given circle, 2 as arguments, returns', () => {
            expect(complexOperations.calculateArea('circle', 2)).toBe(12.566370614359172);
        });
    });

    describe('sumGreaterThan', () => {
        test('given null as argument, returns The params should be numbers', () => {
            expect(complexOperations.sumGreaterThan()).toEqual('The params should be numbers');
        });
        test('given undefined and null as arguments, returns The params should be numbers', () => {
            expect(complexOperations.sumGreaterThan(undefined,[])).toEqual('The params should be numbers');
        });
        test('given 2,4,8 as arguments, returns 6 is less than 8', () => {
            expect(complexOperations.sumGreaterThan(2,4,8)).toEqual('6 is less than 8');
        });
        test('given 8,2,4 as arguments, returns 10 is greater than 4', () => {
            expect(complexOperations.sumGreaterThan(8,2,4)).toEqual('10 is greater than 4');
        });
    });

    describe('intersectionBetweenArrays', () => {
        test('given null as argument, returns The params should be arrays', () => {
            expect(complexOperations.intersectionBetweenArrays()).toEqual('The params should be arrays');
        });
        test('given [2,2,2] as argument, returns The params should be arrays', () => {
            expect(complexOperations.intersectionBetweenArrays([2,2,2])).toEqual('The params should be arrays');
        });
        test('given [1,2,3],[4,5,6] as arguments, returns There are no matching elements', () => {
            expect(complexOperations.intersectionBetweenArrays([1,2,3],[4,5,6])).toEqual('There are not matching elements');
        });
        test('given [\'hola\'],[\'chau\'] as arguments, returns There are not matching elements', () => {
            expect(complexOperations.intersectionBetweenArrays(['hola'],['chau'])).toEqual('There are not matching elements');
        });
        test('given [\'azul\',\'rojo\'], [\'amarillo\',\'rojo\'] as arguments, returns \'rojo\'', () => {
            expect(complexOperations.intersectionBetweenArrays(['azul','rojo'], ['amarillo','rojo'])).toEqual['rojo'];
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        test('happy path', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Anoche', date: 2005}, {name: 'Miami', date: 1999}], 'date')).toEqual[{name: 'Miami', date: 1999},{name: 'Anoche', date: 2005}];
        });
        test('happy path', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Excursiones', date: 1999}, {name: 'Miami', date: 1999}], 'date')).toEqual[{name: 'Miami', date: 1999},{name: 'Excursiones', date: 1999}];
        });
        test('happy path', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Excursiones', date: 1999}, {name: 'Miami', date: 1999}], 'name')).toEqual[{name: 'Miami', date: 1999},{name: 'Excursiones', date: 1999}];
        });
        test('given undefined, date as arguments returns The first param should be an array', () => {
            expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'date')).toEqual('The first param should be an array');
        });
        test('given a number as key, returns The second param should be an string', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Anoche', date: 2005}, {name: 'Miami', date: 1999}], 2000)).toEqual('The second param should be an string');
        });
        test('returns Some elements in the array does not have the date property', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Anoche', date: 2005}, {name: 'Miami'}], 'date')).toEqual('Some elements in the array does not have the date property');
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        test('given string array as argument, returns The param should be an array', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers('one, two')).toEqual('The param should be an array');
        });
        test('given null as argument, returns The param should be an array', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers()).toEqual('The param should be an array');
        });
        test('given 1, two as argument, returns The array should have only numbers', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 'two'])).toEqual('The array should have only numbers')
        });
        test('given [1, 3, 5] as argument, returns odd: 3, even: 0', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 3, 5])).toEqual({odd: 3, even: 0});
        });
        test('given [2, 4, 8] as argument, returns odd: 0, even: 3', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([2, 4, 8])).toEqual({odd: 0, even: 3});
        });
        test('given [1, 4, 3, 8] as argument, returns odd: 2, even: 2', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([1, 4, 3, 8])).toEqual({odd: 2, even: 2});
        });
    });
});