const student ={
    name : "Tushar",
    age :18,
    university : "Gisma UAS",
    course : "BEng Software Engineering"
};

student.age = 19
student.country = "India"

document.body.innerHTML= `<h1> Hello ${student.name}, you are currently enrolled in ${student.course} </h1>`;

document.body.innerHTML += `<p>According to your data, you are ${student.age} years old and you belong to
${student.country} </p>`