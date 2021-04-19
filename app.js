'use strict'

let SeattleCity = {
    lacation: 'Seattle',
    minCust: 23,
    maxCust:65,
    avgCookieSale:6.3,
    numberOfHours:['6am','7am', '8am' , '9am', '10am', '11am',' 12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'],
    salesperday:0,
    getRandomIntInclusive: function(){ 
      this.getRandomNum (23,56); 
    }
    
}
function getRandomIntInclusive(min, max){
   min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random ()*(max - min + 1) + min);
}

 function getSalesPerHour() {
    for (let i=0;i<hours.length;i++){
        let numOfCookies= Math.ceil(seattleCookies.getRandomNum() *SeattleCity.avgCookieSale);
        SeattleCity.salesPerHour.push(numOfCookies);
        SeattleCity.salesperday += numOfCookies;
    }
    
    

        
    
console.log(getRandomIntInclusive(23,65))
//Seattle.render();
console.log(SeattleCity);
console.log(getDailySales);
