// this entire app is only to scrape TSA corona virus data and add to a collection
// this is a node app to run as a CRON job on a linux box daily
// will build in a lot of functionality for a user to see whats happening
// backend is all firestore

console.log("Hello David");


const content = document.querySelector('.content');
const list = document.querySelector('#list');

// const table = document.createElement('table');
// table.id = "table01";
// interesting cannot create headers dynamically other than innerHTML via string

const tr = document.createElement('tr');
const th = document.createElement('th');
const td = document.createElement('td');

const data = [
    {
        "Date": "7/13/1980",
        "Current": 697985,
        "lastYear": 2615115
    },
    {
        "Date": "7/12/1980",
        "Current": 754545,
        "lastYear": 2669717
    }

];

// takes a string input and returns milliseconds
function convertStringDateToMil(stringDate) {
    let myDate = new Date(stringDate);
    //console.log(`string to date =: ${myDate}`);
    let myMil = myDate.getTime();
    // console.log(`date to milliseconds =: ${myMil}`);
    return myMil;

}

// ------------------------
// write data to firestore
// ------------------------
data.forEach((data, index) => {
    let myDate = data.Date
    let myMil = convertStringDateToMil(myDate);
    console.log(`Index of ${index} is: ${data.Date} string date = myMil ${myMil}`);
    //     db.collection("test").add({
    //         date: myMil,
    //         total_now: data.Current,
    //         total_year_ago: data.lastYear
    //     })
    //         .then((docRef) => console.log(`Document written: ${docRef}`))
    //         .catch((error) => console.error(`Error: ${error}`))
})

// build a table dynamically and display

function addTable(data) {

    const table = document.createElement('table');
    table.id = "table01";

    content.append(table);

    console.log("Table added! ");


}

function addRow() {
    console.log("row added! ");
    let myTable = document.getElementById("table01");

    const tr = document.createElement('tr');
    tr.id = "row_01";

    // add a data element
    const td = document.createElement('td');

    tr.append(td);


    myTable.appendChild(tr);
    // need to query the current table and return the last row index.

}

function addCell() {
    console.log("cell added! ");
}



// db.collection('TSA_daily_traffic').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {

//         console.table(doc.data());

//     })
// })





// for scraping the data off of TSA 

// var tempObj = [];
// for (i = 1; i < wholeTable.length; i++) {
//     tempObj[i] = {
//         Date: "",
//         Current: "",
//         lastYear: ""
//     };
//     //Copy the first column
//     tempObj[i].Date = wholeTable[i].cells[0].innerText;
//     //Copy the second column
//     tempObj[i].Current = parseFloat(wholeTable[i].cells[1].innerText.replace(/[^\d\.\-]/g, ""));
//     //Copy the 3rd column
//     tempObj[i].lastYear = parseFloat(wholeTable[i].cells[2].innerText.replace(/[^\d\.\-]/g, ""));

// }


