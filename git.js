function mydata(){
    var user=document.getElementById('user').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    if(user==''|| email==''|| password==''){
        alert('Empty fields is not allowed')
        return false;
    }else{
        confirm('are you ok to submit the form')
        return true;
    }
} 