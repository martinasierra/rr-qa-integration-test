import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
    
    describe('checkEmail', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
          });
        
          test('test for checkEmail', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
            expect(complexOperations.checkEmail('hola@radiumrocket.com')).toEqual('The email is valid');
        });

        test('test for checkEmail', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail('radiumrocket.com')).toEqual('The email is invalid');
        });

        test('test for checkEmail', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail(true)).toEqual('The email should be an string');
        });

        test('test for checkEmail', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail()).toEqual('The email should be an string');
        });
    });


    describe('calculateArea', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        
        test('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(32);
            expect(complexOperations.calculateArea('rectangle', 4, 8)).toBe(32);
        });

        test('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(16);
            expect(complexOperations.calculateArea('square', 4, 4)).toBe(16);
        });

        test('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(12);
            jest.spyOn(basicOperations, 'division').mockReturnValue(6);
            expect(complexOperations.calculateArea('triangle', 4, 3)).toBe(6);
        });

        test('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'exponent').mockReturnValue(16);
            expect(complexOperations.calculateArea('circle', 4)).toBe(50.26548245743669);
        });

        test('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            expect(complexOperations.calculateArea('hexagon', 4, 8)).toEqual('hexagon is not supported');
        });

        test('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.calculateArea('rectangle', 'four', 'eight')).toEqual('number1 and number2 should be numbers');
        });
    });

    describe('sumGreaterThan', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        test('test for sumGreaterThan', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(5);
            expect(complexOperations.sumGreaterThan(4, 1, 6)).toEqual('5 is less than 6');
        });
        test('test for sumGreaterThan', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(9);
            expect(complexOperations.sumGreaterThan(5, 4, 1)).toEqual('9 is greater than 1');
        });
        test('test for sumGreaterThan', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.sumGreaterThan(undefined, undefined, 1)).toEqual('The params should be numbers');
        });
      });

    describe('intersectionBetweenArrays', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        test('test for intersectionBetweenArrays', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(['t','l']);
            expect(complexOperations.intersectionBetweenArrays(['t','l','m'],['t','m'])).toEqual(['t','l']);
        });

        test('test for intersectionBetweenArrays', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
            expect(complexOperations.intersectionBetweenArrays([1999,2004,2007],[2001,2005,2008])).toEqual('There are not matching elements');
        });

        test('test for intersectionBetweenArrays', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.intersectionBetweenArrays('this is not','an array')).toEqual('The params should be arrays');
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        test('test for sortArrayOfObjectsByKey', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayElementsAreObjectWtesthKey').mockReturnValue([{figure:'triange', sides:3},{figure:'square', sides:4}]);
            expect(complexOperations.sortArrayOfObjectsByKey([{figure:'square', sides:4},{figure:'triange', sides:3}],'sides')).toEqual[{figure:'triange', sides:3},{figure:'square', sides:4}];
        });

        test('test for sortArrayOfObjectsByKey', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey()).toEqual('The second param should be an string');
        });

        test('test for sortArrayOfObjectsByKey', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            expect(complexOperations.sortArrayOfObjectsByKey()).toEqual('The first param should be an array');
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        test('test for numberOfOddAndEvenNumbers', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([-3]);
            jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([-2,-4]);
            expect(complexOperations.numberOfOddAndEvenNumbers([-2,-3,-4])).toEqual({odd: 1, even: 2});
        });
        
        test('test for numberOfOddAndEvenNumbers', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers(['2',3,4])).toEqual('The array should have only numbers');
        });

        test('test for numberOfOddAndEvenNumbers', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers()).toEqual('The param should be an array');
        });
    });
});