"use strict";
// import { Temporal } from "@js-temporal/polyfill";
// import { EnrollmentStatus, describeEnrollment } from "./models/enrollment.model";
// // import { Student } from "./models/student.model";
// // import { isStudent } from "./models/student.model";
// //import { AssessmentItem, calculateGrade } from "./models/assessment.model";
// // const student: Student = {
// //id: "STU-001",name: "Hana Tadesse",
// // enrollmentDate: Temporal.Now.instant(),
// // };
// // // Try these what does the compiler say?
// // student.id ="STU-999";
// // console.log(student.gpa?.toFixed(2));
// // console.log(student.gpa?.toFixed(2) ?? "Not yet graded");
Object.defineProperty(exports, "__esModule", { value: true });
// // function processStudent(raw: unknown) {
// // //if (isStudent(raw)) {
// // const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
// // console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
// // } else {
// // console.error("Invalid student data received");
// // }
// // };
// // processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
// // processStudent(42);
// // // Prints: Invalid stud
// // const quiz: AssessmentItem = {
// // id: "QUIZ-001"
// // ,
// // kind: "quiz"
// // ,
// // title: "SQL Basics"
// // ,
// // correctAnswers: 8,
// // totalQuestions: 10,
// // };
// // const lab: AssessmentItem = {
// // id: "LAB-001"
// // ,
// // kind: "lab"
// // ,
// // title: "REST API Project"
// // ,
// // functionalityScore: 85,
// // codeQualityScore: 90,
// // };
// // console.log(`Quiz grade: ${calculateGrade(quiz)}%`); // 80
// // console.log(`Lab grade: ${calculateGrade(lab)}%`); // 87
// // // Verify readonly try this line and check the compiler error:
// // quiz.id =
// // "QUIZ-999";
// // // ERROR: Cannot assign to 'id' because it is a read-only property
// const pending: EnrollmentStatus = {
// status: "PENDING"
// ,
// requestedAt: Temporal.Now.instant(),
// studentId: "STU-001"
// ,
// courseId: "CRS-101"
// ,
// };
// console.log(describeEnrollment(pending));
const polyfill_1 = require("@js-temporal/polyfill");
const assessment_model_1 = require("./models/assessment.model");
const enrollment_model_1 = require("./models/enrollment.model");
const course_model_1 = require("./models/course.model");
const api_response_model_1 = require("./models/api-response.model");
// =========================
// Exercise 4
// =========================
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
console.log(`Quiz grade: ${(0, assessment_model_1.calculateGrade)(quiz)}%`);
console.log(`Lab grade: ${(0, assessment_model_1.calculateGrade)(lab)}%`);
// =========================
// Exercise 5
// =========================
const pending = {
    status: "PENDING",
    requestedAt: polyfill_1.Temporal.Now.instant(),
    studentId: "STU-001",
    courseId: "CRS-101",
};
console.log((0, enrollment_model_1.describeEnrollment)(pending));
// =========================
// Exercise 5B
// =========================
const webDev = {
    status: "ACTIVE",
    enrolledCount: 28,
    startDate: polyfill_1.Temporal.PlainDate.from("2026-09-01"),
};
console.log((0, course_model_1.describeCourse)(webDev));
// =========================
// Exercise 6
// =========================
const studentRes = {
    status: "success",
    data: {
        id: "STU-001",
        name: "Dawit Bekele",
        enrollmentDate: polyfill_1.Temporal.Now.instant(),
        gpa: 3.4,
    },
    fetchedAt: polyfill_1.Temporal.Now.instant(),
};
console.log((0, api_response_model_1.renderResponse)(studentRes, (s) => `${s.name} GPA: ${s.gpa ?? "N/A"}`));
const courseListRes = {
    status: "success",
    data: [
        {
            id: "CRS-101",
            title: "Web Development Fundamentals",
            capacity: 30,
            startDate: polyfill_1.Temporal.PlainDate.from("2026-09-01"),
        },
    ],
    fetchedAt: polyfill_1.Temporal.Now.instant(),
};
console.log((0, api_response_model_1.renderResponse)(courseListRes, (courses) => courses.map((c) => c.title).join(", ")));
// =========================
// Exercise 7
// =========================
const approvedAt = polyfill_1.Temporal.Now.instant();
console.log(`Approved at (UTC): ${approvedAt}`);
const addisTime = approvedAt.toZonedDateTimeISO("Africa/Addis_Ababa");
const londonTime = approvedAt.toZonedDateTimeISO("Europe/London");
console.log(`Addis: ${addisTime.toPlainTime()}`);
console.log(`London: ${londonTime.toPlainTime()}`);
const courseStart = polyfill_1.Temporal.PlainDate.from("2026-09-01");
const today = polyfill_1.Temporal.Now.plainDateISO();
const daysUntilStart = today.until(courseStart).total({ unit: "days" });
console.log(`${Math.floor(daysUntilStart)} days until course starts`);
const deadline = polyfill_1.Temporal.PlainDate.from("2026-12-15");
const remaining = today.until(deadline);
console.log(`${remaining.total({ unit: "days" })} days until assignment is due`);
