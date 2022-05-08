import React, { useState, useEffect, useContext } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AssessmentQuestion from "./AssessmentQuestion";
import MultiChoiceQuestion from "./MultiChoiceQuestion";
import FreeTextQuestion from "./FreeTextQuestion";
import DiscreteSlider from "./DiscreteSlider";
import Box from "@mui/material/Box";

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
                    <Box>
                      <div className="font-bold leading-tight text-2xl mt-8 mb-4 text-black">
                        {question.question}
                      </div>
                      <AssessmentQuestion
                        k={question.key}
                        initValue={parseInt(localStorage.getItem(question.key))}
                        question={question.question}
                        choices={question.choices}
                      />
                    </Box>
                  );
                }
                case "slider": {
                  return (
                    <Box>
                      <div className="font-bold leading-tight text-2xl mt-8 mb-4 text-black">
                        {question.question}
                      </div>
                      <DiscreteSlider
                        k={question.key}
                        initValue={parseInt(localStorage.getItem(question.key))}
                        question={question.question}
                        choices={question.choices}
                      />
                    </Box>
                  );
                }
                case "multichoice": {
                  return (
                    <Box>
                      <div className="font-bold leading-tight text-2xl mt-8 mb-4 text-black">
                        {question.question}
                      </div>
                      <MultiChoiceQuestion
                        k={question.key}
                        question={question.question}
                        choices={question.choices}
                      />
                    </Box>
                  );
                }
                case "freetext": {
                  return (
                    <Box>
                      <div className="font-bold leading-tight text-2xl mt-8 mb-4 text-black">
                        {question.question}
                      </div>
                      <FreeTextQuestion
                        k={question.key}
                        question={question.question}
                        initValue={localStorage.getItem(question.key)}
                      />
                    </Box>
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
