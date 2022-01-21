// Buisness logic
function beepBoop(number) {
  let newNumbers = parseInt(number);
  // if (newNumbers === 0);
  let array = [newNumbers];
  for (let index = 0; index < array.length; index += 1) {
    array.push(array[index] + 1);
      }
}

function beepBoop(number) {
  let newNumbers = parseInt(number).split("");
  newNumbers.forEach(function() {
    console.log(number + 1);
  });
}
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