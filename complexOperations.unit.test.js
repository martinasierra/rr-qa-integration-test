import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
    
    describe('checkEmail', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
          });
        
          test('should return The email is valid', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
            expect(complexOperations.checkEmail('hola@radiumrocket.com')).toEqual('The email is valid');
        });

        test('should return The email is invalid', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail('radiumrocket.com')).toEqual('The email is invalid');
        });

        test('should return The email should be an string', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail(true)).toEqual('The email should be an string');
        });

        test('should return The email should be an string', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail()).toEqual('The email should be an string');
        });
    });


    describe('calculateArea', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        
        test('should return 32', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(32);
            expect(complexOperations.calculateArea('rectangle', 4, 8)).toBe(32);
        });

        test('should return 16', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(16);
            expect(complexOperations.calculateArea('square', 4, 4)).toBe(16);
        });

        test('should return 6', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(12);
            jest.spyOn(basicOperations, 'division').mockReturnValue(6);
            expect(complexOperations.calculateArea('triangle', 4, 3)).toBe(6);
        });

        test('should return 50.26548245743669', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'exponent').mockReturnValue(16);
            expect(complexOperations.calculateArea('circle', 4)).toBe(50.26548245743669);
        });

        test('should return hexagon is not supported', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            expect(complexOperations.calculateArea('hexagon', 4, 8)).toEqual('hexagon is not supported');
        });

        test('should return 1 is not supported', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            expect(complexOperations.calculateArea(1, 4, 8)).toEqual('1 is not supported');
        });

        test('should return number1 and number2 should be numbers', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.calculateArea('rectangle', 'four', 'eight')).toEqual('number1 and number2 should be numbers');
        });
    });

    describe('sumGreaterThan', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        test('should return 5 is less than 6', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(5);
            expect(complexOperations.sumGreaterThan(4, 1, 6)).toEqual('5 is less than 6');
        });
        test('should return 9 is greater than 1', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'sum').mockReturnValue(9);
            expect(complexOperations.sumGreaterThan(5, 4, 1)).toEqual('9 is greater than 1');
        });
        test('should return The params should be numbers', () => {
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.sumGreaterThan(undefined, undefined, 1)).toEqual('The params should be numbers');
        });
      });

    describe('intersectionBetweenArrays', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        test('should return [t,l]', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(['t','l']);
            expect(complexOperations.intersectionBetweenArrays(['t','l','m'],['t','m'])).toEqual(['t','l']);
        });

        test('should return There are not matching elements', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
            expect(complexOperations.intersectionBetweenArrays([1999,2004,2007],[2001,2005,2008])).toEqual('There are not matching elements');
        });

        test('should return The params should be arrays', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.intersectionBetweenArrays('this is not','an array')).toEqual('The params should be arrays');
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        test('should return {figure:\'triange\', sides:3},{figure:\'square\', sides:4}', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue([{figure:'triange', sides:3},{figure:'square', sides:4}]);
            expect(complexOperations.sortArrayOfObjectsByKey([{figure:'square', sides:4},{figure:'triange', sides:3}],'sides')).toEqual[{figure:'triange', sides:3},{figure:'square', sides:4}];
        });

        test('should return The second param should be an string', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.sortArrayOfObjectsByKey()).toEqual('The second param should be an string');
        });

        test('should return The first param should be an array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            expect(complexOperations.sortArrayOfObjectsByKey()).toEqual('The first param should be an array');
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        test('should return {odd: 1, even: 2}', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([-3]);
            jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([-2,-4]);
            expect(complexOperations.numberOfOddAndEvenNumbers([-2,-3,-4])).toEqual({odd: 1, even: 2});
        });
        
        test('should return The array should have only numbers', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers(['2',3,4])).toEqual('The array should have only numbers');
        });

        test('should return The param should be an array', () => {
            jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
            expect(complexOperations.numberOfOddAndEvenNumbers()).toEqual('The param should be an array');
        });
    });
});