console.log("------------Task 01------------")
console.log("")
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfEvens(numList){
let sum = 0;
for (let i = 0; i < numList.length; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
return sum
}
console.log(sumOfEvens(numList))
console.log("")
console.log("------------Task 01 Ends------------")

console.log("------------Task 02------------")
console.log("")
function vowelCount() {
    return words.filter(word => word.match(/[aeiou]/gi)).length;
}
const string = "Pakistan Zindabad";
const words = string.split("");

console.log(`There are "${vowelCount()}" vowels used in "${string}"`);
console.log("")
console.log("------------Task 02 Ends------------")


console.log("------------Task 03------------")
console.log("")
let lang = ["JavaScript", "Python", "C++", "Ruby"]
function findLongestString(lang){
    var maxStr = lang[0].length;
    var ans = lang[0];
    for (var i = 1; i < lang.length; i++) {
        var maxi = lang[i].length;
        if (maxi > maxStr) {
            ans = lang[i];
            maxStr = maxi;
        }
    }
    return ans;
}
console.log(findLongestString(lang));
console.log("")
console.log("------------Task 03 Ends------------")


console.log("------------Task 04------------")
console.log("")
const avrg = [10, 12, 14, 16, 18, 20];
function findAvrg(avrg){
let sum = 0;
for (let number of avrg) {
    sum += number;
}
average = sum / avrg.length;
return average
}
console.log(findAvrg(avrg));
console.log("")
console.log("------------Task 04 Ends------------")


console.log("------------Task 05------------")
console.log("")
  function keysObject(objkeys) {
    return Object.keys(objkeys);
  }
  let personInfo = {
    name: "Aziz",
    sapNnumber: 20006399,
    phoneNumber: 0345-6789100,
    profession: "Engineer",
  };
  console.log(keysObject(personInfo))
  console.log("")
console.log("------------Task 05 Ends------------")


console.log("------------Task 06------------")
console.log("")
let lists = [
    {
        person: "Zubair",
        Age: 31,
    },
    {
        person: "Salman",
        Age: 55,
    },
    {
        person: "Ali",
        Age: 17,
    }
]
const specificKeys = lists.map(function (lists) {
    return lists.person;
});

console.log(specificKeys);
console.log("")
console.log("------------Task 06 Ends------------")



console.log("------------Task 07------------")
console.log("")

function uniqueitems(unique, index, target) {
  return target.indexOf(unique) === index
}
let myStrings = ["Green", "Red", "Green", "Blue", "Yellow", "Red"];
let uniqueStrings = myStrings.filter(uniqueitems);
console.log(uniqueStrings);
console.log("")
console.log("------------Task 07 Ends------------")


console.log("------------Task 08------------")
console.log("")

function findProduct (productItems) {
    var sum=1;
    for (let i = 0; i < productItems.length; i++) {
        sum = sum * productItems[i];
    } 
    return sum;
}
let productItems = [2, 4, 5, 3];
console.log(findProduct(productItems));

console.log("")
console.log("------------Task 08 Ends------------")