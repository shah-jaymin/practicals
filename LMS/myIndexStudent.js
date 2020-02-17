let str;
let data;
let i;
let userId;
displayCourse();
function displayCourse()
{
    userId=sessionStorage.getItem("isLogin");
    str=localStorage.getItem(userId);
    for(i=0; i<JSON.parse(str).course.length; i++)
    {
        data=JSON.parse(str).course[i];
        document.getElementById('listing').innerHTML+=`<li class="list-group-item">${data}</li>`;
    }
}