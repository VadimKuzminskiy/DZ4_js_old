let numX = +prompt('введите первое число');
let numY = +prompt('введите второе число');
let znak = prompt('введите математический знак');

function doMath (numX, znak, numY) {
    let result;
switch (znak) {
    case '+':
        result = numX + numY;
        break;

    case '-':
        result = numX - numY;
        break;

    case '*':
        result = numX * numY;
        break;

    case '/':
        result = numX / numY;
        break;

    case '%':
        result = numX % numY;
        break;

    }
    return result;
}

let result = doMath(numX, znak, numY);
alert(result);