import * as React from "react";
import { useState, useEffect } from "react";

// Components
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ControlledCheckbox from "./ControlledCheckbox";
import ReactMarkdown from "react-markdown";
import DimensionPageAssessment from "./DimensionPageAssessment";
import styles from "./../css/Post.css";
import Page from "./Page";

export default function DimensionPage(props) {
  DimensionPage.defaultProps = {
    goals: [],
  };

  const [assessmentSelected, setAssessmentSelected] = useState(false);

  const handleClickAssessment = () => {
    setAssessmentSelected(true);
  };

  return (
    <React.Fragment>
      <DimensionPageAssessment
        questions={props.questions}
        name={props.name + "Assessment"}
        assessmentSelected={assessmentSelected}
        setAssessmentSelected={setAssessmentSelected}
      />
      <div className="Heading" style={{ backgroundColor: props.color }}>
        <span className="PageIcon">{props.icon}</span>
        {props.name}
      </div>
      <div className="px-4 pb-12 pt-4 bg-inherit">
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

        <h2>Top tips</h2>
        <FormGroup>
          {props.goals.map((q, index) => {
            return (
              <FormControlLabel
                sx={{ lineHeight: "normal" }}
                key={index}
                value="end"
                control={
                  <ControlledCheckbox
                    size="medium"
                    id={props.name + ".g" + (index + 1)}
                  />
                }
                label={q}
                labelPlacement="end"
              />
            );
          })}
        </FormGroup>
        <div className="learningContent  flex flex-wrap flex-row justify-center gap-4">
          {/* Get rid of this once you've updated all content to be JSX based */}
          {typeof props.content == "object" ? (
            props.content
          ) : (
            <div className="post">
              <ReactMarkdown children={props.content} />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
