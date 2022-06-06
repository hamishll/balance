import * as React from "react";

import FreeTextQuestion from "./FreeTextQuestion";
import MyStatus from "./Status";
import ModalTooltip from "./ModalTooltip";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const helpTip = (
  <div>
    <h2>Take a moment to reflect on your current life balance</h2>
    <ul>
      <li>What are you happy about? What could be better?</li>
      <li>
        By identifying which dimensions of our life could use a boost, you can
        make a clearer plan for improving these areas.
      </li>
    </ul>
  </div>
);

export default function MyToday(props) {
  //const [value, setValue] = React.useState(0);

  return (
    <div className="no-scrollbar px-4 pb-[100px] flex flex-col grow overflow-scroll">
      <div className="flex flex-row items-center">
        <h1 className="grow">How do you feel today?</h1>
        <ModalTooltip content={helpTip}>
          <span className="text-gray-500 opacity-25">
            <HelpOutlineIcon sx={{ fontSize: "1.75em" }} />
          </span>
        </ModalTooltip>
      </div>
      <MyStatus dimensions={props.appData} />
      {/* <Firestore/> */}
      <h1>Current Focus Areas</h1>
      <MultiChoiceQuestion
        k={"focuses"}
        key={"focuses"}
        question={"uh"}
        choices={[
          "🌙 Sleep & Rest",
          "🍏 Health & Fitness",
          "👋 Friends",
          "👪 Family",
          "💕 Love",
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
      <h1>Recommended for you</h1>
      Recommended activities based on identified focus areas
    </div>
  );
}
