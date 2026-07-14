const drinks = [
    {
        name: "Pepsi",
        stock: 10,
        price: 2.5
    },
    {
        name: "Spezi",
        stock: 4,
        price: 3
    },
    {
        name: "Water",
        stock: 18,
        price: 1.5
    }
];

const needRefill = (stock) => stock < 5;

let htmlstring = `<h1> Today's Inventory : </h1>
<ul>`;



for (const drink of drinks){
    htmlstring += `
    <li>🥤 ${drink.name}`;

    if (needRefill(drink.stock)){
        htmlstring += `<p>Stock : ${drink.stock} ----> Needs Refill</p>`;
    }else{
        htmlstring += `<p>Stock : ${drink.stock}</p>`;
    }

    htmlstring += `<p>Price : ${drink.price} </p></li>`    
}

htmlstring+= `</ul>`;


document.body.innerHTML = htmlstring