'use strict';

//object for first and pike location

var pikeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstAndPikeInfo = {
  locationName: 'First and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgSale: 6.3,
  dailySales: 0,
  randCustPerHour: [],
  hourlySales: [],
  calcCustPerHour: function randomCustNum(min, max){
    for(var i = 0; i < pikeHours.length; i++){
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
    }
  },
  calcSales: function(){
    for (var i = 0; i < pikeHours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
      this.dailySales += this.hourlySales[i];
    }

  },
  render: function(){              //creates and renders the li elements for the first and pike ul
    this.calcCustPerHour();
    this.calcSales();

    var firstAndPikeEl = document.getElementById('firstAndPikeShop');
    for (var i = 0; i < this.hourlySales.length; i ++) {
      var liFirstAndPike = document.createElement('li');
      firstAndPikeEl.appendChild(liFirstAndPike);
      liFirstAndPike.textContent = pikeHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
    }
    firstAndPikeEl = document.getElementById('firstAndPikeShop');
    firstAndPikeEl.appendChild(liFirstAndPike);
    liFirstAndPike.textContent = this.dailySales + ' total cookies sold today.';
  }
};

firstAndPikeInfo.render();

//object for seatac airport location

var seatacHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var seatacInfo = {
  minCustomer: 3,
  maxCustomer: 24,
  avgSale: 1.2,
  randCustPerHour: [],
  calcCustPerHour: function randomCustNum(min, max){
    for(var i = 0; i < seatacHours.length; i++){
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
    }
  },
  dailySales: 0,
  hourlySales: [],
  calcSales: function(){
    for (var i = 0; i < seatacHours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
      this.dailySales += this.hourlySales[i];
    }

  },
  render: function(){              //creates and renders the li elements for the seatac ul
    this.calcCustPerHour();
    this.calcSales();

    var seatacEl = document.getElementById('seatacAirportShop');
    for (var i = 0; i < this.hourlySales.length; i ++) {
      var seatacAirportShop = document.createElement('li');
      seatacEl.appendChild(seatacAirportShop);
      seatacAirportShop.textContent = seatacHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
    }
    seatacEl = document.getElementById('seatacAirportShop');
    seatacEl.appendChild(seatacAirportShop);
    seatacAirportShop.textContent = this.dailySales + ' total cookies sold today.';
  }
};

seatacInfo.render();

//object for seattle center loaction

var seattleCenterHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var seattleCenterInfo = {
  minCustomer: 11,
  maxCustomer: 38,
  avgSale: 3.7,
  randCustPerHour: [],
  calcCustPerHour: function randomCustNum(min, max){
    for(var i = 0; i < seattleCenterHours.length; i++){
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
    }
  },
  dailySales: 0,
  hourlySales: [],
  calcSales: function(){
    for (var i = 0; i < seattleCenterHours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
      this.dailySales += this.hourlySales[i];
    }

  },
  render: function(){              //creates and renders the li elements for the seattle center ul
    this.calcCustPerHour();
    this.calcSales();

    var seattleCenterEl = document.getElementById('seattleCenterShop');
    for (var i = 0; i < this.hourlySales.length; i ++) {
      var liSeattleCenter = document.createElement('li');
      seattleCenterEl.appendChild(liSeattleCenter);
      liSeattleCenter.textContent = seattleCenterHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
    }
    seattleCenterEl = document.getElementById('seattleCenterShop');
    seattleCenterEl.appendChild(liSeattleCenter);
    liSeattleCenter.textContent = this.dailySales + ' total cookies sold today.';
  }
};

seattleCenterInfo.render();

//begin object for capitol hill location

var capHillHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var capHillInfo = {
  minCustomer: 20,
  maxCustomer: 38,
  avgSale: 2.3,
  randCustPerHour: [],
  calcCustPerHour: function randomCustNum(min, max){
    for(var i = 0; i < capHillHours.length; i++){
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
    }
  },
  dailySales: 0,
  hourlySales: [],
  calcSales: function(){
    for (var i = 0; i < capHillHours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
      this.dailySales += this.hourlySales[i];
    }

  },
  render: function(){              //creates and renders the li elements for the capitol hill ul
    this.calcCustPerHour();
    this.calcSales();

    var capHillEl = document.getElementById('capHillShop');
    for (var i = 0; i < this.hourlySales.length; i ++) {
      var liCapHill = document.createElement('li');
      capHillEl.appendChild(liCapHill);
      liCapHill.textContent = capHillHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
    }
    capHillEl = document.getElementById('capHillShop');
    capHillEl.appendChild(liCapHill);
    liCapHill.textContent = this.dailySales + ' total cookies sold today.';
  }
};

capHillInfo.render();

//begin object for alki location

var alkiHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var alkiInfo = {
  minCustomer: 2,
  maxCustomer: 16,
  avgSale: 4.6,
  randCustPerHour: [],
  calcCustPerHour: function randomCustNum(min, max){
    for(var i = 0; i < alkiHours.length; i++){
      min = Math.ceil(this.minCustomer);
      max = Math.floor(this.maxCustomer);
      this.randCustPerHour.push(Math.ceil(Math.random() * (max - min)) + min);
    }
  },
  dailySales: 0,
  hourlySales: [],
  calcSales: function(){
    for (var i = 0; i < alkiHours.length; i++) {
      this.hourlySales.push(Math.ceil(this.randCustPerHour[i] * this.avgSale));
      this.dailySales += this.hourlySales[i];
    }
  },
  render: function(){              //creates and renders the li elements for the alki ul
    this.calcCustPerHour();
    this.calcSales();

    var alkiEl = document.getElementById('alkiShop');
    for (var i = 0; i < this.hourlySales.length; i ++) {
      var alkiShop = document.createElement('li');
      alkiEl.appendChild(alkiShop);
      alkiShop.textContent = alkiHours[i] + ' - ' + this.hourlySales[i] + ' cookies sold.';
    }
    alkiEl = document.getElementById('alkiShop');
    alkiEl.appendChild(alkiShop);
    alkiShop.textContent = this.dailySales + ' total cookies sold today.';
  }
};

alkiInfo.render();
