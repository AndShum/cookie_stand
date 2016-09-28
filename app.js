'use strict';


var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var allStores = []; //stores the arrays for each of the stores
function StoreInfo(locationName, minCustomer, maxCustomer, avgSale){ //constructor creating the array's for the stores and rendering the table data
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSale = avgSale;
  this.dailySales = 0;
  this.randCustPerHour = [];
  this.hourlySales = [];
  this.calcCustPerHour = function randomCustNum(min, max){ //calulates random # of customer for each hour between the min & max numbers provided
    for(var i = 0; i < hours.length; i++){
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
    }
  };
  this.calcSales = function(){ //calculates the # of cookies sold each hour
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
      this.dailySales += this.hourlySales[i];
    }
  };

  this.calcCustPerHour();
  this.calcSales();
  allStores.push(this); //pushes data from calc functions to allStores array

  this.render = function(){ //renders all of the data into the table element in the sales.html
    var salesTable = document.getElementById('salesFigures');//connects this function with table element in sales.html
    var tableRow = document.createElement('tr');//creates a table row element to be filled
    var storeName = document.createElement('td');//creates a table cell that will be placed into the table row
    storeName.textContent = this.locationName;//creates the text that will be contained within the teble cell
    tableRow.appendChild(storeName);//appends the created table cell into the table row
    for (var i = 0; i < hours.length; i++){ //loop that will create the cells to hold the hourly cookie sales for each store
      var tableData = document.createElement('td'); //creates new table cell
      tableData.textContent = this.hourlySales[i]; //creates the text to be held in the table cell
      tableRow.appendChild(tableData); //appends the new cell to the table row
    }
    var saleTotals = document.createElement('td'); //creates a new table cell
    saleTotals.textContent = this.dailySales; //creates text to be in the table cell for the total daily sales
    tableRow.appendChild(saleTotals); //appends table cell to the table row
    salesTable.appendChild(tableRow); //appends the now completed table row to the table element in sales.html
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
 //document.createAttribute
 //att.value = this.name
