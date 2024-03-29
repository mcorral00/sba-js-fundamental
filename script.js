console.log("hi");

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

//   function getLearnerData(course, ag, submissions) {

// total points for each assignment
const assignmentsArray = AssignmentGroup.assignments; // create assignmentsArray (AssignmentGroup.assignment)
const assignmentPoints = {}; // create empty object called assignment points.

for (let i = 0; i < assignmentsArray.length; i++) {
  // loop through assignmentsArray
  const assignment = assignmentsArray[i];
  const assignmentId = assignment.id; // retrieve id of the points possible
  const assignmentPointsPossible = assignment.points_possible; //  total points possible

  assignmentPoints[assignmentId] = assignmentPointsPossible; // add property to assignmentPoints w/ id as key and points possble as value
}
console.log(assignmentPoints);

//Group submissions by learner ID
let submissionByLearner = {}; // make empty object

for (let i = 0; i < LearnerSubmissions.length; i++) { // loop through learner submissions
  let submission = LearnerSubmissions[i];
  let learnerId = submission.learner_id;

  if (submissionByLearner.hasOwnProperty(learnerId) === false) {
    submissionByLearner[learnerId] = [];   // check if submissionsByLearner object already has a property for learnerId
  }
  for (const learnerId in submissionByLearner) { // loop through each learner id
    const learnerData = {  // give learnerData an ID and starting of 0
        id: parseInt(learnerId),
        avg: 0,
    };
    }
    const learnerSubmissions = submissionByLearner[learnerId];

    let totalPoints = 0;
    let totalScore = 0;

  learnerSubmissions.forEach(submission => { // loop through learnerSubmission to calculate total score and total points
    const assignmentId = submission.assignment_id;  // pull ID from submission assignment ID
    const score = (submission.submission.score / assignmentPoints[assignmentId]) * 100;  
    learnerData[assignmentId] = score;
    console.log(score)
  });

    // need to calculate average score for learner
    //learnerData.avg = totalPoints === 0 ? (totalScore / totalPoints) 

}
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];

//     return result;
//   }

//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//   console.log(result);

// THIS IS WHAT WE NEED
//   {
//     "id": number
//     "avg" number
//     <assignment_id>: number 
// }