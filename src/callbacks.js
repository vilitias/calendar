const doSmthWith4and7 = (callback) => {
  const a = 4;
  const b = 7;
  const result = callback(a, b);
  console.log(result);
};

const mult = (c, d) => {
  return c * d;
};

const sum = (first, second) => {
  return first + second;
};

doSmthWith4and7(mult);
doSmthWith4and7(sum);
