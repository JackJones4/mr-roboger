// Buisness logic
function beepBoop(number){
  let output = [];
  for (index = 0; index <= number; index += 1){
    if (index === 1){
      output.push("Beep!");
    } else if (index === 2){
      output.push("Boop!");
    } else if (index === 3){
      output.push("Won't you be my neighbor?")
    } else {
      output.push(index);
    }
  }
  return output;
}



$(document).ready(function(){
  $("#roboForm").submit(function(event){
    event.preventDefault();
    let number = $("#numberOne").val();
    let output = beepBoop(number);
    $("#result").show();
    $("#roboSays").text(output);
  })
})

