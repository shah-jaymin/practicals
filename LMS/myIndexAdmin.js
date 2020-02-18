let str;
let data;
let userId;
let x= new Array();
let len;
let i;
let temp;
displayCourse();
function displayCourse()
{
    userId=sessionStorage.getItem("isLogin");
    for ( var i = 0 ; i < localStorage.length; ++i ) {
        data=localStorage.getItem(localStorage.key(i));
        str=JSON.parse(data).isAdmin;
        if(!str)
            document.getElementById('listing').innerHTML+=`<li class="list-group-item">${localStorage.key(i)}&ensp;<button value=${localStorage.key(i)} onclick="html(this.value)" class="btn btn-primary html">HTML</button>&ensp;<button value=${localStorage.key(i)} onclick="css(this.value)" class="btn btn-primary css">CSS</button>&ensp;<button value=${localStorage.key(i)} onclick="javascript(this.value)" class="btn btn-primary javascript">Javascript</button></li>`;
    }
}
function html(value){
    str=localStorage.getItem(value);
    x=JSON.parse(str).courses;
    len=JSON.parse(str).courses.length;
    x[len]='html';
    temp = JSON.stringify( {password: JSON.parse(str).password, isAdmin: false, courses: x} )
    localStorage.setItem(value, temp)
}
function css(value){
    str=localStorage.getItem(value);
    x=JSON.parse(str).courses;
    len=JSON.parse(str).courses.length;
    x[len]='css';
    temp = JSON.stringify( {password: JSON.parse(str).password, isAdmin: false, courses: x} )
    localStorage.setItem(value, temp)
}
function javascript(value){
    str=localStorage.getItem(value);
    x=JSON.parse(str).courses;
    len=JSON.parse(str).courses.length;
    x[len]='javascript';
    temp = JSON.stringify( {password: JSON.parse(str).password, isAdmin: false, courses: x} )
    localStorage.setItem(value, temp)
}
logout.addEventListener("click", function(){
    window.location.replace("index.html");
    sessionStorage.clear();
});