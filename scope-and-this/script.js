// const bag = ["flashlight", "medicine"]
// const moreItems = ["tent", "water bottle", "knife", "rope"]

// if(bag.length < 3){
//   const nextItem = moreItems[0]
//   bag.push(nextItem)
// }

// console.log(bag)
// console.log("Added " + nextItem)

// let height = 1.73

// const grow = function(){
//   height += 0.1
// }

// grow()
// console.log(height)

// const getBaseHeight = function(){
//     const height = 1.73  
//     return height
//   }
  
//    const grow = function(){
//     height += 0.1
//   }
  
//   grow()
// Scope Exercises  -1 ---------------------------------------
// const run = true

// if (run) {
// let distance = 8 
//     for (let i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }


// console.log("Damn, you see this gal? She ran " + distance + " miles")  
// // ---2 --------------------------------------------------------------------
// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }
//--------------------------------------------------
// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", " lettuce plate", " curious cheese"]
// serveOrders(allOrders)
//-------------------------------------------------------
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

//========================================================

// const doesUserExist = function (name) {
  
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     let found = false
//     for (let u of users) {
//         if (u.name == name) {
//              found= true
//         }   
//     } 
// }  

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

// let isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     } return (isEnough)
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }
// - - - - - this - - - - - - -  - this - - - -  - - - this - - - - - - 
// const counter = {
//     count: 0,
  
//     updateCounter: function () {
//       this.count += 1;
//     }
//   };
  
//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();
  
//   alert(counter.count);
//===========================================================
// const cat = {
//     makeNoise: function () {
//       alert(this.noise);
//     },
//     noise: "Meow!"
//   };
  
//   const dog = {
//     makeNoise: cat.makeNoise,
//     noise: "Woof!"
//   };
  
//   cat.makeNoise();
//   dog.makeNoise();
// --------------this exercises --------------------
// --1
// const person = {
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//         hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }
  
//   person.feed() //should alert "I'm no longer hungry"
//---------------------------------------------------
//--2
// const pump = function (amount) {
//   this.liters += amount;
//   console.log('You put ' + amount + ' liters in ' + this.name);
// };

// const garage = {
//   car1: {
//     name: 'Audi',
//     liters: 3,
//     fillTank: pump
//   },
//   car2: {
//     name: 'Mercedes',
//     liters: 1,
//     fillTank: pump
//   }
// };

// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ',  garage.car1.liters);

// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);
// -----------------------------------------------------------------------------
//--3

// const pumpFuel = function (plane) {
//     airplane.fuel += 1;  // * There was a mistake here  - airplane and not plane
//   };
  
//   const airplane = {
    
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }, 
//     fuel :0
//   };

//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane.fuel);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());
//----------------------------------------------------------------
--4
const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function (amountToDecrease){
    this.coinCount -=amountToDecrease
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
-----------------------------------------------------------------------
