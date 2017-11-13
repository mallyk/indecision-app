function square(x) {
    return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
    return x * x;
};

const squareArrowExpressionSyntax = (x) => x * x;

console.log(squareArrow(4));
console.log(squareArrowExpressionSyntax(9));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

const getFirstNameExpSyntax = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameExpSyntax('Mike Smith'));