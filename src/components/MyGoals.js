import React from "react";
import FreeTextQuestion from "./FreeTextQuestion";
import EditableGoals2 from "./EditableGoals2";
import ModalTooltip from "./ModalTooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const dreamTip = (
  <div>
    <h2>Why this is important</h2>
    <p>
      To find direction and purpose in life, we should have a dream to aim for.
      Once we know where to aim, we can build a plan to get there.
    </p>
    <h2>Tips for creating your dream</h2>
    <ul>
      <li>
        Imagine your dream in as much detail as you can. Imagine waking up -
        where are you? Who are you with? What are you doing?
      </li>
      <li>
        Think about what you can see, hear, smell, taste, and touch. Think about
        what makes you happy and gives your life meaning now - how can you
        maximise these things in your dreams?
      </li>
    </ul>
  </div>
);

const goalTip = (
  <div>
    <h2>Tips for creating goals</h2>
    <ul>
      <li>Make sure your goals relate back to your dream</li>
      <li>
        Try to make your goals "SMART" (Specific, Measurable, Achievable,
        Realistic & Time-bound)
      </li>
      <li>
        Make goals focused on effort, not outcomes - for example, if you're
        learning chess, you may get demotivated if you set a goal to get to a
        certain level, but if you set a goal to spend 20 minutes a day
        practicing chess, this is achievable, realistic, and time-bound.
      </li>
    </ul>
  </div>
);

export default function MyGoals(props) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="no-scrollbar px-4 pb-[100px] grow flex flex-col overflow-scroll">
      <div className="flex flex-row items-center">
        <h1 className="grow">My Dream</h1>
        <ModalTooltip content={dreamTip}>
          <span className="cursor-pointer text-gray-500 opacity-25">
            <HelpOutlineIcon sx={{ fontSize: "1.75em" }} />
          </span>
        </ModalTooltip>
      </div>
      <FreeTextQuestion
        sx={{
          "& .MuiOutlinedInput-root": {
            fontSize: "0.9em",
            padding: "10px",
            borderRadius: 2,
          },
        }}
        k={"dream"}
        rows={6}
        initValue={localStorage.getItem("dream")}
      />
      <div className="flex flex-row items-center">
        <div className="grow text-2xl font-semibold mt-6 mb-4">
          My {currentYear} Goals
        </div>
        <ModalTooltip content={goalTip}>
          <span className="cursor-pointer text-gray-500 opacity-25">
            <HelpOutlineIcon sx={{ fontSize: "1.75em" }} />
          </span>
        </ModalTooltip>
      </div>
      <EditableGoals2 />
    </div>
  );
}
