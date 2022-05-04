import * as React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Card } from "@mui/material";
import ControlledButton from "./ControlledButton";
import Button from "@mui/material/Button";

export default function KnowledgeCheck(props) {
  //   const [value, setValue] = React.useState(0);

  const [color, setColor] = React.useState("info");

  const handleChange = () => {
    //setDisabled((previousState) => !previousState);
    setColor(props.correct ? "success" : "error");
  };
  const buttonStyle = {
    margin: "5px",
    display: "flex",
    textTransform: "none",
  };
  //const [disabled, setDisabled] = React.useState(false);

  return (
    <div className="rounded-xl p-4 flex justify-center text-center flex-col bg-stone-100">
      <span className="font-bold pb-2">{props.question}</span>
      {props.correctAnswers.map((item, index) => {
        return (
          <ControlledButton
            sx={buttonStyle}
            correct={true}
            key={index}
            variant="contained"
            color="success"
            // disabled={disabled}
            text={item}
          />
        );
      })}
      {props.incorrectAnswers.map((item, index) => {
        return (
          <ControlledButton
            sx={buttonStyle}
            key={index}
            // disabled={disabled}
            correct={false}
            variant="contained"
            color="error"
            text={item}
          />
        );
      })}
      {/* <Button variant="contained">Check</Button> */}
    </div>
  );
}
