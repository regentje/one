const cache = () => {
  let result = {};
  let arg1;
  let arg2;
  function getResult(x, y) {

    if (arg1 == x && arg2 == y) {
      result.fromCache = true;
      console.log(result);
    } else {
      result.value = Math.pow(x, y);
      result.fromCache = false;
      console.log(result);
    }
    return (
      arg1 = x,
      arg2 = y,
      result
    )
  }
  return getResult;
}
const calculate = cache();

calculate(3, 3)
calculate(2, 10)
calculate(2, 10)
calculate(2, 10)
calculate(2, 10)
calculate(3, 3)
calculate(10, 10)
calculate(10, 10)




