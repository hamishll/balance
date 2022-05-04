import * as React from "react";
import { useState, useEffect } from "react";

// Components
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ControlledCheckbox from "./ControlledCheckbox";
import ReactMarkdown from "react-markdown";
import KnowledgeCheck from "./KnowledgeCheck";
import DimensionPageAssessment from "./DimensionPageAssessment";

// Icons
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import styles from "./../css/Post.css";
import MultiChoiceQuestion from "./MultiChoiceQuestion";

export default function DimensionPage(props) {
  DimensionPage.defaultProps = {
    goals: [],
  };
  const [assessmentSelected, setAssessmentSelected] = useState(false);

  useEffect(() => {
    // useEffect will trigger on first render, so avoid anything which will fail like a DOM call`x
    // console.log("useEffect triggered for " + props.name);
    if (props.selected) {
      document.getElementById(props.name).style.top = "0vh";
    } else {
      try {
        document.getElementById(props.name).style.top = "120vh";
      } catch {}
    }
    // }
  }, [props.selected]);

  const minimisePage = () => {
    props.setSelected(false);
    //document.getElementById(props.name).style.top = "120vh";
  };

  const handleClickAssessment = () => {
    setAssessmentSelected(true);
  };

  if (!props.selected) {
    return "";
  } else {
    return (
      <div className="PageCardContainer" id={props.name}>
        <DimensionPageAssessment
          questions={props.questions}
          name={props.name + "Assessment"}
          assessmentSelected={assessmentSelected}
          setAssessmentSelected={setAssessmentSelected}
        />
        <div className="PageCloseBg" onClick={minimisePage} />
        <div className="PageCard">
          <div className="PageClose" onClick={minimisePage}>
            <CloseOutlinedIcon />
          </div>
          <div className="Heading" style={{ backgroundColor: props.color }}>
            <span className="PageIcon">{props.icon}</span>
            {props.name}
          </div>

          <div className="p-4">
            <div style={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                sx={{
                  color: props.color,
                  border: 1,
                  borderColor: props.color,

                  "&:active": {
                    borderColor: props.color,
                    backgroundColor: props.color,
                  },

                  "&:hover": {
                    borderColor: props.color,
                    backgroundColor: props.color,
                    color: "white",
                  },
                }}
                onClick={handleClickAssessment}
              >
                Complete Assessment
              </Button>
            </div>

            <h2>My Goals</h2>
            <FormGroup>
              {props.goals.map((q, index) => {
                return (
                  <FormControlLabel
                    sx={{ lineHeight: "normal" }}
                    key={index}
                    value="end"
                    control={
                      <ControlledCheckbox
                        id={props.name + ".g" + (index + 1)}
                      />
                    }
                    label={q}
                    labelPlacement="end"
                  />
                );
              })}
            </FormGroup>

            <h2>Check your knowledge</h2>
            <KnowledgeCheck
              question={"What are some good ways to stop worrying?"}
              correctAnswers={["Take everything day by day", "Keep busy"]}
              incorrectAnswers={["Focus on things outside of your control"]}
            />

            <h2>Summary</h2>
            <div className="post">
              <ReactMarkdown children={props.content} />
            </div>

            {/* <h2>Useful resources</h2>
          <ul>
          {props.resources.map((item) => { 
            return <li><ReactMarkdown children={item}/></li>
          })}
          </ul>
          
          <h2>Further reading</h2> */}
          </div>
        </div>
        ;
      </div>
    );
  }
}
