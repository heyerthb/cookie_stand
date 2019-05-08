'use strict';

// source from MDN math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeStore = document.getElementById('pike-store');
var seatacStore = document.getElementById('seatac-store');
var seattleCenterStore = document.getElementById('seattle-center-store');
var capitolHillStore = document.getElementById('capitol-hill-store');
var alkiStore = document.getElementById('alki-store');

//   }
// Object Literal Pike Location
var pike = {
  name: 'Pike',
  minCust: 23,
  maxCust: 65,
  avgSalePer: 6.3,
  hourlySales: [],
  custHour: [],
  cookiesDay: 0,
  hourlyCustCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custHour.push(calcRandomCustomers(this.minCust, this.maxCust));
    }
  },
  hourlySalesCalc: function(){
    this.hourlyCustCalc();
    for(var i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
    }
  },
  cookiesDayCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesDay += this.hourlySales[i];
    }
  },
  render: function(){
    this.hourlySalesCalc();
    this.cookiesDayCalc();
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlySales[i];
      pikeStore.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = this.cookiesDay;
    pikeStore.appendChild(liEl);
  }
};

function calcRandomCustomers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

pike.render();





//////////////////////////////////////////////////////////////





var seatac = {
  name: 'Seatac',
  minCust: 3,
  maxCust: 24,
  avgSalePer: 1.2,
  hourlySales: [],
  custHour: [],
  cookiesDay: 0,
  hourlyCustCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custHour.push(calcRandomCustomers(this.minCust, this.maxCust));
    }
  },
  hourlySalesCalc: function(){
    this.hourlyCustCalc();
    for(var i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
    }
  },
  cookiesDayCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesDay += this.hourlySales[i];
    }
  },
  render: function(){
    this.hourlySalesCalc();
    this.cookiesDayCalc();
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlySales[i];
      seatacStore.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = this.cookiesDay;
    seatacStore.appendChild(liEl);
  }
};


seatac.render();






/////////////////////////////////////////////////////////





var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSalePer: 3.7,
  hourlySales: [],
  custHour: [],
  cookiesDay: 0,
  hourlyCustCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custHour.push(calcRandomCustomers(this.minCust, this.maxCust));
    }
  },
  hourlySalesCalc: function(){
    this.hourlyCustCalc();
    for(var i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
    }
  },
  cookiesDayCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesDay += this.hourlySales[i];
    }
  },
  render: function(){
    this.hourlySalesCalc();
    this.cookiesDayCalc();
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlySales[i];
      seattleCenterStore.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = this.cookiesDay;
    seattleCenterStore.appendChild(liEl);
  }
};

seattleCenter.render();






///////////////////////////////////////////////////////////






var capHill = {
  name: 'Capitol Hill Store',
  minCust: 20,
  maxCust: 38,
  avgSalePer: 2.3,
  hourlySales: [],
  custHour: [],
  cookiesDay: 0,
  hourlyCustCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custHour.push(calcRandomCustomers(this.minCust, this.maxCust));
    }
  },
  hourlySalesCalc: function(){
    this.hourlyCustCalc();
    for(var i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
    }
  },
  cookiesDayCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesDay += this.hourlySales[i];
    }
  },
  render: function(){
    this.hourlySalesCalc();
    this.cookiesDayCalc();
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlySales[i];
      capitolHillStore.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = this.cookiesDay;
    capitolHillStore.appendChild(liEl);
  }
};



capHill.render();




//////////////////////////////////////////////////////////



var alki = {
  name: 'Pike',
  minCust: 2,
  maxCust: 16,
  avgSalePer: 4.6,
  hourlySales: [],
  custHour: [],
  cookiesDay: 0,
  hourlyCustCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custHour.push(calcRandomCustomers(this.minCust, this.maxCust));
    }
  },
  hourlySalesCalc: function(){
    this.hourlyCustCalc();
    for(var i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
    }
  },
  cookiesDayCalc: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesDay += this.hourlySales[i];
    }
  },
  render: function(){
    this.hourlySalesCalc();
    this.cookiesDayCalc();
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlySales[i];
      alkiStore.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = this.cookiesDay;
    alkiStore.appendChild(liEl);
  }
};


alki.render();











// var seatac = {
//   name: 'Seatac',
//   location: 'Seatac Airport' ,
//   minCust: 3,
//   maxCust: 24,
//   avgSalePer: 1.2,
//   hourlySales: [],
//   hourlySalesCalc: function(){
//     for(var i = 0; i < hours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
//     }
//   }
// };

// seatac.hourlySalesCalc();

// var seattleCenter = {
//   name: 'Seattle Center',
//   location: 'Seattle Center' ,
//   minCust: 11,
//   maxCust: 38,
//   avgSalePer: 3.7,
//   hourlySales: [],
//   hourlySalesCalc: function(){
//     for(var i = 0; i < hours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
//     }
//   }
// };
// seattleCenter.hourlySalesCalc();

// var capHill = {
//   name: 'Cap Hill',
//   location: 'Capitol Hill' ,
//   minCust: 20,
//   maxCust: 38,
//   avgSalePer: 2.3,
//   hourlySales: [],
//   hourlySalesCalc: function(){
//     for(var i = 0; i < hours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
//     }
//   }
// };
// capHill.hourlySalesCalc();

// var alki = {
//   name: 'Alki',
//   location: 'Alki' ,
//   minCust: 2,
//   maxCust: 16,
//   avgSalePer: 4.6,
//   hourlySales: [],
//   hourlySalesCalc: function(){
//     for(var i = 0; i < hours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
//     }
//   }
// };
// alki.hourlySalesCalc();

// // var locations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki']

// // var minCust = [ 23, 3, 11, 20, 16]

// // var maxCust = [ 65, 24, 38, 38, 16]

// // var avgSalePer = [ 6.3, 1.2, 3.7, 2.3, 4.6]

// // var retailName = ['Pike', 'Seatac', 'Seattle Center', 'Cap Hill', 'Alki']

// var salmonCookie = [pike, seatac, seattleCenter, capHill, alki];

// for(var i = 0; i <salmonCookie.length; i++) {
//   console.log(salmonCookie[i].location);
// }

