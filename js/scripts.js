$(document).ready(function(){
  $("#form1").submit(function(event){

    var sentence = $("input#sentence").val();
    var splitInput = sentence.split("");
    console.log(splitInput);
    event.preventDefault();
    var newArray = [];
    for(var index = 0; index < splitInput.length; index += 1){
      if(splitInput[index] === "a" || splitInput[index] === "e" || splitInput[index] === "i" || splitInput[index] === "o" || splitInput[index] === "u"){
        $("p").append("-");
      }
      else{
        $("p").append(splitInput[index]);
      }
    }
  });
});
