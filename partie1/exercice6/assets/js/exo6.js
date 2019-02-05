function divi (){
var firstNumber= document.getElementById('firstNumber').value;
var secondNumber= document.getElementById('secondNumber').value;
var result= firstNumber%secondNumber;
alert('result : '+result);
if(isNaN(result)==true){
      alert('Erreur, ceci n est pas un nombre');
    } else {
      alert(' Voici votre résultat '+ result);
    }
}
