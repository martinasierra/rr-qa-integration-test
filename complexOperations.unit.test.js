import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
    
    describe('checkEmail', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
          });
        
          it('test for checkEmail', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
            expect(complexOperations.checkEmail('hola@radiumrocket.com')).toEqual('The email is valid');
        });

        it('test for checkEmail', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
            jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
            expect(complexOperations.checkEmail('radiumrocket.com')).toEqual('The email is invalid');
        });

        it('test for checkEmail', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail(true)).toEqual('The email should be an string');
        });

        it('test for checkEmail', () => {
            jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
            expect(complexOperations.checkEmail()).toEqual('The email should be an string');
        });
    });


    describe('calculateArea', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
          });
        
        it('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(32);
            expect(complexOperations.calculateArea('rectangle', 4, 8)).toBe(32);
        });

        it('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(32);
            expect(complexOperations.calculateArea('square', 4, 8)).toBe(32);
        });

        it('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(32);
            expect(complexOperations.calculateArea('triangle', 4, 8)).toBe(32);
        });

        it('calculateArea', () => {
            jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
            jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
            jest.spyOn(basicOperations, 'multip').mockReturnValue(32);
            expect(complexOperations.calculateArea('circle', 4)).toBe(32);
        });
    });
});