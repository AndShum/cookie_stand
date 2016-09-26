'use strict';

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
      this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
    }
  },
  dailySales: 0,
  hourlySales: [],
  calcSales: function(){
    for (var i = 0; i < hour.length; i++) {
      this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
    }

  }

};

console.log(firstAndPikeInfo);
firstAndPikeInfo.calcCustPerHour();
firstAndPikeInfo.calcSales();
console.log(firstAndPikeInfo);

// var firstAndPikeEl = document.getElementById('firstAndPikeShop');
// var liFirstAndPike = document.createElement('li');
// liFirstAndPike.textContent = Math.floor(firstAndPikeInfo.randCustPerHour * firstAndPikeAvg);
// firstAndPikeEl.appendChild(liFirstAndPike);
//
//
//
// firstAndPikeInfo.calcAvgSales(this.liFirstAndPike);
// console.log(firstAndPikeInfo.randCustPerHour);

//
// firstAndPikeInfo.calcCustPerHour();
// console.log(firstAndPikeInfo.randCustPerHour);
