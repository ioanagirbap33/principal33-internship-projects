export type QuestionType = {
  question:string,
  options: string[],
  correctAnswer:string
}

export const questionsQuizOne: QuestionType[] = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Saturn", "Earth"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is React ?",
      options: [
        "A JavaScript Framework",
        "A CSS Framework",
        "A Java Framework",
        "Power rangers",
      ],
      correctAnswer: "A JavaScript Framework",
    },
  ];

  export const questionsQuizTwo: QuestionType[] = [
    {
      question: "What is the capital of Italy?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Rome",
    },
    {
      question: "What is our planet in the solar system?",
      options: ["Mars", "Jupiter", "Saturn", "Earth"],
      correctAnswer: "Earth",
    },
    {
      question: "Guess the intruder:",
      options: [
        "A JavaScript Framework",
        "A CSS Framework",
        "A Java Framework",
        "Power rangers",
      ],
      correctAnswer: "Power rangers",
    },
  ];