let str;
let data;
let j;
let user;
let arr=JSON.parse(localStorage.getItem('info'));
displayCourse();

function displayCourse() {
    if (sessionStorage.getItem("isLogin") == null) {
        window.location.replace("index.html");
    } else {
        user = sessionStorage.getItem("isLogin");
        showCourse(JSON.parse(localStorage.getItem('courses')));
    }
}

function showCourse() {
    for (j=0; j < arr[user].courses.length; j++) {
        document.getElementById("courseArea").innerHTML += `<div class="card col-3">
        <img class="card-img-top" style="height: 200px;" src=${arr[user].courses[j].image} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${arr[user].courses[j].name}</h5>
            <a href=${arr[user].courses[j].link} class="btn btn-primary" value=${j}>View Course</a>
        </div>
        </div>`;
    }
}

logout.addEventListener("click", function () {
    window.location.replace("index.html");
    sessionStorage.clear();
});