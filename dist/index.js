"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_model_1 = require("./models/student.model");
const assessment_model_1 = require("./models/assessment.model");
// const student: Student = {
//id: "STU-001",name: "Hana Tadesse",
// enrollmentDate: Temporal.Now.instant(),
// };
// // Try these what does the compiler say?
// student.id ="STU-999";
// console.log(student.gpa?.toFixed(2));
// console.log(student.gpa?.toFixed(2) ?? "Not yet graded");
function processStudent(raw) {
    if ((0, student_model_1.isStudent)(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    }
    else {
        console.error("Invalid student data received");
    }
}
;
processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
processStudent(42);
// Prints: Invalid stud
const quiz = {
    id: "QUIZ-001",
    kind: "quiz",
    title: "SQL Basics",
    correctAnswers: 8,
    totalQuestions: 10,
};
const lab = {
    id: "LAB-001",
    kind: "lab",
    title: "REST API Project",
    functionalityScore: 85,
    codeQualityScore: 90,
};
console.log(`Quiz grade: ${(0, assessment_model_1.calculateGrade)(quiz)}%`); // 80
console.log(`Lab grade: ${(0, assessment_model_1.calculateGrade)(lab)}%`); // 87
// Verify readonly try this line and check the compiler error:
quiz.id =
    "QUIZ-999";
// ERROR: Cannot assign to 'id' because it is a read-only property
