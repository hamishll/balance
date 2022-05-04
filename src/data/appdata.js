export const appdata = {
  Values: {
    goals: [
      "Work out what you truly value in life",
      "Do your best to accept the past, and embrace the present",
      "Engage in negative visualisation each night at bedtime",
    ],
    dailies: [
      "Engage in negative visualisation each night at bedtime",
      "Something else",
    ],
    questions: [
      {
        key: "Values.q1",
        type: "multichoice",
        question: "What gives your life meaning?",
        choices: [
          "👪 Family",
          "💻 Work",
          "🐕 Pets",
          "🎨 Creating",
          "💕 Partner",
          "💸 Charity",
          "🛐 Faith",
        ],
        recommendation: "",
        threshold: 0,
      },
      {
        key: "Values.q2",
        type: "multichoice",
        question: "What personal values do you want to have?",
        choices: [
          "💵 Wealthy",
          "💛 Loyal",
          "😇 Kind",
          "🤗 Friendly",
          "👩‍🏫 Teacher",
          "🌟 Be Famous",
        ],
        recommendation: "",
        threshold: 0,
      },
      {
        key: "Values.q3",
        type: "freetext",
        question: "Write down what you want to achieve from your life",
      },
      {
        key: "Values.q4",
        type: "singlechoice",
        question: "Do you have a good idea of what makes you happy?",
        choices: ["No", "Not much", "Partially", "Lots", "Totally"],
        recommendation:
          "Spend some time making a list of what makes you happy and make a list of steps you can take to maximise these items",
        threshold: 3,
      },

      {
        key: "Values.q5",
        type: "freetext",
        question: "Write down some things that make you happy in life",
      },
      {
        key: "Values.q6",
        type: "singlechoice",
        question: "Are you able to accept misfortune when it occurs?",
        choices: ["No", "Partially", "Yes"],
        recommendation: "",
        threshold: 3,
      },
    ],
  },
  "Financial Freedom": {
    goals: [
      "Before attempting to save, clear outstanding debts. Consider balance transferring to lower rate credit cards",
      "Have an emergency fund of 2-3 months earnings in your bank account",
      "Put money into your savings as soon as you get paid, and try to increase this over time",
    ],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Financial Freedom.q1",
        type: "multichoice",
        question: "What are your personal finance goals?",
        choices: [
          "💳 Clear debts",
          "🏥 Have money for emergencies",
          "📈 Grow through investments",
        ],
        recommendation: "",
        threshold: 0,
      },
      {
        key: "Financial Freedom.q2",
        type: "multichoice",
        question: "What are you saving for?",
        choices: [
          "🏖️ Holiday",
          "🏠 House",
          "🎁 Gifts",
          "🚗 Car",
          "🏝️ Retirement",
        ],
        recommendation: "",
        threshold: 0,
      },
      {
        key: "Financial Freedom.q3",
        type: "multichoice",
        question: "Do you have any existing debts?",
        choices: [
          "💳 Credit Cards",
          "📄 Loans",
          "👨‍🎓 Student Loan",
          "🏠 Mortgage",
        ],
        recommendation: "",
        threshold: 0,
      },
      {
        key: "Financial Freedom.q4",
        type: "singlechoice",
        question: "How much of your income do you save per month?",
        choices: ["0%", "5%", "10%", "20%", "30%+"],
        recommendation: "",
        threshold: 3,
      },

      {
        key: "Financial Freedom.q5",
        type: "freetext",
        question: "What expenses could you reduce in your life?",
      },
    ],
  },
  Worry: {
    goals: ["Goal 1", "Goal 2", "Goal 3"],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Worry.q1",
        type: "singlechoice",
        question:
          "Do you find yourself worrying about things which you have control over?",
        choices: ["No", "Not much", "Partially", "Lots", "Totally"],
        recommendation: "",
        threshold: 3,
      },
      {
        key: "Worry.q2",
        type: "singlechoice",
        question: "Do you ever feel anxious?",
        choices: ["Never", "Rarely", "Sometimes", "Often", "All the time"],
        recommendation: "",
        threshold: 3,
      },
      {
        key: "Worry.q3",
        type: "singlechoice",
        question: "Do you have strategies for dealing with worry?",
        choices: ["No", "Yes"],
        recommendation: "",
        threshold: 3,
      },
    ],
  },
  Generic: {
    goals: ["Goal 1", "Goal 2", "Goal 3"],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Generic.q1",
        type: "multichoice",
        question: "Here's a multi-choice question",
        choices: ["💳 Answer 1", "🏥 Answer 2", "📈 Answer 3"],
        recommendation: "",
        threshold: 0,
      },
      {
        key: "Generic.q2",
        type: "multichoice",
        question: "Here's a multi-choice question",
        choices: [
          "🏖️ Answer 1",
          "🏠 Answer 2",
          "🎁 Answer 3",
          "🚗 Answer 4",
          "🏝️ Answer 5",
        ],
        recommendation: "",
        threshold: 0,
      },
      {
        key: "Generic.q3",
        type: "singlechoice",
        question: "Here's a single choice question",
        choices: ["0%", "5%", "10%", "20%", "30%+"],
        recommendation: "",
        threshold: 3,
      },

      {
        key: "Generic.q4",
        type: "freetext",
        question: "Here's a free-text question",
      },
    ],
  },
};
