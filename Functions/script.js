// // const tellAJoke = function () {
// //     console.log("something funny")
// // }
// // // tellAJoke()
// // // const greet =function(name) {
// // //     console.log("Helll there, " + name)
// // // }
// // // greet("Idodo")
// // // const mmm ="1 1 1"
// // // greet(mmm)
// // // const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]

// // // for(let n of names){
// // //   greet(n)
// // // }
// // // const greet = function(name, timeOfDay){
// // //     console.log("Good " + timeOfDay + ", " + name)
// // //   }
  
// // //   //calling the function


// // // let today = new Date();
// // // hour = today.getHours() + 6
// // // if (hour>=5 && hour<12){
// // //     timeOfDay = "Morning"
// // // } 
// // // else if (hour>=12 && hour <18) {
// // //   timeOfDay ="AFternoon"
// // // }
// // // else {
// // //     timeOfDay = "Evening"
// // // }
// // //  greet("Momo", timeOfDay)


// // // //     const createUser = function(name, age){
// // // //     const user = {name: name, age: age}
// // // //     console.log(user)
// // // //   }

// // // //   for (i = 1; i < 11; i++) { 
// // // //    nameOfUser = prompt("Enter your name please")
// // // //    ageOfUser =prompt("Enter your age please")
// // // //    createUser (nameOfUser, ageOfUser)
// // // //  }

// // //  const growOld = function(user){
// // //     user.age++
// // //   }
  
// // //   const aDude = {name:"Ayd Ood", age: 33}
// // //   growOld(aDude)
  
// // //   console.log(aDude)

// //   const greet = function(name){
// //     console.log("Hello, " + name)
// //   }
  
// //   const growOld = function(user){
// //     user.age++
// //   }
  
  
// // //   greet("doron", "momo") // prints "Hello, undefined"
// // //   growOld() // throws an error

// //   const changeArray = function(arr){
// //     let innerArray = arr
// //     innerArray[5] = 77
// //   }
  
// //   const numbers = [1, 2, 3, 4, 5 ,6]
  
// //   changeArray(numbers)
// //   console.log(numbers) // prints [50, 2, 3]

// // //   const add = function(x, y){
// // //     return (x + y)
// // //   }
  
// // //   const sum = add(1, 2)
// // //   console.log(sum) // prints 3 !
// const getInterest = function(money){
//     return money * 0.2
//   }
  
//   const getDebt = function(money){
//     const interest = getInterest(money)
//     return money + interest
//   }
  
//   const borrowedMoney = 100
//   const debt = getDebt(borrowedMoney)
//   console.log(debt) 

// //   greet() //works without a problem
// // greetExpression() //throws an error

// // function greet(){
// //   console.log("Hello there, from the wild, wild West")
// // }

// // const greetExpression = function(){
// //   console.log("Uh oh")
// // }

// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("I like " + food)
//     }   
//   }
// console.log(person.name)
// person.speak("cheese toast")
// // -- Exercises
// //-- 1-------------------------1--------------------------------------
// const calcAge = function (currentYear, birthYear){
//     return (currentYear - birthYear)
//    }
// const age = calcAge(2017, 1989)
// console.log(age)
// // --2--------------------------2---------------------------------------
// const calcAge1 = function (currentYear, birthYear){
//     age1 = (currentYear - birthYear)
//     age2 = age1 -1
//    }
// const ageOptions = calcAge1(2020, 2000)
// console.log("You are either " + age1 + " or " + age2)
// // ---3-----------------------3------------------------------------------- 
// const isEven = function (num) {
//         if (num%2 ==0 ) {
//           return "even"
//         } 
//         else {
//           return "odd"
//         }
// }
// let numForCheck = prompt ("Enter a number to check if it's even or odd")
// console.log("The number is " + isEven (numForCheck))
// // --4-----------------------4--------------------------------------------------
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let numForCheck1 of arr) {
//     if (isEven(numForCheck1) == "odd") {
//          console.log(numForCheck1)
//     }
// }
// //--5-------------------------5----------------------------------------------------------- 
// const checkExists = function (anArray, aNum) {
//     for (let x of anArray) {
//        if (x==aNum) {
//         return ("true")
//     }  
      
//     }   return ("false")
      
// }
// const array1 = [313, 55, 1, 7, 22, 44, 8, 9,10]
// let a = prompt("Enter a number to check if it's in the array")
// console.log(checkExists(array1, a))
// //---6------------------------6--------------------------------------------------
// const calculator = {
//     add: function(number1, number2) {
//       return (number1+number2)
//       },
//     subtract: function(number1, number2) {
//       return (number1-number2)
//       }
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)
// console.log(calculator.add(result1, result2))
// // -- 7 ----------------------7---------------------------------------------
// const increaseByNameLength = function(money, name) {
//       return (money * (name.length))
// }
// const makeRegal = function (name) {
//        return ("His Royal Highness, " + name)
// }
// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }
// turnToKing("martin luther", 100) 

// --- splice-------------------splice------------------------------
// let arr = [1,2,3]
// const splice = function(arr, startIndex, numOfDeletes){
//       arr.splice(startIndex,numOfDeletes)
// }
// splice(arr, 0,1)
// console.log(arr)
//----------------------------------------------------------
// add 1 element
// let arr = [1,2,3]
// const splice = function(arr, startIndex, numOfDeletes, NumToEnter){
//      arr.splice(startIndex,numOfDeletes, NumToEnter)
// }
// splice(arr, 0,0,0); 
// console.log(arr); 
// //-------------------------------------------------------
// add 2 elements
// arr = [1,2,3]
// const splice = function(arr, startIndex, numOfDeletes, NumToEnter, num2ToEnter){
//   arr.splice(startIndex,numOfDeletes, NumToEnter, num2ToEnter)
// }
// splice(arr,0,0,-1,0); 
// console.log(arr); //should be [-1,0,1,2,3]
//-----------------------------------------------------------

// // replace 1 element
// arr = [1,2,3]
// const splice = function(arr, startIndex, numOfDeletes, NumToEnter){
// arr.splice(startIndex,numOfDeletes, NumToEnter)
// }
// splice(arr,1,1,55); 
// console.log(arr); //should be [1,55,3] 
//---------------------------------------------------
// arr = [1,2,3,4,5]
// const splice = function(arr, startIndexToDeleteAll){
//  arr.splice(startIndexToDeleteAll)
//  }
//  splice(arr,1); 
// console.log(arr); //should be [1] 
//--------------------------------------------------
// returns array of deleted elements
arr = [1,2,3]
const splice = function(arr, startIndex){
   return(arr.slice(startIndex))
  }
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 
//------------------------------------------------
