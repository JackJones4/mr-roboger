function beepBoop(number){
  let output = [];
  for (index = 0; index <= number; index ++){
    let newIndex = index.toString();
    if (newIndex.includes("3")){
      output.push("Won't you be my neighbor?")
    } else if (newIndex.includes("2")){
      output.push("Boop!");
    } else if (newIndex.includes("1")){
      output.push("Beep!")
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

