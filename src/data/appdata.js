import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

// Content
import { MindsetContent } from "../content/MindsetContent";
import { FinancialContent } from "../content/FinancialContent";
import { SleepContent } from "../content/SleepContent";
import { FriendsContent } from "../content/FriendsContent";
import { ValuesContent } from "../content/ValuesContent";
import { MeaningContent } from "../content/MeaningContent";

import { Colors, Colors2 } from "../components/Theme";

export const appdata = [
  {
    name: "Sleep",
    icon: <DarkModeOutlinedIcon fontSize="inherit" />,
    color: Colors[2],
    modules: [
      { name: "Why We Sleep", author: "Dr. Dan Walker", content: SleepContent },
    ],
    goals: [
      "Set a consistent, longer sleep schedule",
      "Avoid caffeinated beverages after midday",
      "Make the hour before bed a 'no-screens' time",
    ],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Sleep.q1",
        type: "singlechoice",
        question: "How many hours of sleep do you get per night?",
        choices: ["<5", "6", "7", "8", "9+"],
        recommendation:
          "Numerous studies have shown that getting more sleep will improve your physical and mental health.",
        threshold: 3,
        weight: 50,
      },
      {
        key: "Sleep.q2",
        type: "singlechoice",
        question:
          "On average, how many caffeinated beverages do you consume per day?",
        choices: ["4+", "3", "2", "1", "0"],
        recommendation: `Caffeine can significantly disrupt the quality of your sleep, 
        and stays in your system for most of the day. Avoid caffeine intake after midday 
        to prevent it from disrupting your sleep.`,
        threshold: 3,
        weight: 35,
      },
      {
        key: "Sleep.q3",
        type: "singlechoice",
        question: "Do you often go on your mobile phone just before bed?",
        choices: ["Yes", "Sometimes", "No"],
        recommendation: "",
        threshold: 3,
        weight: 15,
      },
    ],
  },

  {
    name: "Health & Fitness",
    icon: <DirectionsRunIcon fontSize="inherit" />,
    color: Colors[3],
    modules: [
      { name: "Nutrition", content: "Module coming soon" },
      { name: "Self-Care", content: "Module coming soon" },
    ],
    goals: [
      "Allocate some time to stretch every morning",
      "Exercise with a friend",
      "Avoid high-sugar foods",
    ],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Health & Fitness.q1",
        type: "singlechoice",
        question: "How many hours a week do you do light exercise?",
        description:
          "Any activity that doesn't cause you to be short of breath, or to sweat. This includes walking 🚶 or taking a casual bike ride 🚴.",
        choices: ["<1 hour", "2 hours", "4 hours", "8 hours"],
        recommendation: "",
        threshold: 3,
        weight: 20,
      },
      {
        key: "Health & Fitness.q2",
        type: "singlechoice",
        question: "How many hours a week do you do moderate to heavy exercise?",
        description:
          "Any activity that really gets your heart-rate going! This includes weight-lifting 🏋️, heavy manual labour 👷, and most team sports 🤽‍♂️",
        choices: ["<1 hour", "2 hours", "4 hours", "8 hours"],
        recommendation: "",
        threshold: 3,
        weight: 40,
      },
      {
        key: "Health & Fitness.q3",
        type: "singlechoice",
        question: "How healthy is your weight?",
        description: "You can use any BMI calculator to work this out.",
        choices: ["Obese", "Overweight / Underweight", "Healthy"],
        recommendation: "",
        threshold: 3,
        weight: 40,
      },
    ],
  },
  {
    name: "Mental Health",
    icon: <SelfImprovementIcon fontSize="inherit" />,
    color: Colors[4],
    modules: [
      { name: "Handling Worry", content: MindsetContent },
      { name: "Having a Philosophy of Life", content: ValuesContent },
    ],
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
        key: "Mental Health.q1",
        type: "singlechoice",
        question: "Are you finding time for the things you value currently?",
        choices: ["No", "Sometimes", "Yes"],
        recommendation: "",
        threshold: 0,
        weight: 30,
      },
      {
        key: "Mental Health.q2",
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
        key: "Mental Health.q3",
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
        key: "Mental Health.q4",
        type: "freetext",
        question: "Write down what you want to achieve from your life",
      },
      {
        key: "Mental Health.q5",
        type: "singlechoice",
        question: "Do you have a good idea of what makes you happy?",
        choices: ["No", "Not much", "Partially", "Lots", "Totally"],
        recommendation:
          "Spend some time making a list of what makes you happy and make a list of steps you can take to maximise these items",
        threshold: 3,
        weight: 50,
      },

      {
        key: "Mental Health.q6",
        type: "freetext",
        question: "Write down some things that make you happy in life",
      },
      {
        key: "Mental Health.q7",
        type: "singlechoice",
        question: "Are you able to accept misfortune when it occurs?",
        choices: ["No", "Partially", "Yes"],
        recommendation: "",
        threshold: 3,
        weight: 10,
      },
      {
        key: "Mental Health.q8",
        type: "singlechoice",
        question:
          "Are there people or a vocation that gives your life meaning?",
        description:
          "People could be a lover, your family or community. Vocation could be a hobby or job you are passionate about.",
        choices: ["No", "Vocation", "People", "Vocation & People"],
        recommendation: "",
        threshold: 3,
        weight: 10,
      },
    ],
  },

  {
    name: "Friends",
    icon: <EmojiPeopleOutlinedIcon fontSize="inherit" />,
    color: Colors[5],
    modules: [{ name: "Interpersonal Relationships", content: FriendsContent }],
    goals: [
      "Send a message to a friend",
      "Organise an event with your friends",
      "Pick up a new social hobby",
    ],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Friends.q1",
        type: "singlechoice",
        question: "Do you have at least one friend you can be truly open with?",
        description: "Anyone who you would confide in for personal advice.",
        choices: ["No", "Yes"],
        recommendation: "",
        threshold: 3,
        weight: 40,
      },
      {
        key: "Friends.q2",
        type: "singlechoice",
        question: "How frequently do you spend time with your friends?",
        description: "",
        choices: ["Monthly", "Weekly", "Daily"],
        recommendation: "",
        threshold: 3,
        weight: 40,
      },
      {
        key: "Friends.q3",
        type: "singlechoice",
        question: "Do your friends make you feel good about yourself?",
        description: "",
        choices: ["😔 No", "🙂 Sometimes", "😊 Yes"],
        recommendation: "",
        threshold: 3,
        weight: 20,
      },
    ],
  },

  {
    name: "Love",
    icon: <FavoriteBorderOutlinedIcon fontSize="inherit" />,
    color: Colors[6],
    modules: [{}],
    goals: [
      "Tell someone you love them today",
      "Plan something special for your partner",
      "Spend an evening alone pampering yourself",
    ],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Love.q1",
        type: "singlechoice",
        question: "Do you love yourself?",
        description: "Do you have confidence in yourself and your abilities?",
        choices: ["😔 No", "😐 Partially", "🙂 Mostly", "😊 Totally"],
        recommendation: "",
        threshold: 3,
        weight: 40,
      },
      {
        key: "Love.q2",
        type: "singlechoice",
        question: "Does your partner make you feel good about yourself?",
        description:
          "Do they make you feel respected, intelligent, attractive?",
        choices: ["Not applicable", "No", "Sometimes", "All the time"],
        recommendation: "",
        threshold: 3,
        weight: 30,
      },
      {
        key: "Love.q3",
        type: "singlechoice",
        question:
          "Does your partner have similar interests and outlook on the world?",
        description:
          "Shared hobbies and interests can strengthen your relationship",
        choices: ["Not applicable", "No", "Partially", "Yes"],
        recommendation: "",
        threshold: 3,
        weight: 30,
      },
    ],
  },
  {
    name: "Personal Development",
    icon: <ColorLensOutlinedIcon fontSize="inherit" />,
    color: Colors[7],
    modules: [{}],
    goals: [
      "Schedule in a 2 hour session each week to focus on one of your hobbies",
      "Book a holiday or new experience",
      "Write down what skills you want to build over the next year",
    ],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Meaningful Work.q1",
        type: "singlechoice",
        question: "Do you have a creative outlet?",
        description:
          "This could be making art, music, coding, writing - anything where you are expressing yourself or making something new!",
        choices: ["No", "Not sure", "Yes"],
        recommendation: "",
        threshold: 3,
        weight: 40,
      },
      {
        key: "Meaningful Work.q2",
        type: "singlechoice",
        question: "How much time do you find each week for creative work?",
        description:
          "This could be any creative tasks you complete in either your work or personal time",
        choices: ["<2 hours", "5 hours", "10 hours", "15 hours", "20+ hours"],
        recommendation: "",
        threshold: 3,
        weight: 30,
      },
      {
        key: "Meaningful Work.q3",
        type: "singlechoice",
        question: "Do you seek out new experiences and challenges?",
        description:
          "This could be trying new hobbies, travelling, taking on new responsibilities in your job",
        choices: ["No", "Occassionally", "Sometimes", "Often", "All the time"],
        recommendation: "",
        threshold: 3,
        weight: 30,
      },
    ],
  },
  {
    name: "Meaningful Work",
    icon: <WorkOutlineIcon fontSize="inherit" />,
    color: Colors[8],
    modules: [
      { name: "Finding Meaning in your Life", content: MeaningContent },
    ],
    goals: [
      "Identify what work gets you into a state of flow",
      "Speak with your manager about focusing more on the parts of your role that you enjoy",
      "Look for opportunities to get to know your colleagues outside of work",
    ],
    dailies: ["Daily task 1", "Daily task 2", "Daily task 3"],
    questions: [
      {
        key: "Meaningful Work.q4",
        type: "singlechoice",
        question: "How do you feel about your work?",
        description:
          "Does your work feel meaningful? Do you get on well with your colleagues?",
        choices: ["😞 I hate it", "😑 It's OK", "😀 I love it"],
        recommendation: "",
        threshold: 3,
        weight: 20,
      },
      {
        key: "Meaningful Work.q5",
        type: "singlechoice",
        question: "How many hours a week do you work?",
        description:
          "Any activity that doesn't cause you to be short of breath, or to sweat. This includes walking or taking a casual bike ride.",
        choices: [">60 hours", "50 hours", "40 hours", "<30 hours"],
        recommendation: "",
        threshold: 3,
        weight: 10,
      },
      {
        key: "Meaningful Work.q6",
        type: "singlechoice",
        question: "Do you feel valued by your colleagues?",
        description: "",
        choices: ["😞 Never", "😑 Sometimes", "😀 Yes"],
        recommendation: "",
        threshold: 3,
        weight: 10,
      },
    ],
  },

  {
    name: "Financial Freedom",
    icon: <LocalAtmOutlinedIcon fontSize="inherit" />,
    color: Colors[1],
    modules: [
      { name: "Making your money work for you", content: FinancialContent },
    ],
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
        question:
          "How much unsecured debt do you have relative to your salary?",
        description:
          "This includes any personal loans, credit card debt, or overdrafts, but not mortgages.",
        choices: ["2x", "1.5x", "1x", "0.5x", "0x"],
        recommendation: "",
        threshold: 3,
        weight: 10,
      },
      {
        key: "Financial Freedom.q5",
        type: "singlechoice",
        question: "How much of your income do you save per month?",
        choices: ["0%", "5%", "10%", "20%", "30%+"],
        recommendation: "",
        threshold: 3,
        weight: 30,
      },
      {
        key: "Financial Freedom.q6",
        type: "singlechoice",
        question:
          "How much do you have saved relative to your annual spending?",
        description:
          "For example, if you spend £20,000 per year, if you have £100,000 saved you would have 5x your annual spending saved.",
        choices: ["0x", "5x", "10x", "15x", "20x"],
        recommendation: "",
        threshold: 3,
        weight: 40,
      },
      {
        key: "Financial Freedom.q7",
        type: "singlechoice",
        question:
          "Do you budget your monthly spending and know what you spend your money on?",
        choices: ["No", "Sometimes", "Yes"],
        recommendation: "",
        threshold: 3,
        weight: 20,
      },
      {
        key: "Financial Freedom.q8",
        type: "freetext",
        question: "What expenses could you reduce in your life?",
      },
    ],
  },
];
