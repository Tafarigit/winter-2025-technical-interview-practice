// 1. given a string with three characters, return the second character check

// 2. get the second and third char from a string. the string will always have atleast three characters check

// 'cat' => 'at'
// 'robbed' => 'ob'

// 3. Given a word with 5 letters, return the second through 5th letter check 

// function getSecondThroughFifthLetter (word){
//   return word.slice(1);
// }

// 4. given a string and a number called N, return the second through the Nth character check

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

// slice is a ?? method: array and also a string method
// splice is a array method

// 5. Given an array of booleans, return an arrray of only false elements check

// [true, true, false, true , false] => [false, false]

// 6. given a string with two words, put ' the ' between the words and return the string check

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

// 7.  given two numbers, price and discount, return the price after the discount is applied check

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.

// function secondChar(str) {
//     return str.slice(1,2)
// }
// console.log(secondChar("robbed"))

// function secondAndThirdChar(str) {
//     if (str.length >= 3){
//         return str.slice(1,3)
//     }
// }
// console.log(secondAndThirdChar("cat"))

// function getSecondThroughFifthLetter(word){
//     return word.slice(1,5)
// }
// console.log(getSecondThroughFifthLetter("robbed"))

// function secondToNthChar(str, n) {
// return str.slice(1,n)
// }
// console.log(secondToNthChar("telephone", 6))

// function onlyFalse(arr) {
// let res = []
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === false) {
//         res.push(arr[i])
//     }
//     }
//     return res
// }
// console.log(onlyFalse([true, true, false, true, false]))

// function addThe(str) {
// return str.replace(/\s/g, " the ")

// }

// console.log(addThe('to house'))

// function discountPrice(price , discount){
// return price - (discount / 100 * price) 
// }
// console.log(discountPrice(50, 30))