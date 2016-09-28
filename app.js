'use strict';

//object for first and pike location

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = [];
function StoreInfo(locationName, minCustomer, maxCustomer, avgSale){
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSale = avgSale;
  this.dailySales = 0;
  this.randCustPerHour = [];
  this.hourlySales = [];
  this.calcCustPerHour = function randomCustNum(min, max){
    for(var i = 0; i < hours.length; i++){
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
    }
  };
  this.calcSales = function(){
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
      this.dailySales += this.hourlySales[i];
    }
  };

  this.calcCustPerHour();
  this.calcSales();
  allStores.push(this);


  console.log(allStores);
  this.render = function(){              //creates and renders the li elements for the seatac ul
    var salesTable = document.getElementById('salesFigures');
    var tableRow = document.createElement('tr');
    var storeName = document.createElement('td');
    storeName.textContent = this.locationName;
    tableRow.appendChild(storeName);
    for (var i = 0; i < hours.length; i++){
      var tableData = document.createElement('td');
      tableData.textContent = this.hourlySales[i];
      tableRow.appendChild(tableData);
    }
    var saleTotals = document.createElement('td');
    saleTotals.textContent = this.dailySales;
    tableRow.appendChild(saleTotals);
    salesTable.appendChild(tableRow);
  };
}

//instances
new StoreInfo('First and Pike Location', 23, 65, 6.3);
new StoreInfo('SeaTac Airport Location', 3, 24, 1.2);
new StoreInfo('Seattle Center Location', 11, 38, 3.7);
new StoreInfo('Capitol Hill Location', 20, 38, 2.3);
new StoreInfo('Alki Location', 2, 16, 4.6);

function createTableHeader(){              //creates and renders the li elements for the first and pike ul
  var salesTable = document.getElementById('salesFigures');

  var tableRow = document.createElement('tr');

  var emptyTd = document.createElement('td');
  tableRow.appendChild(emptyTd);
  for (var i = 0; i < hours.length; i++){
    var tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
  var locationTotal = document.createElement('td');
  locationTotal.textContent = 'Daily Location Total';
  tableRow.appendChild(locationTotal);

  salesTable.appendChild(tableRow);
};

createTableHeader();

function generateTableData(){
  for ( var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}
generateTableData();

function createTableFooter(){
  var salesTable = document.getElementById('salesFigures');
  var tableRow = document.createElement('tr');
  var footerTotals = document.createElement('td');
  footerTotals.textContent = 'Totals';
  tableRow.appendChild(footerTotals);
  for ( var i = 0; i < hours.length + 1; i++){
    var hourlyTotals = document.createElement('td');
    hourlyTotals.textContent = '';
    tableRow.appendChild(hourlyTotals);
  }
  salesTable.appendChild(tableRow);
}
createTableFooter();
//

//
//   var tableData = document.createElement('th');
//   tableData.textContent =  dailySales[i];
//   tableHeader.appendChild(tableData);
//
//
//   for (var i = 0; i < this.hourlySales.length; i ++) {
//     var liFirstAndPike = document.createElement('li');
//     firstAndPikeEl.appendChild(liFirstAndPike);
//     liFirstAndPike.textContent = hours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
//   }
//   firstAndPikeEl = document.getElementById('salesFigures');
//   firstAndPikeEl.appendChild(liFirstAndPike);
//   liFirstAndPike.textContent = this.dailySales + ' total cookies sold today.';
// };



// console.log(storeInfo);
// storeInfo.render();

//object for seatac airport location
//
// var seatacHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var seatacInfo = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgSale: 1.2,
//   randCustPerHour: [],
//   calcCustPerHour: function randomCustNum(min, max){
//     for(var i = 0; i < seatacHours.length; i++){
//       min = Math.ceil(this.minCustomer);
//       max = Math.floor(this.maxCustomer);
//       this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
//     }
//   },
//   dailySales: 0,
//   hourlySales: [],
//   calcSales: function(){
//     for (var i = 0; i < seatacHours.length; i++) {
//       this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
//       this.dailySales += this.hourlySales[i];
//     }
//
//   },
  // render: function(){              //creates and renders the li elements for the seatac ul
  //   this.calcCustPerHour();
  //   this.calcSales();
  //
  //   var seatacEl = document.getElementById('seatacAirportShop');
  //   for (var i = 0; i < this.hourlySales.length; i ++) {
  //     var seatacAirportShop = document.createElement('li');
  //     seatacEl.appendChild(seatacAirportShop);
  //     seatacAirportShop.textContent = seatacHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
  //   }
  //   seatacEl = document.getElementById('seatacAirportShop');
  //   seatacEl.appendChild(seatacAirportShop);
  //   seatacAirportShop.textContent = this.dailySales + ' total cookies sold today.';
  // }
// };
//
// seatacInfo.render();
//
// //object for seattle center loaction
//
// var seattleCenterHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var seattleCenterInfo = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgSale: 3.7,
//   randCustPerHour: [],
//   calcCustPerHour: function randomCustNum(min, max){
//     for(var i = 0; i < seattleCenterHours.length; i++){
//       min = Math.ceil(this.minCustomer);
//       max = Math.floor(this.maxCustomer);
//       this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
//     }
//   },
//   dailySales: 0,
//   hourlySales: [],
//   calcSales: function(){
//     for (var i = 0; i < seattleCenterHours.length; i++) {
//       this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
//       this.dailySales += this.hourlySales[i];
//     }
//
//   },
//   render: function(){              //creates and renders the li elements for the seattle center ul
//     this.calcCustPerHour();
//     this.calcSales();
//
//     var seattleCenterEl = document.getElementById('seattleCenterShop');
//     for (var i = 0; i < this.hourlySales.length; i ++) {
//       var liSeattleCenter = document.createElement('li');
//       seattleCenterEl.appendChild(liSeattleCenter);
//       liSeattleCenter.textContent = seattleCenterHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
//     }
//     seattleCenterEl = document.getElementById('seattleCenterShop');
//     seattleCenterEl.appendChild(liSeattleCenter);
//     liSeattleCenter.textContent = this.dailySales + ' total cookies sold today.';
//   }
// };
//
// seattleCenterInfo.render();
//
// //begin object for capitol hill location
//
// var capHillHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var capHillInfo = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgSale: 2.3,
//   randCustPerHour: [],
//   calcCustPerHour: function randomCustNum(min, max){
//     for(var i = 0; i < capHillHours.length; i++){
//       min = Math.ceil(this.minCustomer);
//       max = Math.floor(this.maxCustomer);
//       this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
//     }
//   },
//   dailySales: 0,
//   hourlySales: [],
//   calcSales: function(){
//     for (var i = 0; i < capHillHours.length; i++) {
//       this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
//       this.dailySales += this.hourlySales[i];
//     }
//
//   },
//   render: function(){              //creates and renders the li elements for the capitol hill ul
//     this.calcCustPerHour();
//     this.calcSales();
//
//     var capHillEl = document.getElementById('capHillShop');
//     for (var i = 0; i < this.hourlySales.length; i ++) {
//       var liCapHill = document.createElement('li');
//       capHillEl.appendChild(liCapHill);
//       liCapHill.textContent = capHillHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
//     }
//     capHillEl = document.getElementById('capHillShop');
//     capHillEl.appendChild(liCapHill);
//     liCapHill.textContent = this.dailySales + ' total cookies sold today.';
//   }
// };
//
// capHillInfo.render();
//
// //begin object for alki location
//
// var alkiHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var alkiInfo = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgSale: 4.6,
//   randCustPerHour: [],
//   calcCustPerHour: function randomCustNum(min, max){
//     for(var i = 0; i < alkiHours.length; i++){
//       min = Math.ceil(this.minCustomer);
//       max = Math.floor(this.maxCustomer);
//       this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
//     }
//   },
//   dailySales: 0,
//   hourlySales: [],
//   calcSales: function(){
//     for (var i = 0; i < alkiHours.length; i++) {
//       this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
//       this.dailySales += this.hourlySales[i];
//     }
//   },
//   render: function(){              //creates and renders the li elements for the alki ul
//     this.calcCustPerHour();
//     this.calcSales();
//
//     var alkiEl = document.getElementById('alkiShop');
//     for (var i = 0; i < this.hourlySales.length; i ++) {
//       var alkiShop = document.createElement('li');
//       alkiEl.appendChild(alkiShop);
//       alkiShop.textContent = alkiHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
//     }
//     alkiEl = document.getElementById('alkiShop');
//     alkiEl.appendChild(alkiShop);
//     alkiShop.textContent = this.dailySales + ' total cookies sold today.';
//   }
// };
//
// alkiInfo.render();
