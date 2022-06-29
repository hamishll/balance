import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";

const taskStyles = {
  width: "100%",
  "& .MuiOutlinedInput-root": {
    padding: "0px",
  },
  "& .MuiOutlinedInput-input": {
    paddingLeft: "0px",
    paddingRight: "5px",
    paddingTop: "9px",
    paddingBottom: "9px",
    fontSize: "1em",
    fontWeight: "normal",
    lineHeight: "normal",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px",
  },
};

const EditableGoal = ({
  goal,
  index,
  // Goal functions
  setCategory,
  markGoal,
  removeGoal,
  handleGoalChange,
  // Task functions
  addTask,
}) => {
  return (
    <div className={"flex flex-col ml-6 py-2"}>
      <div className="text-sm uppercase font-bold flex flex-row items-center">
        <div className="grow text-sm">
          <TextField
            key={index}
            defaultValue={goal.text}
            sx={taskStyles}
            onChange={(event) => handleGoalChange(event, index)}
            multiline
          />
        </div>
        <div className="text-gray-300">
          <DeleteOutlineIcon onClick={() => removeGoal(index)} />
        </div>
      </div>
    </div>
  );
};

const defaultGoals = [
  {
    key: 101,
    isDone: false,
    text: "Raise a family",
    category: "Love",
    tasks: [{ text: "Have kids" }, { text: "Support kids through school" }],
  },
  {
    key: 102,
    isDone: false,
    text: "Travel the world",
    category: "Personal Development",
    tasks: [
      { text: "Backpack around Europe" },
      { text: "Visit Japan" },
      { text: "Roadtrip across USA" },
      { text: "See the northern lights" },
      { text: "Go swimming in Thailand" },
    ],
  },
  {
    key: 103,
    isDone: false,
    text: "Have a successful career",
    category: "Meaningful Work",
    tasks: [
      { text: "Get promoted to [New Role] by 2023" },
      { text: "Work on [Exciting Project]" },
    ],
  },
  {
    key: 104,
    isDone: false,
    text: "Maintain a healthy, loving relationship",
    category: "Love",
    tasks: [
      { text: "Love myself" },
      { text: "Take care of myself" },
      { text: "Be trusting and interested in my partner" },
      { text: "Keep your life balance" },
      { text: "Feel comfortable being myself" },
    ],
  },
  {
    key: 105,
    isDone: false,
    text: "Own my own home",
    category: "Financial Freedom",
    tasks: [
      { text: "Identify where I want to live" },
      { text: "Save enough money for a deposit" },
      { text: "Set up property alerts" },
    ],
  },
  {
    key: 106,
    isDone: false,
    text: "Become famous",
    category: "Personal Development",
    tasks: [
      { text: "Identify what I want to be known for" },
      { text: "Create a social media presence" },
      { text: "Build my portfolio" },
    ],
  },
  {
    key: 107,
    isDone: false,
    text: "Create my art",
    category: "Personal Development",
    tasks: [
      { text: "Dedicate an hour a day to my personal projects" },
      { text: "Collaborate with others" },
    ],
  },
  {
    key: 108,
    isDone: false,
    text: "Become an athlete in my sport",
    category: "Health & Fitness",
    tasks: [{ text: "Train three times a week" }, { text: "Join a club" }],
  },
  {
    key: 109,
    isDone: false,
    text: "Contribute to science",
    category: "Meaningful Work",
    tasks: [{ text: "Finish my research in [chosen subject]" }],
  },
  {
    key: 110,
    isDone: false,
    text: "Do my part to tackle climate change",
    category: "Personal Development",
    tasks: [
      { text: "Measure my carbon footprint" },
      { text: "Recycle plastics" },
      { text: "No meat, less dairy" },
      { text: "Compost" },
      { text: "Cut out fast fashion" },
      { text: "Offset my carbon emissions" },
      { text: "Vote for green candidates" },
    ],
  },
  {
    key: 111,
    isDone: false,
    text: "Retire at age [XX]",
    category: "Financial Freedom",
    tasks: [
      { text: "Save [XX%] of my paycheck each month" },
      { text: "Buy a house" },
      {
        text: "Invest my money in a diversified index fund such as the S&P500",
      },
    ],
  },
];

export default function EditableGoalsSimple({ page, ...props }) {
  const [goals, setGoals] = React.useState(
    JSON.parse(localStorage.getItem("goals")) ?? []
  );

  useEffect(() => {
    if (page == 5 && localStorage.getItem("goalsAdded") != "true") {
      populateInitialGoals();
    }
  }, [page]);

  // These all need access to the state, so defining the functions here, and passing them down to children

  const setCategory = (event, index) => {
    const newGoals = [...goals];
    newGoals[index].category = event.target.value;
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const populateInitialGoals = () => {
    const goalsAdded = localStorage.getItem("goalsAdded") ?? "false";
    const goalsToAdd = [];
    defaultGoals.forEach((goal, index) => {
      if (localStorage.getItem("OnboardingLifeAchievements." + index) == 1) {
        goalsToAdd.push(goal);
        console.log(goalsToAdd);
      }
    });
    console.log("Final array", goalsToAdd);
    setGoals(goals.concat(goalsToAdd));
    console.log(goals.concat(goalsToAdd));
    localStorage.setItem("goals", JSON.stringify(goals.concat(goalsToAdd)));
    localStorage.setItem("goalsAdded", "true");
  };

  const addGoal = () => {
    const newGoals = [
      ...goals,
      {
        key: Date.now(),
        text: "Give your goal a title...",
        isDone: false,
        category: "Uncategorised",
        tasks: [],
      },
    ];
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
    // console.log(newGoals);
  };

  const markGoal = (index) => {
    const newGoals = [...goals];
    newGoals[index].isDone = newGoals[index].isDone ? false : true;
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const removeGoal = (index) => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
    localStorage.removeItem("goals_" + index);
  };

  const handleGoalChange = (event, index) => {
    goals[index].text = event.target.value;
    localStorage.setItem("goals", JSON.stringify(goals));
  };

  return (
    <div>
      <TransitionGroup>
        {goals.map((goal, index) => {
          return (
            <Collapse key={index}>
              <EditableGoal
                key={index}
                index={index}
                goal={goal}
                // Goal functions
                setCategory={setCategory}
                markGoal={markGoal}
                removeGoal={removeGoal}
                handleGoalChange={handleGoalChange}
              />
            </Collapse>
          );
        })}
      </TransitionGroup>
      <Button
        sx={{ color: "#BBB", justifyContent: "left" }}
        onClick={() => addGoal()}
      >
        Add Goal +
      </Button>
    </div>
  );
}
