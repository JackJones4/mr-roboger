// Buisness logic
// function beepBoop(number) {
//   let newNumbers = parseInt(number);
//   // if (newNumbers === 0);
//   //let array = newNumbers;
//   // for (let index = 0; index < array.length; index += 1) {
//   //   array.push(array[index] + 1);
//   //     }
//   //     return array;
//   for (let i = 0; )
//   newNumbers.push(number [index] + 1);
//   return newNumbers;
// }

// function beepBoop(number) {
//   let newNumber = 0
//   const numberArray = String(number).split(" ").map(number);
//   numberArray.forEach(function(number) {
//     newNumber++;
//   });
//   return newNumber;
// }
function beepBoop(number) {
  number = number.toString();
  let numberArray = [];
  for (let i = 0; i < number.length; i++) {
    numberArray[i] = parseInt(number[i]);
  }
  return numberArray;
}
console.log(beepBoop(6));

// function beepBoop(number) {
//   let newNumbers = parseInt(number);
//   newNumbers.forEach(function(number) {
//     console.log(number + 1);
//   });
// }
// function beepBoop(number) {
//   const newNumbers = parseInt(number);
//   const array = newNumbers.map(function(number) {
//     return newNumbers[i] + 1;
//   });
// }

//   for (let index = 0; index < newNumbers.length; index += 1) {
//     newNumbers[i] = newNumbers[i] + 1;
//   }
//   newNumbers.forEach(function(number) {
//     return newNumbers
//   }
// }

// UI
// $(document).ready(function() {
//   $("#roboForm").submit(function() {
//     event.preventDefault();
//   }
// }