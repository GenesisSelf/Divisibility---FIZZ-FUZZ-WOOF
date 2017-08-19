//Writing code for a divisible by 3,5,7 project.
var message = ''
printText = message => {
const div = document.getElementById('output');
 div.innerHTML = message;
 }

for ( i = 0; i <= 50; i += 1) {
  message += '<ul>'
  if (i % 3 === 0 && i % 5 === 0){
    message += "FIZZ FUZZ";
  }
  else if (i % 3 === 0 && i % 7 === 0) {
    message+="FIZZ WOOF";
  }
    else if (i % 5 === 0 && i % 7 ===0){
      message+="FUZZ WOOF";
    }else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0){
      message+="FIZZ FUZZ WOOF";
    }else if ( i % 3 === 0) {
        message+="Fizz";
      } else if (i % 5 === 0) {
            message += "Fuzz";
          }else if (i % 7 === 0){
            message += "Woof";
               } else{
                 message += i;
               }
               message += '</ul>'
}
printText(message);
