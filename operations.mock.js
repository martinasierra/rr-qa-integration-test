import 'jest';

let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(6);
let multip = jest.fn().mockReturnValue(20);
let division = jest.fn().mockReturnValue();
let exponent = jest.fn().mockReturnValue();
let isSupportedFigure = jest.fn().mockReturnValue();
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue();
let arrayIntersection = jest.fn().mockReturnValue();
let sortArrayByKey = jest.fn().mockReturnValue();
let getEvenNumbersFromArray = jest.fn().mockReturnValue();
let getOddNumbersFromArray = jest.fn().mockReturnValue();

const funcMock = jest.mock('./basicOperations', () => {
    return {
        isNumber,
        isArray,
        isString,
        validateEmail,
        sum,
        multip,
        division,
        exponent,
        isSupportedFigure,
        arrayElementsAreObjectWithKey,
        arrayIntersection,
        sortArrayByKey,
        getEvenNumbersFromArray,
        getOddNumbersFromArray
    };
});

export default funcMock;