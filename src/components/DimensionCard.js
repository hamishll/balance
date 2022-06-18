import * as React from "react";
import { useState } from "react";

import DimensionPage from "./DimensionPage";
import Rating from "@mui/material/Rating";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Page from "./Page";

export default function DimensionCard(props) {
  DimensionCard.defaultProps = {
    MultiChoiceQuestions: [],
    goals: [],
  };

  const [open, setOpen] = React.useState(false);

  const [assessmentScore, setAssessmentScore] = React.useState(
    localStorage.getItem(props.name + "Assessment") ?? 0
  );

  const handleClick = () => {
    setOpen(true);
    // console.log(selected);
  };

  return (
    <React.Fragment>
      <div
        className={`overflow-hidden px-3 py-1 relative flex-row items-center flex grow basis-full max-w-md ${props.className} rounded-xl cursor-pointer`}
        style={{ background: props.color }}
        onClick={handleClick}
      >
        <div className="CategoryCardIcon">{props.icon}</div>
        <div className="w-[30%] text-white text-[18px] font-semibold leading-tight">
          {props.name}
        </div>
        <div className="w-[40%]">
          <span className="text-xs text-white">Tasks</span>
          <div>
            <Rating
              name="read-only"
              // Value to be replaced by state at some point, instead of localstorage
              value={
                parseInt(localStorage.getItem(props.name + ".g1") ?? 0) +
                parseInt(localStorage.getItem(props.name + ".g2") ?? 0) +
                parseInt(localStorage.getItem(props.name + ".g3") ?? 0) +
                parseInt(localStorage.getItem(props.name + ".g4") ?? 0) +
                parseInt(localStorage.getItem(props.name + ".g5") ?? 0)
              }
              max={0 + (props.goals ? props.goals.length : 0)}
              icon={<CheckCircleIcon />}
              emptyIcon={<RadioButtonUncheckedIcon htmlColor="white" />}
              precision={1}
              style={{ color: "white", opacity: 1 }}
              readOnly
            />
            {/* <Rating
            name="read-only"
            // Value to be replaced by state at some point, instead of localstorage
            value={parseInt(localStorage.getItem(props.name + ".q0") ?? 0)}
            max={5}
            precision={1}
            style={{ color: "white", opacity: 1 }}
            readOnly
          /> */}
          </div>
        </div>
        <div className="flex-col flex">
          <span className="text-xs text-white">Score </span>
          <span className="w-[30%] text-white text-2xl font-semibold leading-tight">
            {Math.round(assessmentScore, 0)}
          </span>

          <div className="bg-white w-[80px] h-[4px] rounded-lg bg-opacity-30">
            <div
              className="bg-white h-[4px] rounded-lg bg-opacity-100"
              style={{ width: assessmentScore + "%" }}
            ></div>
          </div>
        </div>
      </div>
      <Page open={open} setOpen={setOpen} name={props.name}>
        <DimensionPage
          questions={props.questions}
          content={props.content}
          goals={props.goals}
          name={props.name}
          color={props.color}
          icon={props.icon}
          assessmentScore={assessmentScore}
          setAssessmentScore={setAssessmentScore}
        />
      </Page>
    </React.Fragment>
  );
}
