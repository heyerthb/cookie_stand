'use strict'

// source from MDN math.random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
// // Lcation        | Min / Cust | Max / Cust | Avg Cookie / Sale
// ----------------|------------|------------|-------------------
// 1st and Pike      |      23    |     65     |        6.3
// SeaTac Airport  |      3     |     24     |        1.2
// Seattle Center     |      11    |     38     |        3.7
// Capitol Hill |      20    |     38     |        2.3
// Alki            |      2     |     16     |        4.6

var hourOper = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
// var i = hourOper[0]

//   }

var pike = {
   name: 'Pike', 
   location: '1st and Pike', 
   minCust: 23, 
   maxCust: 65, 
   avgSalePer: 6.3, 
   hourlySales: [],
   hourlySalesCalc: function(){
       for(var i = 0; i < hourOper.length; i++){
           this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
       }
   }
   };
   pike.hourlySalesCalc();
//  Below is the function I first came up with before making it global.

//   avgCustHour: function() {
//     return Math.random() * ((this.maxCust- this.minCust) + this.minCust;
//    cookieHrArr: for(i=0,  i< hourOper.length, i++){        
//     return['Hour:   ' + hourOper + 'Cookie Sold:    ' + Math.random];
//       }
// //    return[hour, customers per hour]
//       }      
// };
// console.log('the customers for pike per hour ' + pike.custHour())

var seatac = {
    name: 'Seatac', 
    location: 'Seatac Airport' , 
    minCust: 3, 
    maxCust: 24, 
    avgSalePer: 1.2, 
    hourlySales: [],
    hourlySalesCalc: function(){
        for(var i = 0; i < hourOper.length; i++){
            this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
        }
    }
    };
    seatac.hourlySalesCalc();

var seattleCenter = {
    name: 'Seattle Center', 
    location: 'Seattle Center' , 
    minCust: 11, 
    maxCust: 38, 
    avgSalePer: 3.7, 
    hourlySales: [],
    hourlySalesCalc: function(){
        for(var i = 0; i < hourOper.length; i++){
            this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
        }
    }
    };
    seattleCenter.hourlySalesCalc();

var capHill = {
    name: 'Cap Hill', 
    location: 'Capitol Hill' , 
    minCust: 20, 
    maxCust: 38, 
    avgSalePer: 2.3, 
     hourlySales: [],
   hourlySalesCalc: function(){
       for(var i = 0; i < hourOper.length; i++){
           this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
       }
   }
   };
   capHill.hourlySalesCalc();

var alki = {
   name: 'Alki', 
   location: 'Alki' , 
   minCust: 2, 
   maxCust: 16, 
   avgSalePer: 4.6, 
   hourlySales: [],
   hourlySalesCalc: function(){
       for(var i = 0; i < hourOper.length; i++){
           this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
       }
   }
   };
   alki.hourlySalesCalc();

var locations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki']

var minCust = [ 23, 3, 11, 20, 16]

var maxCust = [ 65, 24, 38, 38, 16]

var avgSalePer = [ 6.3, 1.2, 3.7, 2.3, 4.6]

var retailName = ['Pike', 'Seatac', 'Seattle Center', 'Cap Hill', 'Alki']

var salmonCookie = [pike, seatac, seattleCenter, capHill, alki]


