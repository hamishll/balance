export const SleepQuestions = [
  {
    k: "S1",
    question: "How many hours of sleep do you get per night?",
    options: ["<5", "6", "7", "8", "9+"],
    significance: 0.9,
    response: "Set a consistent, longer sleep schedule",
    reasoning:
      "Sleep improves our physical health, our immune system, and reduces the chance of injury. It also protects our mental health.",
  },
  {
    k: "S2",
    question:
      "On average, how many caffeinated beverages do you consume per day?",
    options: ["0", "1", "2", "3", "4+"],
    significance: 0.6,
    response: "Avoid caffeinated beverages after midday",
    reasoning: "",
  },
  {
    k: "S3",
    question: "Do you often go on your mobile phone just before bed?",
    options: ["Yes", "Sometimes", "No", "", ""],
    significance: 0.3,
    response: "Make the hour before bed a 'no-screens' time",
    reasoning: "",
  },
];
export const FinancialQuestions = [
  {
    k: "F1",
    question:
      "Are you paying interest on personal loans or credit cards each month?",
    options: ["Lots", "Some", "A lot", "", ""],
    significance: 0.3,
    response:
      "Before attempting to save, clear outstanding debts. Consider balance transferring to lower rate credit cards",
    reasoning: "",
  },
  {
    k: "F2",
    question: "How much of your paycheck do you save per month?",
    options: ["<0%", "<5%", "<15%", "<30%", "30%+"],
    significance: 0.3,
    response:
      "Put money into your savings as soon as you get paid, and try to increase this over time",
    reasoning: "",
  },

  {
    k: "F3",
    question: "Do you feel able to support yourself financially?",
    options: ["No", "Somewhat", "Yes", "", ""],
    significance: 0.9,
    response: "",
    reasoning: "",
  },
];

export const DummyQuestions = [
  {
    k: "Z1",
    question: "Question 1",
    options: ["<0%", "<5%", "<15%", "<30%", "30%+"],
    significance: 0.3,
    response: "Tip 1",
    reasoning: "",
  },
  {
    k: "Z2",
    question: "Question 2",
    options: ["Lots", "Some", "A lot", "", ""],
    significance: 0.3,
    response: "Tip 2",
    reasoning: "",
  },
  {
    k: "Z3",
    question: "Question 3",
    options: ["No", "Somewhat", "Yes", "", ""],
    significance: 0.9,
    response: "Tip 3",
    reasoning: "",
  },
];
