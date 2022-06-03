import * as React from "react";

import FreeTextQuestion from "./FreeTextQuestion";
import MyStatus from "./Status";
import HelpIcon from "./HelpIcon";

export default function MyToday(props) {
  //const [value, setValue] = React.useState(0);

  return (
    <div className="px-4 flex flex-col grow overflow-scroll">
      <div className="flex flex-row items-center">
        <h1 className="grow">How do you feel today?</h1>
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
      <MyStatus dimensions={props.appData} />
      {/* <Firestore/> */}

      <h1>Current Focus</h1>
      <FreeTextQuestion
        k={"currentfocus"}
        rows={2}
        initValue={localStorage.getItem("currentfocus")}
      />
      <h1>Priority Tasks</h1>
    </div>
  );
}
