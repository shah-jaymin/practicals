let str;
let data;
let userId;
let x= new Array();
let len;
let i;
let j=0;
let temp;
let name, link, image;
let arr=JSON.parse(localStorage.getItem('courses'))||[];
displayCourse();
function displayCourse()
{
    if(sessionStorage.length==1)
    {
        window.location.replace("index.html");
    }
    userId=sessionStorage.getItem("isLogin");
    for ( i = 0 ; i < localStorage.length; ++i ) {
        data=localStorage.getItem(localStorage.key(i));
        str=JSON.parse(data).isAdmin;
        if(!str)
            document.getElementById('listing').innerHTML+=`<li class="list-group-item">${localStorage.key(i)}&ensp;<button style="margin-left: 50px;" value=${localStorage.key(i)} onclick="addCourse(this.value)" class="btn btn-primary">HTML</button>&ensp;<button style="margin-left: 50px;" value=${localStorage.key(i)} onclick="addCourse(this.value)" class="btn btn-primary">CSS</button>&ensp;<button style="margin-left: 50px;" value=${localStorage.key(i)} onclick="addCourse(this.value)" class="btn btn-primary">Javascript</button></li>`;
    }
}

function isInclude(user, course) {
    if( !x.includes(course) ) {
        len=JSON.parse(str).courses.length;
        x[len]=course;
        temp = JSON.stringify( {password: JSON.parse(str).password, isAdmin: false, courses: x} );
        localStorage.setItem(user, temp);
    }
}

function addCourse(){
    name=document.getElementById('name').value;
    link=document.getElementById('link').value;
    image=document.getElementById("image").value;
    arr.push({name: name, link: link, image: image});
    data=JSON.stringify(arr);
    localStorage.setItem("courses", data);
    showCourse(JSON.parse(localStorage.getItem('courses')));
}

function showCourse(arr){
    for(; j<arr.length;j++)
    {
        document.getElementById("courseArea").innerHTML+=`<div class="card col-3">
        <img class="card-img-top" style="height: 200px;" src=${arr[j].image} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${arr[j].name}</h5>
            <a href=${arr[j].link} class="btn btn-primary">Study</a>
        </div>
        </div>`
    }
}

/*function addCourse(value){
    str=localStorage.getItem(value);
    x=JSON.parse(str).courses;
    isInclude(value, "javascript");
}*/

logout.addEventListener("click", function(){
    window.location.replace("index.html");
    sessionStorage.clear();
});