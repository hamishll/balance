import * as React from "react";

import FreeTextQuestion from "./FreeTextQuestion";
import MyStatus from "./Status";
import HelpIcon from "./HelpIcon";
import MultiChoiceQuestion from "./MultiChoiceQuestion";

export default function MyToday(props) {
  //const [value, setValue] = React.useState(0);

  return (
    <div className="no-scrollbar px-4 pb-[100px] flex flex-col grow overflow-scroll">
      <div className="flex flex-row items-center">
        <h1 className="grow">How do you feel today?</h1>
        <HelpIcon
          sx={{ fontSize: "2em" }}
          content={
            <div>
              <h2>Take a moment to reflect on your current life balance</h2>
              <ul>
                <li>What are you happy about? What could be better?</li>
                <li>
                  By identifying which dimensions of our life could use a boost,
                  you can make a clearer plan for improving these areas.
                </li>
              </ul>
            </div>
          }
        />
      </div>
      <MyStatus dimensions={props.appData} />
      {/* <Firestore/> */}

      <h1>Current Focus Areas</h1>
      <MultiChoiceQuestion
        k={"focuses"}
        key={"focuses"}
        question={"uh"}
        choices={[
          "🍏 Health & Fitness",
          "👋 Friends",
          "👪 Family",
          "💕 Love",
          "✨ Having fun",
          "🎨 Creating",
          "💻 Work",
          "💸 Finances",
        ]}
      />
      {/* <FreeTextQuestion
        k={"currentfocus"}
        rows={2}
        initValue={localStorage.getItem("currentfocus")}
      /> */}
      <h1>Priority Tasks</h1>
    </div>
  );
}
