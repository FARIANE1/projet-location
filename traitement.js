function f_connection()
{
    if(validation_email() && validation_password())
    {
        window.location.href = 'produit.html';
    }
}
function f_inscription()
{
    if(validation_email() && validation_password() && confirmation_password())
    {
        window.location.href = 'reservation.html';   
    }
}
function validation_email()
{
    var email=document.getElementById("email");
    var valid;
    var reg=/^[A-Za-z]{2,}$/;
    if(!reg.test(email.value))
    {
        valid=false;
        email.style.borderBottomColor="red";
    }
    else
    {
        valid=true;
        email.style.borderBottomColor="black";
    }
    return valid;
}
function validation_password()
{
    var pass=document.getElementById("password");
    var valid;
    if(pass.value.length<8)
    {
        valid=false;
        pass.style.borderBottomColor="red";
    }
    else
    {
        valid=true;
        pass.style.borderBottomColor="black";
    }
    return valid;
}
function confirmation_password()
{
    var pass=document.getElementById("password");
    var conf_pass=document.getElementById("conf_password");
    var valid;
    if(validation_password())
    {
        if(pass.value !== conf_pass.value)
        {
            valid=false;
            conf_pass.style.borderBottomColor="red";
        }
        else
        {
            valid=true;
            conf_pass.style.borderBottomColor="black";
        }
    }
    return valid;
}