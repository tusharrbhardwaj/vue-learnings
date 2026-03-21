// ----------------------------------------------- before this refer to script.js ---------------------------------------------------

const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "shit your pants",
        isCompleted: false
    },
    {
        id: 3,
        text: "uber eats shift",
        isCompleted: false
    },
];


// console.log(todos);

// console.log(todos[1].text)

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// for loops

// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// };


// writin table using JS

// for(let i = 1; i<=10; i++){
//     console.log(`4 * ${i} = ${4*i}`);
// }

// while looop
// let i = 0;
// while(i<10){
//     console.log(`4 * ${i} = ${4*i}`);
//     i++;
// }

// for ( let todo of todos){
//     console.log(todo.text);
// }

// forEach

// todos.forEach(function(todo){
//     console.log(todo.text);
// });


// //map
// const todotext = todos.map(function(todo){
//         return todo.text;
// });

// console.log(todotext);




// filter

// const toddtext = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });

// console.log(toddtext);



// chaining multiple function


// const toddtext = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// });

// console.log(toddtext);

// conditonals

const x = 11;
const y = 2;

// if (x===10){
//     console.log('x is 10');
// } else if(x >10){
//     console.log('x is greater than 10');
// } 
// else{
//     console.log('x is not 10 but lass then it');
// };

// if (x < 10 || y >10){
//     console.log('mewoo meeooww');
// };

// const color = x==10 ? 'red' : 'blue';
// const color = 'green';

// // swtiches

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
// }




// ----------------------------------------------- after this refer to script.js ---------------------------------------------------


// todos.forEach((todo) =>{
//     console.log(todo.text);
// });