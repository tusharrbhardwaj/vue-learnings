// Problem Statement

// Imagine BarZahl has just received today's refill list from the backend.

// For now, we'll hardcode it.

// const refillList = [
//     "Pepsi",
//     "Spezi",
//     "Fanta",
//     "Water",
//     "Club Mate"
// ];

// Your job is to display them on the webpage.


const refillList = [
    "Pepsi",
    "Spezi",
    "Fanta",
    "Water",
    "Club Mate"
];

document.body.innerHTML = `<h1> Today's Refill List : </h1>
<ul>`;

for (const drink of refillList){
    document.body.innerHTML += `<li>🥤 ${drink} </li>`;
}

document.body.innerHTML += `</ul>`;