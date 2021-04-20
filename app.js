'use strict'

numberOfHours['6am','7am', '8am' , '9am', '10am', '11am',' 12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'],
//let SeattleCity = {
  //  lacation: 'Seattle',
   // minCust: 23,
    //maxCust:65,
    //avgCookieSale:6.3,
    //salesperday:[],
    //getRandomIntInclusive: function(){ 
      //this.getRandomNum (23,56); 
    //}
    
//}
function getRandomIntInclusive(min, max){
   min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random ()*(max - min + 1) + min);
}

 function getSalesPerHour() {
    for (let i=0;i<hours.length;i++){
        let numOfCookies= Math.ceil(getRandomNum() *SeattleCity.avgCookieSale);
        SeattleCity.salesPerHour.push(numOfCookies);
        SeattleCity.salesperday += numOfCookies;
    }
    
    
     class cookieSales {
         constructor(location, minCust, maxCust, avgCookieSale, salesPerDay) {
             this.location = location;
             this.minCust = minCust;
             this.maxCust = maxCust;
             this.avgCookieSale = avgCookieSale;
             this.salesPerDay = salesperday;
             this.getRandomIntInclusive= function (min,max){
                 this.getRandomNum (min,max)
             };
            this.render = function (){
                const parentElement = document.getElementById('cookies');
            };
            this.getSalesPerHour = function (){

            };
             
             
             let seattleBranch = new Branch1 (SeattleCity, 23, 65, 6.3, [])
             seattleBranch.render();
             seattleBranch.getRandomIntInclusive(23,56);
             seattleBranch.getSalesPerHour();
             console.log (seattleBranch);
             //END OF SEATTLE//
             let tokyoBranch = new Branch2 (tokyoCity, 3, 24, 1.2, [])
             tokyoBranch.render();
             tokyoBranch.getRandomIntInclusive(3,24);
             tokyoBranch.getSalesPerHour();
             console.log(tokyoBranch);
             //END OF TOKYO//

             let dubaiBranch = new Branch3 (dubaiBranch, 11, 38, 3.7, [])
             dubaiBranch.render();
             dubaiBranch.getRandomIntInclusive(11,38);
             dubaiBranch.getSalesPerHour();
             console.log(dubaiBranch);
             //END OF DUBAI//

             let parisBranch = new Branch4 (parisBranch, 20, 38, 2.3, [])
             parisBranch.render();
             parisBranch.getRandomIntInclusive(20,38);
             parisBranch.getSalesPerHour();
             console.log(parisBranch);
             //END OF PARIS//

             let limaBranch = new Branch5 (limaBranch, 2, 16, 4.6, [] )
             limaBranch.render();
             limaBranch.getRandomIntInclusive(2,16);
             limaBranch.getSalesPerHour();
             console.log (limaBranch);
             //END OF LIMA//
             
             
             
             //console.log(getRandomIntInclusive(23, 65));
             //Seattle.render();


             //console.log(SeattleCity);
             //console.log(getDailySales);
         
     

