function calculateGrade(marks){
    // 90-100 → A
    // 80-89  → B
    // 70-79  → C
    // 60-69  → D
    // Below 60 → F
    let grade;
    if(marks>=90){
        grade = "A";
    }else if(marks>=80){
        grade = "B";
    }else if(marks>=70){
        grade = "C";
    }else if(marks>=60){
        grade = "D";
    }else{
        grade = "F";
    }

    return grade;

}

function isEligibleForScholarship(marks){
    // >= 85 → Eligible
    // < 85  → Not Eligible

    return marks>=85;
}


function generateReport(name, mark){
    // Student: Tushar
    // Mark: 92
    // Grade: A
    // Scholarship: Eligible
    return `Student : ${name}, Marks : ${mark}, Grade : ${calculateGrade(mark)}, Scholarship : ${isEligibleForScholarship(mark)}`
}


console.log(
    generateReport("Tushar", 86)
)