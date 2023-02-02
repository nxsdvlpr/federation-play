export const fizzBuzz = (stop: number = 0): Array<String | Number> => {
  const list: Array<String | Number> = [];
  for (let i = 1; i <= stop; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      list.push('Fizz Buzz');
    } else if (i % 3 == 0) {
      list.push('Fizz');
    } else if (i % 5 == 0) {
      list.push('Buzz');
    } else {
      list.push(i);
    }
  }

  return list;
};

const result = fizzBuzz(100);
console.log(result.join(', '));
