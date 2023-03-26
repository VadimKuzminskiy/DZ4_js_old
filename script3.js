const n = +prompt('введи число являющееся степенью 2ки');

function someFunction(n) {
    if (n <= 0) {
      return "NO";
    }
    while (n > 1) {
      if (n % 2 !== 0) {
        return "NO";
      }
      n = n / 2;
    }
    return "YES";
  }
  
  alert(someFunction(n));