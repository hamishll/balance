import * as React from "react";
import { useState } from "react";

import Page from "./Page";
import ControlledCheckbox from "./ControlledCheckbox";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ModuleCard(props) {
  const [open, setOpen] = React.useState(false);

  const [checked, setChecked] = React.useState(
    localStorage.getItem("Module." + props.name) === 1 ? true : false
  );

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
        className={`overflow-hidden px-3 py-2 relative flex-col flex grow basis-1/3 h-40 max-w-lg ${props.className} rounded-md cursor-pointer`}
        style={{ background: props.color }}
        onClick={handleClick}
      >
        {/* <div className="CategoryCardIcon">{props.icon}</div> */}
        <div className="uppercase text-white text-sm font-semibold opacity-50">
          MODULE
        </div>
        <div className=" text-white text-2xl font-semibold leading-tight">
          {props.name}
        </div>
        <div className=" text-white italic text-md font-semibold opacity-50">
          {props.author}
        </div>
        <div className="text-white absolute bottom-[5px] right-[5px]">
          <ControlledCheckbox
            disabled={true}
            id={"Module." + props.name}
            sx={{
              svg: {
                fontSize: 32,
              },
              "&.Mui-disabled": {
                color: "#FFF",
              },
              color: "#FFF",
              "&.Mui-checked": {
                color: "#FFF",
              },
            }}
          />
        </div>
      </div>
      <Page open={open} setOpen={setOpen} name={props.name}>
        <div className="learningContent flex flex-wrap flex-row justify-center gap-4 p-4">
          {typeof props.content == "object" ? (
            props.content
          ) : (
            <div className="post">
              <ReactMarkdown children={props.content} />
            </div>
          )}
        </div>
        <div
          className="text-center text-xl font-semibold bg-opacity-10 p-4 mb-4"
          style={{ backgroundColor: props.color + "30" }}
        >
          Mark Module as Complete!{" "}
          <ControlledCheckbox
            id={"Module." + props.name}
            sx={{
              svg: {
                fontSize: 32,
              },
              color: props.color,
              "&.Mui-checked": {
                color: props.color,
              },
            }}
          />
        </div>
      </Page>
    </React.Fragment>
  );
}
