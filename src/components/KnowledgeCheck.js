import * as React from "react";
import ControlledButton from "./ControlledButton";

export default function KnowledgeCheck({
  question,
  correctAnswers,
  incorrectAnswers,
  correct,
  ...props
}) {
  //   const [value, setValue] = React.useState(0);

  // const [color, setColor] = React.useState("info");

  // const handleChange = () => {
  //   //setDisabled((previousState) => !previousState);
  //   setColor(correct ? "success" : "error");
  // };
  const buttonStyle = {
    margin: "5px",
    display: "flex",
    textTransform: "none",
  };
  //const [disabled, setDisabled] = React.useState(false);

  return (
    <div className="rounded-xl p-4 flex justify-center text-center flex-col bg-black bg-opacity-5 dark:bg-opacity-20">
      <span className="font-bold pb-2">{question}</span>
      {correctAnswers.map((item, index) => {
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
      {incorrectAnswers.map((item, index) => {
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
