let arr = ['sdf', 'rter', 'potr', 'treert'];
let arr2 = ['23', '432', '234', '665'];

Array.prototype.shuffle = function () {
  function arrShuffled() {
    return Math.random() - 0.5;
  }
  console.log(this.sort(arrShuffled));
}

arr.shuffle();
arr2.shuffle();



