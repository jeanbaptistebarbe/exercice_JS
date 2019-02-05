function checkPass(){
    var pass1 = document.getElementById('password').value;
    var pass2 = document.getElementById('confirmPassword').value;
    if(pass1 == pass2){
  document.getElementById('password').style.border= "3px solid green";
  document.getElementById('confirmPassword').style.border= "3px solid green";
    }else{
document.getElementById('password').style.border= "3px solid red";
document.getElementById('confirmPassword').style.border= "3px solid red";
    }
}
