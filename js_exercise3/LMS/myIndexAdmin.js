let data;
let userId;
let i;
let j = 0;
let k;
let temp;
let name, link, image;
let arr = JSON.parse(localStorage.getItem('courses')) || [];
let cred = JSON.parse(localStorage.getItem("info"));
let lenCred = cred.length;
let cred2;
let tempflag=0;
displayCourse();

function displayCourse() {
    if (sessionStorage.getItem("isLogin") == null) {
        window.location.replace("index.html");
    } else {
        userId = sessionStorage.getItem("isLogin");
        showCourse();
    }
}

function isInclude(courses2, info2, id) {
    cred[info2].courses.push(arr[courses2]);
    cred2 = JSON.stringify(cred);
    localStorage.setItem("info", cred2);
    document.getElementById(`${id}`).disabled='true';
}

function isRemoved(courses2, info2, id) {
    cred[info2].courses.splice(tempflag, 1);
    cred2 = JSON.stringify(cred);
    localStorage.setItem("info", cred2);
    document.getElementById(`${id}`).disabled='true';
}

function addCourse() {
    name = document.getElementById('name').value;
    link = document.getElementById('link').value;
    image = document.getElementById("image").value;
    if (name && link && image) {
        arr.push({
            name: name,
            link: link,
            image: image
        });
        data = JSON.stringify(arr);
        localStorage.setItem("courses", data);
        showCourse();
    }
}

function showCourse() {
    for (; j < arr.length; j++) {
        document.getElementById("courseArea").innerHTML += `<div class="card col-3">
        <img class="card-img-top" style="height: 200px;" src=${arr[j].image} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${arr[j].name}</h5>
            <a href=${arr[j].link} class="btn btn-primary" value=${j}>View Course</a>
            <button class="btn btn-primary" value=${j} data-toggle="modal" onclick="assignCourse(this.value)" data-target="#exampleModalCenter2">Assign Course</button>
        </div>
        </div>`;
    }
}

function assignCourse(value) {
    document.getElementById("listing").innerHTML = "";
    for (let i = 0; i < lenCred; i++) {
        if (!cred[i].isAdmin) {
            if (checkInclude(value, i))
                document.getElementById("listing").innerHTML += `<div><li class="list-group-item d-flex justify-content-between">${cred[i].username}<button class="btn btn-primary" id=${i} onclick="isInclude(${value}, ${i}, this.id)";>Assign</button></li></div>`;
            else
                document.getElementById("listing").innerHTML += `<div><li class="list-group-item d-flex justify-content-between">${cred[i].username}<button class="btn btn-primary" id=${i} onclick="isRemoved(${value}, ${i}, this.id)";>Remove</button></li></div>`;
        }
    }
}

function checkInclude(courses2, info2) {
    for (let i = 0; i < cred[info2].courses.length; i++) {

        if (cred[info2].courses[i].name == arr[courses2].name) {
            tempflag=i;
            return false;
        }
    }
    return true;
}

logout.addEventListener("click", function () {
    window.location.replace("index.html");
    sessionStorage.clear();
});