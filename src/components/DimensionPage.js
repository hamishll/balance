import * as React from "react";
import { useState, useEffect, useRef } from "react";

// Components
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ControlledCheckbox from "./ControlledCheckbox";
import ReactMarkdown from "react-markdown";
import DimensionPageAssessment from "./DimensionPageAssessment";
import styles from "./../css/Post.css";
import Quote from "./Quote";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function DimensionPage({
  questions,
  content,
  goals,
  name,
  color,
  icon,
  assessmentScore,
  setAssessmentScore,
}) {
  DimensionPage.defaultProps = {
    goals: [],
  };

  const [assessmentSelected, setAssessmentSelected] = useState(false);

  const handleClickAssessment = () => {
    setAssessmentSelected(true);
  };
  const [isPlaying, setPlaying] = useState(true);
  const [counter, setCounter] = useState(0);

  useInterval(
    () => {
      if (counter < Math.round(assessmentScore, 0)) {
        setCounter(counter + 1);
      } else {
        setPlaying(false);
      }
    },
    isPlaying ? 10 : null
  );

  useEffect(() => {
    if (assessmentSelected === false) {
      setPlaying(true);
      setCounter(0);
    }
  }, [assessmentSelected]);

  return (
    <React.Fragment>
      <DimensionPageAssessment
        questions={questions}
        name={name + "Assessment"}
        assessmentSelected={assessmentSelected}
        setAssessmentSelected={setAssessmentSelected}
        assessmentScore={assessmentScore}
        setAssessmentScore={setAssessmentScore}
      />
      <div
        className="Heading overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <span className="PageIcon">{icon}</span>
        {name}
      </div>
      <div className="px-4 pb-12 pt-4 bg-inherit">
        <div style={{ textAlign: "center" }}>
          <div className="flex-col flex items-center">
            <span className="text-md">Your {name} score: </span>
            <span className="w-full text-6xl font-semibold leading-tight">
              {counter}
            </span>

            <div
              className="bg-white w-1/2 max-w-md h-[6px] mb-4 rounded-lg bg-opacity-30"
              style={{ backgroundColor: `${color}30` }}
            >
              <div
                className={`h-full rounded-lg bg-opacity-100`}
                style={{ width: counter + "%", backgroundColor: color }}
              ></div>
            </div>
          </div>

          <Button
            variant="outlined"
            sx={{
              color: color,
              border: 1,
              borderColor: color,

              "&:active": {
                borderColor: color,
                backgroundColor: color,
              },

              "&:hover": {
                borderColor: color,
                backgroundColor: color,
                color: "white",
              },
            }}
            onClick={handleClickAssessment}
          >
            {assessmentScore == 0 ? "Complete Assessment" : "Retake Assessment"}
          </Button>
        </div>

        <h2>Top tips</h2>
        <FormGroup>
          {goals.map((q, index) => {
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
                    id={name + ".g" + (index + 1)}
                    sx={{
                      color: color,
                      "&.Mui-checked": {
                        color: color,
                      },
                    }}
                  />
                }
                label={q}
                labelPlacement="end"
              />
            );
          })}
        </FormGroup>
        <div className="learningContent flex flex-wrap flex-row justify-center gap-4">
          {/* Get rid of this once you've updated all content to be JSX based */}
          {typeof content == "object" ? (
            content
          ) : (
            <div className="post">
              <ReactMarkdown children={content} />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
