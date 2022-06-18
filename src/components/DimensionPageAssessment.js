import React, { useEffect } from "react";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SingleChoiceQuestion from "./SingleChoiceQuestion";
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
  }, [props.assessmentSelected, props.name]);

  if (!props.assessmentSelected) {
    return "";
  } else {
    return (
      <div
        className="PageCardContainer rounded-t-3xl z-30 max-w-3xl w-full bg-white dark:bg-slate-800"
        id={props.name}
      >
        {/* <div className="PageCloseBg" onClick={minimisePage}/> */}
        <div className="PageCard no-scrollbar">
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
                    <Box key={index}>
                      <div className="font-bold leading-tight text-2xl mt-8 mb-4">
                        {question.question}
                      </div>
                      <div className="mb-4 opacity-50">
                        {question.description}
                      </div>
                      <SingleChoiceQuestion
                        k={question.key}
                        key={question.key}
                        initValue={parseInt(localStorage.getItem(question.key))}
                        question={question.question}
                        choices={question.choices}
                        weight={question.weight}
                        assessmentScore={props.assessmentScore}
                        setAssessmentScore={props.setAssessmentScore}
                        name={props.name}
                      />
                      <div className="opacity-50 my-4">
                        {question.recommendation}
                      </div>
                    </Box>
                  );
                }
                case "slider": {
                  return (
                    <Box key={index}>
                      <div className="font-bold leading-tight text-2xl mt-8 mb-4">
                        {question.question}
                      </div>
                      <div className="mb-4 opacity-50">
                        {question.description}
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
                    <Box key={index}>
                      <div className="font-bold leading-tight text-2xl mt-8 mb-4 ">
                        {question.question}
                      </div>
                      <div className="mb-4 opacity-50">
                        {question.description}
                      </div>
                      <MultiChoiceQuestion
                        k={question.key}
                        key={question.key}
                        question={question.question}
                        choices={question.choices}
                      />
                    </Box>
                  );
                }
                case "freetext": {
                  return (
                    <Box key={index}>
                      <div className="font-bold leading-tight text-2xl mt-8 mb-4 ">
                        {question.question}
                      </div>
                      <div className="mb-4 opacity-50">
                        {question.description}
                      </div>
                      <FreeTextQuestion
                        k={question.key}
                        question={question.question}
                        initValue={localStorage.getItem(question.key)}
                      />
                    </Box>
                  );
                }

                default: {
                  return "";
                }
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
