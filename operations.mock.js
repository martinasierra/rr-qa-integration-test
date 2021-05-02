import 'jest';

let sum = jest.fn().mockReturnValue(10);
let multip = jest.fn().mockReturnValue(20);

const funcMock = jest.mock('./basicOperations', () => {
    return {
        sum,
        multip
    };
});

export default funcMock;