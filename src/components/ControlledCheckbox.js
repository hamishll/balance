import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function ControlledCheckbox(props) {
  const [checked, setChecked] = React.useState(
    localStorage.getItem(props.id) === "1" ? true : false
  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      localStorage.setItem(props.id, "1");
    } else {
      localStorage.setItem(props.id, "0");
    }
  };

  return (
    <Checkbox
      sx={props.sx}
      checkedIcon={<CheckCircleIcon />}
      icon={<RadioButtonUncheckedIcon />}
      checked={props.checked ?? checked}
      // color={"success"}
      size={props.size ?? "medium"}
      onChange={handleChange}
      onClick={props.onClick}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
