import React, { useState, useEffect } from "react";

import FreeTextQuestion from "./FreeTextQuestion";
import Status from "./Status";
import ModalTooltip from "./ModalTooltip";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Quote from "./Quote";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ControlledCheckbox from "./ControlledCheckbox";

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

export default function MyToday({ appData }) {
  const [checkInScores, setCheckInScores] = React.useState(
    JSON.parse(localStorage.getItem("checkInScores")) ?? [
      0, 0, 0, 0, 0, 0, 0, 0,
    ]
  );
  const [lowestDimension, setLowestDimension] = React.useState(0);

  useEffect(() => {
    // Get all tips in an array of arrays
    let allTips = [];
    appData.map((dimension) => {
      allTips = [...allTips, dimension.goals];
    });
    // Identify the index of the lowest score in checkInScores
    setLowestDimension(checkInScores.indexOf(Math.min(...checkInScores)));
  }, [checkInScores]);

  return (
    <div className="no-scrollbar px-4 pb-[100px] flex flex-col grow overflow-scroll">
      <div className="flex flex-row items-center">
        <h1 className="grow">How do you feel today?</h1>
        <ModalTooltip content={helpTip}>
          <span className="cursor-pointer text-gray-500 opacity-25">
            <HelpOutlineIcon sx={{ fontSize: "1.75em" }} />
          </span>
        </ModalTooltip>
      </div>
      <Status
        dimensions={appData}
        checkInScores={checkInScores}
        setCheckInScores={setCheckInScores}
      />
      {/* <Firestore/> */}
      {/* <h1>Current Focus Areas</h1>
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
      /> */}

      <h1>Recommended Tasks for you</h1>
      <FormGroup>
        {appData[lowestDimension].goals.map((q, index) => {
          return (
            <FormControlLabel
              sx={{
                lineHeight: "normal",
              }}
              key={index}
              value="end"
              control={
                <ControlledCheckbox
                  size="medium"
                  id={appData[lowestDimension].name + ".g" + (index + 1)}
                  sx={{
                    color: appData[lowestDimension].color,
                    "&.Mui-checked": {
                      color: appData[lowestDimension].color,
                    },
                  }}
                  checked={
                    localStorage.getItem(
                      appData[lowestDimension].name + ".g" + (index + 1)
                    ) === "1"
                      ? true
                      : false
                  }
                />
              }
              label={q}
              labelPlacement="end"
            />
          );
        })}
      </FormGroup>
      <h1>Recommended Quotes for you</h1>
      <Quote category="Work" />
    </div>
  );
}
