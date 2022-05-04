import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export default function ControlledButton(props) {
  //const [disabled, setDisabled] = React.useState(props.disabled);
  const [color, setColor] = React.useState("grey");
  const handleChange = () => {
    //setDisabled((previousState) => !previousState);
    setColor(props.correct ? "success" : "darkgrey");
  };

  const theme = createTheme({
    palette: {
      grey: {
        main: grey[300],
      },
      darkgrey: {
        main: grey[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        disableElevation
        sx={props.sx}
        variant={props.variant}
        color={color}
        // disabled={}
        onClick={handleChange}
      >
        {props.text}
      </Button>
    </ThemeProvider>
  );
}
