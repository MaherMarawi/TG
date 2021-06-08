


// let a = 'hello'; // globally scoped
// var b = 'world'; // globally scoped
// console.log(window.a); // undefined
// console.log(window.b); // 'world'

//===================================================================
//=================Vriables & Datatypes - Opdrachten==================
//===================================================================

//=============================opdrach 1.1=============================

// let letOfening = 'let text'
// let letOfening = 'let text twee'
// console.log(letOfening)

// let letOfening = 'let text'
// console.log(letOfening)
// let letOfening = 'let text twee'
// console.log(letOfening)

// //let varibale can not redefine

//-------------------------------------------------------

// const constOfening = 'const text'
// constOfening = 'const text twee'
// console.log(constOfening)
// //you can not de value of const variable change

//-------------------------------------------------------

// var varOfening = 'var text'
// console.log(varOfening)
// var varOfening = 'var text twee'
// console.log(varOfening)
// var varOfening = 'var text drie'
// console.log(varOfening)
// //you can the value of var variable change and you can it redefine also

//=============================opdrach 1.2=============================

// let typeQuestion = 'Number'
// console.log("this is a " + typeof(typeQuestion) + "the value of it is " + typeQuestion)

// typeQuestion = true
// console.log(typeQuestion)
// typeQuestion = false
// console.log(typeQuestion)
// typeQuestion = undefined
// console.log(typeQuestion)
// typeQuestion = 22
// console.log(typeQuestion)
// typeQuestion = 22n
// console.log(typeQuestion)
// typeQuestion = Symbol()
// console.log(typeQuestion)
// typeQuestion = null
// console.log(typeQuestion)
// typeQuestion = new Object()
// console.log(typeQuestion)
// typeQuestion = function calculateSomething() {}
// console.log(typeQuestion)

//=============================opdrach 1.3=============================

// let someNumber = 5;
// let anotherNumber = '5'
// console.log(someNumber + anotherNumber)
// console.log(someNumber == anotherNumber)
// console.log(someNumber === anotherNumber)
// console.log(someNumber != anotherNumber)
// console.log(someNumber !== anotherNumber)

//=============================opdrach 4=============================

// let increment = 1

// console.log(increment++)//print and then plus 1
// console.log(++increment)//plus 1 and then print

//------------------------------------------

// let modulo = 24 % 10;
// console.log(modulo)

// let division = 24 / 10
// console.log(division)

//-------------------------------------------

// let someNumb = true
// console.log(! someNumb)
// //just with null and undefined will be true

//===================================================================
//===================String Methods - Opdrachten=====================
//===================================================================

//=============================opdrach 2.1=============================


// let someKittens = 'De poes van de buurman heeft kittens gehad! Hij vraagt of we nog kittens willen'
// //1
// let zin1 = someKittens.slice(0, someKittens.indexOf('!'))
// let zin2 = someKittens.slice(someKittens.indexOf('!'))
// console.log(zin1)
// console.log(zin2)
// //2
// console.log(someKittens.toUpperCase())
// //3
// console.log(someKittens.indexOf('kittens'))
// console.log(someKittens.lastIndexOf('kittens'))

// console.log(zin1.charAt())

//=============================opdrach 2.2=============================

// let someText = 'De poes van de buurman'

// //1
// console.log(someText.slice(6, 4))
// //does not excute
// console.log(someText.substring(6, 4))
// //does excute like (4, 6)

// //2
// console.log(someText.slice(-5, -4))
// //does excute from the end and should the first number smaller than the second

// console.log(someText.substring(-3, -4))
// //does not excute

//=============================opdrach 2.3=============================

// let someKittens = 'Die nieuw kittens zijn zo schattig!'

// let arr = someKittens.split(' ')
// console.table(arr)


//===================================================================
//===================Conditions - Opdrachten=========================
//===================================================================

//=============================opdrach 3.1=============================

// a) Wat is het verschil tussen == en ===?
// (==) Controleer de waarden als ze gelijk zijn
// (===) Controleer de waarden en typ of ze gelijk zijn


// b) Wat is het verschil tussen > en >=? En tussen < en <=?

// > Controleert of er een waarde is die groter is dan een waarde
// >= Controleert of een waarde groter is dan of gelijk is aan een waarde

// < Controleert of een waarde kleiner is dan één
// <= Controleert of een waarde kleiner is dan of gelijk is aan een waarde
//------------------
//  // c) 
//  let x = 5;
//  let y = 8;
//  if (x == 4 && y == 8) {
//      console.log('Results')
//  }

//  // d) 
//  if (x == 4 || y == 8) {
//     console.log('Results')
// }

// // e)
// if (x == 4 && y == 8) {
//     console.log('de conditie klopt')
// } else {
//     console.log('de conditie klopt niet')
// }
// f) 

// if (x == 4 || y == 8) {
//     console.log('de conditie klopt')
// } else {
//     console.log('de conditie klopt niet')
// }

//=============================opdrach 3.2=============================
// a)
// let x = 20;
//  if (x == 3) {
//     console.log('gelijk 3')
// } else if (x > 4) {

//     console.log ('groter dan 4')

// } else if(x > 11) {

//     console.log('groter dan 11')
// } else if (x < 3) {
//     console.log('kleiner dan 3')
// }
// b) met 20 hij packt niet de conditie x > 11

// c) 

// let x = 9
// if (x == 1) {
//     console.log('Januari')

// } else if (x == 2) {

//     console.log('Februari')
// } else if (x == 3) {
//     console.log('Maart')
// }
// else if (x == 4) {
//     console.log('April')
// }
// else if (x == 5) {
//     console.log('Mei')
// }
// else if (x == 6) {
//     console.log('Juni')
// }
// else if (x == 7) {
//     console.log('Juli')
// }
// else if (x == 8) {
//     console.log('Augustus')
// }

// else if (x == 9) {
//     console.log('September')
// }
// else if (x == 10) {
//     console.log('October')
// }
// else if (x == 11) {
//     console.log('November')
// } else if (x == 12) {
//     console.log('December')
// }
// d) 
// let y = 14
// switch (y) {
//     case 1:
//         console.log('Januari')
//         break;
//     case 2:
//         console.log('Februari')
//         break;
//     case 3:
//         console.log('Maart')
//         break;
//     case 4:
//         console.log('April')
//         break;
//     case 5:
//         console.log('Mei')
//         break;
//     case 6:
//         console.log('Juni')
//         break;
//     case 7:
//         console.log('Juli')
//         break;
//     case 8:
//         console.log('Augustus')
//         break;
//     case 9:
//         console.log('September')
//         break;
//     case 10:
//         console.log('October')
//         break;
//     case 11:
//         console.log('November')
//         break;
//     case 12:
//         console.log('December')
//         break;
//     default:
//         console.log('Geen geldige maand!')
//         break;
// }
// e)
// let x = 3;
// let result;
// if (x >= 4 && x <= 0) {
//     result = 2;
// } else {
//     result = 5;
// }
// console.log(result)
// let x = 3;

// let result = x >=4 && x <= 0 ? 2 : 5
// console.log(result)

//=====================================================================
//===================Functions - Opdrachten============================
//=====================================================================

//=============================opdrach 4.1=============================
// a)
// function testButton() {
//     console.log('hello, world')
// }
// b)
// let inputPar = document.getElementById('input-para')

// c)
// function testPar(param) {
//     console.log(param)
// }
// testPar('hello')

// d)
// function testPar2(param) {
//     return param + 'test'
// }
// let inputPar = document.getElementById('input-para')
// let result = testPar(inputPar)
// console.log(result)


// function onChange(para)  {
//     // document.getElementById('res').innerHTML +=  testPar()
//     // let result = testPar(inputPar)
//     // console.log(result)
//     console.log(para.value) 
// }
// console.log(testPar(inputPar))
// let result = testPar(inputPar)
// console.log(result)

// function ondoe(x = testPar(), y = 3) {
//     result = x + y
//     console.log(result)
// }




//=============================opdrach 4.2=============================

// function test() {
//     console.log(document.getElementById('on-input').value)
//     console.log('oninput')
// }
// function testOnchange() {
//     // console.log(this.value)
//     console.log('onchange')
// }

//=============================opdrach 4.3=============================

// function random() {
//     console.log(Math.floor(Math.random()*10))
// }
// let u = 3
// function random() {
//     console.log(Math.floor(Math.random()*u))
// }

//=============================opdrach 4.4=============================

//----------  a)  //b)  //c)
// let str = document.getElementById('naam')
// let naamVergelijk = (naam) => {

//     if ((naam.value.toUpperCase()) == 'MAHER') {
//         console.log(naam.value)
//         document.getElementById('res').innerHTML = 'wel'
//         document.getElementById('res').style.color = 'green'
//     } else if (naam == '') {
//         document.getElementById('res').innerHTML = ''
//     } else {
//         document.getElementById('res').innerHTML = 'niet'
//         document.getElementById('res').style.color = 'red'
//     }
// }


// let roepVergelijk = () => naamVergelijk(str)




//=======================================================================
//===================Arrays & Loops - Opdrachten=========================
//=======================================================================


//=============================opdrach 5.1=============================


//----------  a) Maak een array met 1 t/m 10 in willekeurige volgorde en log dit.

// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr1)

//----------  b) Maak een array met Appel, Aardbei en 3 andere fruitsoorten. Log dit.

// arr2 = ['Appel', 'Aardbei', 'Banaan', 'Berry', 'Perzik', 'Mango']
// console.log(arr2)


//----------  c) Gebruik de indexwaarde om Appel en Aardbei in de console te loggen.

// console.log(arr2[0])
// console.log(arr2[1])


//---------- d) Gebruik Math.random() en Math.floor() om een random indexwaarde van je array met getallen te selecteren. Gebruik dat getal vervolgens als index om een fruitsoort te selecteren en log dit.

// console.log(arr2[Math.floor(Math.random() * 5)])



//----------  e) Console log de length property van je fruitsoorten array.

// console.log(arr2.length)

// f) Fix de vorige error met modulo en de lengte.


// console.log(arr2[Math.floor((Math.random() * 10) % 6)])


//----------  g) Verander “Appel” naar “Peer”

// arr2[0] = 'Peer'

//----------  h) Verwissel “Peer” en “Aardbei” van positie. Kan je dit ook al met/zonder Array method?

// arr2 = ['Appel', 'Aardbei', 'Banaan', 'Berry', 'Perzik', 'Mango']
// arr2[0] = 'Peer'

// zonder method

// let tempVariable = arr2[0]
// arr2[0] = arr2[1]
// arr2[1] = tempVariable
// console.log(arr2)

// met method

// arr2.splice(0, 2, 'Ardbei', 'Peer')
// console.log(arr2)


//=============================opdrach 5.2=============================
//----------  a) b)

// const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']

// for (let i = 0; i < dutchSports.length; i++) {
//     console.log(dutchSports[i])
// }

// for (const sport in dutchSports) {
//     console.log(dutchSports[sport])
// }

// for (const sport of dutchSports) {
//     console.log(sport)
// }

//----------  c)
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//----------  d) e) f)

// for (let index = 1; index <= 3; index++) {


//     for (let i = 1; i <= 5; i++) {

//         console.log(i)
    
        
//     }

//     for (let j = 2; j <= 10; j++) {
    
//         j % 2 == 0 ? console.log(j) : ''
    
        
//     }

//     for (let z = 3; z <= 15; z++) {
    
//         z % 3 == 0 ? console.log(z) : ''
        
//     }
    
    
// }


//---------- g)

// let arr = [0, 1]

// for (let i = 1; i < 50; i++) {
//     arr.push(arr[i] + arr[i - 1])
//     // console.log(arr[i])
// }
// console.log(arr)

//  ----------  h) 
// const arr = [2,7,5,10,4,9,3,1,8,6]

// for (let i = 0; i < arr.length ; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let x = arr[j + 1]
//             arr[j + 1] = arr[j]
//             arr[j] = x;
//         }
//     }
// }
// console.log(arr)

//=============================opdrach 5.3=============================


// const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen']


//  ----------  a) 
//Voeg Zeilen en Zwemmen toe aan het einde van het array

// dutchSports.push('Zeilen', 'Zwemmen')
// console.log(dutchSports)


//  ---------- b) 
//Voeg Volleybal toe aan het begin van het array

// dutchSports.unshift('Volleybal')
// console.log(dutchSports)

// ---------- c) 
//Maak een nieuw array ballSports, met de balsporten uit dutchSports

// const ballSports = []
// dutchSports.forEach(sport => {
//     console.log(sport.slice(-3, sport.length))
//     if (sport.slice(-3, sport.length) == 'bal') {
//         ballSports.push(sport)
//     }
// })
// console.log(ballSports)

//  ---------- d)
//Verwijder die items uit dutchSports.

// for (let i = 0; i < dutchSports.length; i++) {
//     if (dutchSports[i].slice(-3, dutchSports[i].length) == 'bal') {
//         dutchSports.splice(i, 1)
//         i --;
//     }
// }
// console.log(dutchSports)


// ----------  e)
//Sorteer het dutchSports array.

// dutchSports.sort()
// console.log(dutchSports)


// ---------- f)
// Log elk item in de console.

// dutchSports.forEach(sport => {
//     console.log(sport)
// })

//  ---------- g)
// Maak een nieuw array sportsLength, met daarin de lengte van elk item in het dutchSports array.

// const sportsLength = []

// dutchSports.forEach( sport => {
//     sportsLength.push(sport.length)
// })
// console.log(sportsLength)


//=============================opdrach 5.4=============================

// ---------- a)
// let arrayLike = document.querySelectorAll('div')
// console.log(arrayLike)

// const divArray = Array.from(arrayLike)
// console.log(divArray)

// ---------- b)

// let filterElement = divArray.filter(x => x.classList != '')
// console.log(filterElement)

// ---------- c)

// let findElement = divArray.find( x => x.id != '')
// console.log(findElement)

// ---------- d)

// let someArray = [2, 4, 6]
// console.log(someArray.some(x => x == 6))

// ---------- e)

// let everyArray = [2, 4, 6]
// console.log(everyArray.every(x => x % 2 == 0))

// ---------- f)

// const text = 'Dit is de includes nethod voorbeeld'
// console.log(text.includes(' is'))


//=====================================================================
//========================Objects - Opdrachten=========================
//=====================================================================

//=============================opdrach 6.1=============================


// ---------- a)

// // Object Constructor



// const petEen = new Object()
// petEen.naam = 'nummer een'
// petEen.soort = 'object een'
// console.log(petEen)

// const petTwee = new Object()
// petTwee.naam = 'nummer twee'
// petTwee.soort = 'object twee'
// console.log(petTwee)

// const petDrie = new Object()
// petDrie.naam = 'nummer drie'
// petDrie.soort = 'object drie'
// console.log(petDrie)

// // Literal Constructor

// const literallyConstructor = {
//     naam: 'literally constructed',
//     soort: 'literally constructed'
// }
// console.log(literallyConstructor)

// // Function Constructor:

// function Person(name, age) {
//     this.name = name,
//     this.age = age
// }
// console.log(new Person('name', 'age'))

// // Singleton Constructor

// const singletonConstructor = new function() {
//     this.name = 'Singleton Constructor',
//     this.age = 34
// }
// console.log(singletonConstructor)

// // Class

// class Student {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//     }
//     getSummery() {
//         console.log(`This is my name ${this.name} and this my age ${this.age}`)
//     }
// }

// const ss = new Student('class', 10)
// ss.getSummery()

// // Object.create()

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten
  
//   me.printIntroduction();


// ---------- b)

// // Object.create()

// const Pet = {
//     isDier: true,
//     getInfo: function()  {
//         console.log(`My name is ${this.naam}. ${this.isDier}`)
//     }
// }
// const petEenCreate = Object.create(Pet)
// petEenCreate.naam = 'nummer een create';
// petEenCreate.soort = 'object een create';
// console.log(petEenCreate)
// petEenCreate.getInfo()

// ---------- c)

// const personsArray = [
//     {name: 'A', age: 34},
//     {name: 'B', age: 54},
//     {name: 'C', age: 25},
//     {name: 'D', age: 26},
//     {name: 'E', age: 33},
//     {name: 'F', age: 39},
//     {name: 'G', age: 62},
//     {name: 'H', age: 51},
//     {name: 'I', age: 40},
//     {name: 'J', age: 37},
// ]
// console.log(personsArray)
// const sortedPersonsFunction = personsArray.sort(function(p1, p2) {
//     if (p1.age > p2.age) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sortedPersonsFunction)
// const sortedPersons = personsArray.sort((p1, p2) => (p1.age > p2.age ? 1 : -1))
// console.log(sortedPersons)


//=============================opdrach 6.2=============================

// ---------- a) b)

// function Club(name, type, aantalLeden) {
//     this.name = name,
//     this.type = type,
//     this.aantalLeden = aantalLeden
// }

// const clubEen = new Club('club nummer 1', 'voetbal', 30)

// function Contactinformatie(adres, telefoonnummer, contactpersoon){
//     this.adres = adres,
//     this.telefoonnummer = telefoonnummer,
//     this.contactpersoon = contactpersoon
// }
// console.log(clubEen)
// clubEen.contactinformatie = new Contactinformatie('Rotterdam', 0101234567, 'Semon')
// console.log(clubEen)


// ---------- c)

// const clubTwee = new Club('club nummer 2', 'voetbal', 35)
// const clubDrie = new Club('club nummer 3', 'voetbal', 28)
// const clubVier = new Club('club nummer 4', 'voetbal', 41)
// const clubFive = new Club('club nummer 5', 'voetbal', 19)
// clubTwee.contactinformatie = new Contactinformatie('Rotterdam', 0101234567, 'Semon')
// clubDrie.contactinformatie = new Contactinformatie('Amsterdam', 0101234567, 'Maher')
// clubVier.contactinformatie = new Contactinformatie('Rotterdam', 0101234567, 'Marco')
// clubVier.contactinformatie = new Contactinformatie('Rotterdam', 0101234567, 'Marco')
// const clubsArray = [clubEen, clubTwee, clubDrie, clubVier, clubFive]

// clubsArray.forEach(club => {
//     console.log(club.name)
//     console.log(club.contactinformatie.contactpersoon)
// })
