// let frontEnd = ['HTML', 'CSS', 'Javascript'];
// let frontEndLangages = frontEnd;
// let x=5
// let y=x.notdefined()
// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// // // for(let companyIndex in companies){
// // //     console.log(companies[companyIndex])
// // //   }
// //   for(let company of companies){
// //     console.log("one day I will work at "+company)
// //   }  
// // let timer = 0;

// // while(timer < 10){
// //   console.log(timer);
// //   timer++;
// // }
// for(let i = 0; i < 10; i++){
//     console.log(i)
//   }
//   for(let i = 80; i < 100; i+=2){
//     console.log(i)
//   }  
// - - ---Exercises Loops- - - 
//--1---
let names = ["Doron", "Jonathan", "Ido", "Sam"]
let ages =[34, 37, 41, 88]
for(let i = 0; i < 4; i++){
    console.log("The age of "+ names[i] +" is " + ages[i]) 
}
// - -- 2 --- 
let nums1 = [22, 777, 76, 81, 12, 5, 62]
let sum = 0
i= 0
while (i < nums1.length){
    sum +=nums1[i]
    i++
}
console.log("The sum of nums is " + sum)
//--- 3- --- 
console.log("The average of nums is " + sum/i) 
//-- 4-- - 
nums =[]
for(let i = 1; i < 101; i++){
        nums.push(i)
}
console.log(nums)
// - -5 --- 
for (let x of nums){
    if (x%2 != 0){
        console.log(x)
    }
}
// --- 6 ----
let nums2 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for (let x in nums2){
   if (nums2[x] == 709) {
       console.log(x)
   }
}
// ---- 7 -----
const names2 = ["Ashley", "Donovan", "Lucas"]
const ages2 = [23, 47, 18]
const people = []
i= 0
while (i<3) {
    people.push({name: names2[i], age: ages2[i]})
    i++
}
console.log(people)
/// --- 8 --- 
for (let x in people) {
    console.log(people[x].name +" is " + people[x].age +" years old")
}
///---9---
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
  for (let x in posts) {
      if (posts[x].id == 2){
          posts.splice(x,1)
      }
  }
  console.log(posts)
  // --- 10 --- 
  const posts1 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  for (let x in posts1){
       if (posts1[x].id ==2){
          for (let y in posts1[x].comments){
               if (posts1[x].comments[y].id == 3) {
                   posts1[x].comments.splice(y,1)
               }
               }
          }
}
console.log(posts1)