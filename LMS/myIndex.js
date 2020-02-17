const loginSelect = document.querySelector('.login');
const signupSelect = document.querySelector('.signup');

const loginDisplay = document.querySelector('.loginContent');
const signupDisplay = document.querySelector('.signupContent');

loginSelect.addEventListener('click', function(){
    loginSelect.classList.add('select');
    signupSelect.classList.remove('select');
    loginDisplay.classList.add('show');
    signupDisplay.classList.remove('show');
});

signupSelect.addEventListener('click', function(){
    signupSelect.classList.add('select');
    loginSelect.classList.remove('select');
    signupDisplay.classList.add('show');
    loginDisplay.classList.remove('show');
});

let uname;
let pword;
let pword2;
let type;
let data;
let check;

function assign()
{
    uname=document.getElementById("user").value;
    pword=document.getElementById("pass").value;
    pword2=document.getElementById("pass2").value;
    check=false;
    if(document.getElementById("admin").checked)
    {
        check=true;
    }
    if(pword==pword2)
    {
        data = JSON.stringify( {password: pword, isAdmin: check, courses: []} )
        localStorage.setItem(uname, data);
        document.getElementById("user").value=null;
        document.getElementById("pass").value=null;
        document.getElementById("pass2").value=null;
        alert("New User Registered Successfully!");
    }
    else
    {
        alert("Passwords do not match!");
    }
}

let flag;
let userId;
let passId;
let str;

function signIn()
{
    flag=0;
    userId=document.getElementById("userInput").value;
    passId=document.getElementById("passInput").value;
    for(i=0; i<localStorage.length; i++)
    {
        if(localStorage.key(i)==userId)
        {
            str=localStorage.getItem(userId);
            if(passId== JSON.parse(str).password)
            {
                sessionStorage.setItem('isLogin', userId);
                if(JSON.parse(str).isAdmin)
                    window.location.href = "admin.html";
                else
                    window.location.href = "student.html";
            }
            else
            {
                alert("Wrong Password!");
            }
            flag=1;
        }
    }
    if(flag==0)
    {
        alert("User not found! Kindly create new user!")
    }
}