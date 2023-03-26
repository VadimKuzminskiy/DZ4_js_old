const numX = +prompt('введи число являющееся степенью 2ки');

function someFunction(numX) {
    if (numX > 1) {
        return someFunction(numX / 2);
    }
    if (numX === 1) {
        return 'Yes';
    }
    return 'No';
}

alert(someFunction(numX));