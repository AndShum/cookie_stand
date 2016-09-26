'use strict';

var firstAndPikeEl = document.getElementById('firstAndPikeShop');
var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstAndPikeInfo = {
  minCustomer: 23,
  maxCustomer: 65,
  avgSale: 6.3,
  randCustPerHour: [],
  calcCustPerHour: function randomCustNum(min, max){
    for(var i = 0; i < hour.length; i++){
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      this.randCustPerHour.push(Math.floor(Math.random() * (max - min)) + min);
    }
  },
  dailyAvgSales: [],
  calcAvgSales: function generateAvgSales(){
    for (var i = 0; i < hour.length; i++) {
      var liFirstAndPike = document.createElement('li');
      var firstAndPikeAvg = 6.3;
      console.log(hour[i] + ' ' + this.randCustPerHour + ' customers');
      liFirstAndPike.textContent = Math.floor(this.randCustPerHour() / firstAndPikeAvg);
      firstAndPikeEl.appendChild(liFirstAndPike);
    }
  }

};

firstAndPikeInfo.calcAvgSales(liFirstAndPike.textContent);
console.log(firstAndPikeInfo.randCustPerHour);


// firstAndPikeInfo.calcCustPerHour();
// console.log(firstAndPikeInfo.randCustPerHour);
