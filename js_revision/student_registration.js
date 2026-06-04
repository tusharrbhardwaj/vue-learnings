function register(name, course) {
    return `Student ${name} registered for ${course}`;
}

function calculateTotalCredits(a, b, c){
    return a+b+c;
}

function checkPass(mark){
    if(mark >= 50){
        return "Pass";
    }else{
        return "Fail";
    };
}

function studentProfile(
    name,
    age,
    course
){
    return `Name : ${name}, Age : ${age}, Course : ${course}`
}

function calculateSemesterAverage(
    mark1,
    mark2,
    mark3
){
    return (mark1+mark2+mark3)/3
}

let toatl_credit = calculateTotalCredits(5, 6, 5);


console.log(
    register(
        "Tushar",
        "Software Engineering"
    )
);

console.log(
    `The Student has total ${toatl_credit} credits.`
);

console.log(
    checkPass(80)
);

console.log(
    studentProfile("Tushar", 18, "BEng Software Engineering")
);

console.log(
    `Average for marks is ${calculateSemesterAverage(80,70,90)}`
);