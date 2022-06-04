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
  }, [props.selected, props.name]);

  const minimisePage = (e) => {
    if (
      e.target.id === "backdrop" ||
      e.target.parentNode.id === "pageClose" ||
      e.target.id === "pageClose"
    ) {
      props.setSelected(false);
    }

    //document.getElementById(props.name).style.top = "120vh";
  };

  const handleClickAssessment = () => {
    setAssessmentSelected(true);
  };

  if (!props.selected) {
    return "";
  } else {
    return (
      <div
        onClick={minimisePage}
        id="backdrop"
        className="fixed top-0 w-full cursor-pointer h-full z-10 md:backdrop-blur-xl md:pt-8 md:dark:bg-black md:dark:bg-opacity-20 flex justify-center"
      >
        <div
          className="fixed rounded-t-2xl max-w-3xl transition-all cursor-default min-h-screen top-[120vh] w-full z-20 bg-white dark:bg-slate-800"
          id={props.name}
        >
          <DimensionPageAssessment
            questions={props.questions}
            name={props.name + "Assessment"}
            assessmentSelected={assessmentSelected}
            setAssessmentSelected={setAssessmentSelected}
          />
          <div className="PageCard  no-scrollbar">
            <div className="PageClose" id="pageClose" onClick={minimisePage}>
              <CloseOutlinedIcon id="pageClose" />
            </div>
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
                  <ReactMarkdown children={props.content} />
                )}
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
      </div>
    );
  }
}
