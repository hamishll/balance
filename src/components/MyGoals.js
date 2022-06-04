import React from "react";
import FreeTextQuestion from "./FreeTextQuestion";
import EditableGoals2 from "./EditableGoals2";
import HelpIcon from "./HelpIcon";

export default function MyGoals(props) {
  return (
    <div className="no-scrollbar px-4 pb-[100px] grow flex flex-col overflow-scroll">
      <div className="flex flex-row items-center">
        <h1 className="grow">My Dream</h1>
        <HelpIcon
          sx={{ fontSize: "2em" }}
          content={
            <div>
              <h2>Why this is important</h2>
              <p>
                To find direction and purpose in life, we should have a dream to
                aim for. Once we know where to aim, we can build a plan to get
                there.
              </p>
              <h2>Tips for creating your dream</h2>
              <ul>
                <li>
                  Imagine your dream in as much detail as you can. Imagine
                  waking up - where are you? Who are you with? What are you
                  doing?
                </li>
                <li>
                  Think about what you can see, hear, smell, taste, and touch.
                  Think about what makes you happy and gives your life meaning
                  now - how can you maximise these things in your dreams?
                </li>
              </ul>
            </div>
          }
        />
      </div>
      <FreeTextQuestion
        sx={{
          "& .MuiOutlinedInput-root": { fontSize: "0.8em", padding: "10px" },
        }}
        k={"dream"}
        rows={6}
        initValue={localStorage.getItem("dream")}
      />
      <div className="flex flex-row items-center">
        <h1 className="grow">My Life Goals</h1>
        <HelpIcon
          sx={{ fontSize: "2em" }}
          content={
            <div>
              <h2>Tips for creating goals</h2>
              <ul>
                <li>Make sure your goals relate back to your dream</li>
                <li>
                  Try to make your goals "SMART" (Specific, Measurable,
                  Achievable, Realistic & Time-bound)
                </li>
                <li>
                  Make goals focused on effort, not outcomes - for example, if
                  you're learning chess, you may get demotivated if you set a
                  goal to get to a certain level, but if you set a goal to spend
                  20 minutes a day practicing chess, this is achievable,
                  realistic, and time-bound.
                </li>
              </ul>
            </div>
          }
        />
      </div>
      <EditableGoals2 />
    </div>
  );
}
