// Buisness logic
function beepBoop(number){
  let output = [];
  for (index = 0; index <= number; index += 1){
    if (index === 1){
      output.push("beep");
    } else {
      output.push(index);
    }
  }
  return output;
}

