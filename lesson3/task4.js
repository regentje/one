//Система продажи билетов 


function Show() {
    let concert = {}
    let boxOffice = 0;
    let ticketOffice = [];
    this.createEvent = (name, price) => {
      concert.name = name;
      concert.value = price;
    }
    this.buyTicket = (nameConcert) => {
      if (concert.name === nameConcert) {
        let id = getId(100000, 1000000);
        boxOffice += concert.value, ticketOffice.push(id);
        console.log(id)
      } else {
        console.log('there is no such concert')
      }
    }
    this.returnTicket = (idNumber) => ticketOffice.forEach(function(item, index, object) {
      if (item === Number(idNumber)) {
        object.splice(index, 1);
        boxOffice = boxOffice - concert.value;
      }
    });
  }
  
  
  const ticketWindow = new Show();
  
  const getId = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  
  
  
  //Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
  ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
  ticketWindow.buyTicket('Concert')
  ticketWindow.buyTicket('Concert')
  
  ticketWindow.buyTicket('Concert')
  ticketWindow.buyTicket('Concert')
  ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
  //случайный шестизначный ID билета, создать ID можно любым способом */
  
  ticketWindow.returnTicket('643599')
   /* Возвращаем билет, если в системе такой id записан
  //как проданный, он должен быть удален из списка проданных и из кассы должна быть
  //вычтена соответствующая его цене сумма */
  
  