function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

const multiply = (
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) => {
  return firstNumber * base;
};

const result: number = addNumbers(2, 3);
const result2: string = addNumbersArrow(2, 3);
const multiplyResult: number = multiply(5);

console.log({ result, result2 });
console.log({ multiplyResult });

export {};
