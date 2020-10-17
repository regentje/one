/*Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
    addCoin - Добавляет 1 монету в копилку 
    getAmount - Возвращает количество монет в копилке 
Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.*/



function MoneyBox() {
  this.coin = 0;

  this.addCoin = () => {
    this.coin = this.coin + 1;
  }
  this.getAmount = () => { console.log(this.coin) }
}
const box = new MoneyBox();

box.getAmount(); // 0
box.addCoin();
box.addCoin();
box.getAmount(); // 2
box.getAmount(); // 2
box.addCoin();
box.addCoin();
box.getAmount(); // 4



