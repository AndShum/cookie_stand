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
