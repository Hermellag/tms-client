import { Temporal } from "@js-temporal/polyfill";
import { EnrollmentStatus, describeEnrollment } from "./models/enrollment.model";
// import { Student } from "./models/student.model";
// import { isStudent } from "./models/student.model";
//import { AssessmentItem, calculateGrade } from "./models/assessment.model";
// const student: Student = {
//id: "STU-001",name: "Hana Tadesse",
// enrollmentDate: Temporal.Now.instant(),
// };
// // Try these what does the compiler say?
// student.id ="STU-999";
// console.log(student.gpa?.toFixed(2));
// console.log(student.gpa?.toFixed(2) ?? "Not yet graded");


// function processStudent(raw: unknown) {
// //if (isStudent(raw)) {
// const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
// console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
// } else {
// console.error("Invalid student data received");
// }
// };
// processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
// processStudent(42);
// // Prints: Invalid stud



// const quiz: AssessmentItem = {
// id: "QUIZ-001"
// ,
// kind: "quiz"
// ,
// title: "SQL Basics"
// ,
// correctAnswers: 8,
// totalQuestions: 10,
// };
// const lab: AssessmentItem = {
// id: "LAB-001"
// ,
// kind: "lab"
// ,
// title: "REST API Project"
// ,
// functionalityScore: 85,
// codeQualityScore: 90,
// };
// console.log(`Quiz grade: ${calculateGrade(quiz)}%`); // 80
// console.log(`Lab grade: ${calculateGrade(lab)}%`); // 87
// // Verify readonly try this line and check the compiler error:
// quiz.id =
// "QUIZ-999";
// // ERROR: Cannot assign to 'id' because it is a read-only property

const pending: EnrollmentStatus = {
status: "PENDING"
,
requestedAt: Temporal.Now.instant(),
studentId: "STU-001"
,
courseId: "CRS-101"
,
};
console.log(describeEnrollment(pending));