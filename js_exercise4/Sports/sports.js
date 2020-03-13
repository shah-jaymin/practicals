let arr = [{
        name: 'Jaymin',
        Sports: ["Chess", "Cricket"]
    },
    {
        name: 'Ashok',
        Sports: ["Cricket", "Football"]
    },
    {
        name: 'Harshad',
        Sports: ["TT", "Football"]
    },
];
let sports = new Set();
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].Sports.length; j++) {
        sports.add(arr[i].Sports[j]);
    }
}
let array = new Array();
let finalArr = new Array();
sports = Array.from(sports);
for (let i = 0; i < sports.length; i++) {
    array = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].Sports.includes(sports[i])) {
            array.push(arr[j].name);
        }
    }
    let obj = {
        [sports[i]]: array
    };
    finalArr.push(obj);
}

finalArr.forEach(obj => {
    document.write(Object.entries(obj)[0][0]+": "+Object.entries(obj)[0][1] + "<br>");
});