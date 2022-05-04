import React, { useState, useEffect, useContext } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AssessmentQuestion from "./AssessmentQuestion";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import FreeTextQuestion from "./FreeTextQuestion";

export default function DimensionPageAssessment(props) {
  DimensionPageAssessment.defaultProps = {
    MultiChoiceQuestions: [],
  };
  const handleClick = () => {
    props.setAssessmentSelected(false);
  };

  useEffect(() => {
    // useEffect will trigger on first render, so avoid anything which will fail like a DOM call`x
    // console.log("useEffect triggered for " + props.name);
    if (props.assessmentSelected) {
      document.getElementById(props.name).style.top = "2vh";
    } else {
      try {
        document.getElementById(props.name).style.top = "120vh";
      } catch {}
    }
    // }
  }, [props.assessmentSelected]);

  if (!props.assessmentSelected) {
    return "";
  } else {
    return (
      <div className="PageCardContainer" id={props.name}>
        {/* <div className="PageCloseBg" onClick={minimisePage}/> */}
        <div className="PageCard">
          <div className="PageCardContent">
            <div className="PageClose" onClick={handleClick}>
              <CloseOutlinedIcon />
            </div>
            {/* <h1>Assessment</h1> */}
            {props.questions.map((question, index) => {
              //console.log(question.key);
              switch (question.type) {
                case "singlechoice": {
                  return (
                    <AssessmentQuestion
                      k={question.key}
                      initValue={parseInt(localStorage.getItem(question.key))}
                      question={question.question}
                      choices={question.choices}
                    />
                  );
                }
                case "multichoice": {
                  return (
                    <MultiChoiceQuestion
                      k={question.key}
                      question={question.question}
                      choices={question.choices}
                    />
                  );
                }
                case "freetext": {
                  return (
                    <FreeTextQuestion
                      k={question.key}
                      question={question.question}
                      initValue={localStorage.getItem(question.key)}
                    />
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
