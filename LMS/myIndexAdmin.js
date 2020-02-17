let str;
let data;
let userId;
let users;
let i;
let len = localStorage.length;
displayCourse();
function displayCourse()
{
    userId=sessionStorage.getItem("isLogin");
    for ( var i = 0 ; i < len; ++i ) {
        data=localStorage.getItem(localStorage.key(i));
        str=JSON.parse(data).isAdmin;
        if(!str)
            document.getElementById('listing').innerHTML+=`<li class="list-group-item">${localStorage.key(i)}&ensp;<button class="btn btn-primary">HTML</button>&ensp;<button class="btn btn-primary">CSS</button>&ensp;<button class="btn btn-primary">Javascript</button></li>`;
    }
}