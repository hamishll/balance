import React, { useState, useContext } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AssessmentQuestion from "./AssessmentQuestion";

export default function DimensionPageAssessment(props) {
  //   const [value, setValue] = React.useState(0);
  // console.log("DimensionCardAssessment:");
  // console.log(props.questions);
  // const [questions, setData] = useState([{question: "hi"}]);

  const minimisePage = () => {
    {
      document.getElementById(props.name).style.top = "120vh";
    }
  };

  try {
    console.log(props.userdata[0][0].value["Z1"]);
  } catch {}
  // console.log(props.questions[0].choice[0]);

  return (
    <div className="PageCardContainer" id={props.name}>
      {/* <div className="PageCloseBg" onClick={minimisePage}/> */}
      <div className="PageCard">
        <div className="PageCardContent">
          <div className="PageClose" onClick={minimisePage}>
            <CloseOutlinedIcon />
          </div>
          <h1>Assessment</h1>
          {props.questions.map((q, index) => {
            return (
              <AssessmentQuestion
                key={index}
                k={q.k}
                initValue={1}
                question={q.question}
                choice1={q.options[0]}
                choice2={q.options[1]}
                choice3={q.options[2]}
                choice4={q.options[3]}
                choice5={q.options[4]}
              />
            );
          })}
          {/* {props.udata} */}
        </div>
      </div>
    </div>
  );
}
