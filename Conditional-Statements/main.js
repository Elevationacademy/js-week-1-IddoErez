console.log("Hello World")
const country = "Djibouti"
console.log(country)
const shoobeedoo ="Djibouti"
console.log(shoobeedoo)
// let ShopingCartItems 
// console.log(shopingCartItems)
// let userResponse 
// console.log(userResponse)
// console.log(userName)
const rami = "45"
console.log(rami)
let moneyInBank = 600
console.log(moneyInBank + 300)
const instructorIsFunny = true
let enoughJokesInClass = false
enoughJokesInClass = true
console.log(instructorIsFunny)
console.log(enoughJokesInClass)
const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString
console.log(bothStrings)
const word = "word"
const number = 444
const wordNumber = word + number
console.log(wordNumber)
let team = "Hapoel"
team +=" Kfar-Saba"
console.log(team)
let galaxyVersion = "S"
galaxyVersion += 7
console.log(galaxyVersion) 
let james ="bond"
james +="00"+ 7
console.log(james)
console.log(27 + 15)
console.log(81 / 9)
console.log(3.14 * 10)
console.log(0)
console.log(NaN)
console.log(null)
console.log(true && false)
console.log(!("52" === 52) )
let startPosition
startPosition = -123
let newPosition = (startPosition || 0) + 10
console.log(newPosition) 
let numGoalsAchieved = 3
numGoalsAchieved += 123
numGoalsAchieved *=2
console.log(numGoalsAchieved)
numGoalsAchieved ++
console.log(numGoalsAchieved)
// --- Exercises ---
const maxCapacity = 14
let surfTime = true
let bestStudent 
// const purposeInLife
console.log(maxCapacity)
console.log(surfTime)
console.log(bestStudent)
// console.log(purposeInLife)
// --2--
const string1 = "Rest"
const bestThing = " is the best thing ever"
statement =string1+bestThing
console.log(statement)
console.log(string1 + " is the best thing ever")
// --3--
const passwordOne = "7e521"
const passwordTwo = "7r521"
console.log(passwordTwo == passwordOne) 
// --4--
console.log(423*12)
console.log(802/12)
console.log((5+6)*3)
// -- 5--
console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log(""|| false)
console.log((31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log(52 !== "52")
console.log(undefined || null)
// let a = 3
// a = 4
// let c = 0
// let b = a
// b = 2
// a = b
// b = c
// c = a
// a = b
// console.log(a, b ,c)
if("test" == "test"){
    console.log("Hello?")
  }
  const name = "Elizabeth"
if(name == "Queen"){
  console.log("All hail!")
} else {
  console.log("At Ease") 
}
let moenyInTheBank = 501
const job = "no"
if (moenyInTheBank >=500) {
    console.log(" A gift will be bought")
} else if (job == "yes") {
    console.log("go to work")
} else {
    console.log("find a job")
}
// --- Exercises Conditional ---
// // --- 1- --- 
// let numChildren = prompt("What is the Number of children?")
// const isCarful = true
// if (isCarful) {
//     numChildren++
// }
// console.log("The number of children is", numChildren)
// -- 2----
let silverwareCount = 80
if (silverwareCount % 2 !==0) {
  console.log("something is missing")
}
//--- 3 --- 
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if (performance == "stellar") {
    console.log("The new salary is", salary += stellarBonus)
}
else {
    console.log("The new salary is", salary += goodBonus)
}
// --- 4 --- 
const isVIP = false
let cash = 499
if(isVIP || (cash>=500)) {
     console.log("Welcome ya gever")
}
else {
    console.log("not today, Mister")
}
//---5-----
const a = 3
let b = 2
let c = 0 || 12
let d
console.log (a, b,c,d)
b = c
b++
if(d){
  b = a
}
d = a + (b * c)
d++
b += 2
console.log(a,b,c, d)
// -- 6 --
const gender = "male"
let profession = "business"
if (gender == "male") {
    console.log("The profession is", profession+"man")
}
else if (gender =="female") {
    console.log("The profession is", profession+"woman")
}
else {
   console.log("The profession is", profession)
}
// -- 7 -- 
