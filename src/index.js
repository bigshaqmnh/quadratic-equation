module.exports = function solveEquation(equation) {
  let substringArray = equation.split(' ');

  let a = +substringArray[0], b, c;

  if (substringArray[3] === '-') {
    b = - (+substringArray[4]);
  } else {
    b = +substringArray[4];
  }

  if (substringArray[7] === '-') {
    c = - (+substringArray[8]);
  } else {
    c = +substringArray[8];
  }

  const discriminant = (a, b, c) => b * b - 4 * a * c;

  let x1 = ((-b) + Math.sqrt(discriminant(a, b, c))) / (2 * a);
  let x2 = ((-b) - Math.sqrt(discriminant(a, b, c))) / (2 * a); 

  let resArr = [Math.round(x1), Math.round(x2)];

  return resArr.sort((x1, x2) => x1 - x2);
}
