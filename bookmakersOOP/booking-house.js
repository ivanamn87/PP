/* Bookmaker's exercise using Object Oriented Programming */

"use strict";

(function (){

  /* constructor function for Country */  
  function Country(name, odds, continent) {
    if(!name || !surname || !continent){
       throw new Error('Fields name, odds and continent are required!')
    }
       this.name = name;
       this.odds = odds;
}

  /* constructor function for Person */  
    function Person(name, surname, dateOfBirth) {
     if(!name || !surname || !dateOfBirth){
        throw new Error('Fields name,surname and date of birth are required!')
     }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);

        this.getData = function(){
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            result += '\t' + day + '.' + month + '.' + year + ', ' + this.relation + '\n';
            return this.name + ' ' + this.surname + ' ' + result;
}
}

  /* constructor function for Player */  
  function Player(person, betAmount, country) {
    if(!person || !betAmount){
        throw new Error('Fields person and bet amount are required!')
    }  
    if(!country instanceof Country){
       throw new Error('Invalid country input')
    }
       this.person = person;
       this.betAmount = betAmount;
       this.country = country;
}

  /* constructor function for Address */  
  function Player(country, city, postalCode,streetAndNumber) {
    if(!country || !city || !postalCode || !streetAndNumber){
        throw new Error('Fields country,city, postalCode,street and number are required!')
    }  
       this.country = country;
       this.city = city;
       this.postalCode = postalCode;
       this.streetAndNumber = streetAndNumber;
       this.getData = function(){
        return this.streetAndNumber + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country;
    }
}

  /*  constructor function for Betting Place  */ 
function BettingPlace(address, listOfPlayers) {
    if(!address || !listOfPlayers){
        throw new Error('Fields address and list of players are required!')
    }  
       this.address = address;
       this.listOfPlayers = []; 
}

  /*  constructor function for Betting House  */ 
function BettingHouse(competition, listOfPlayersBettingPlaces, numberOfPlayers){
    if(!competition || !listOfPlayersBettingPlaces || !numberOfPlayers){
        throw new Error('Fields competition, list of players and nubero of players are required!')
    }  
       this.competition = competition;
       this.listOfPlayersBettingPlaces = [];
}

  /* Create continents as constants (objects that can not change). 
So, when passing a continent as aparameter, you should pass Continent.ASIA.   */ 
const continent = {
    prop: 'ASIA'
};
Object.freeze(continent);
console.log(continent.prop); 



// testing 
console.log('Hi');

var person1 = new Person('Pera', 'Peric');
console.log(person1);


try {
     var person1 = new Person('Pera', 'Peric', 'jun-12-1987')
     console.log(person1.getData())
 } catch (error) {
     console.log('Error message' + error.message);
 }

})()