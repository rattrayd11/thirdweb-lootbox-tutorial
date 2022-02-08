export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "Who sings the song waterfalls?",
    image:
      "https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80",
    answers: [
      "NSYNC",
      "Backstreet Boys",
      "LDF",
      "Oasis",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Where is Niagra Falls located?",
    image: "https://images.unsplash.com/photo-1606516397986-1eeb79e8c052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1728&q=80",
    answers: ["London", "New York", "Los Angeles", "Paris"],
    correctAnswerIndex: 1,
  },
];

export default quizQuestions;
