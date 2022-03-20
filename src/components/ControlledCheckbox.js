import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox(props) {
  const [checked, setChecked] = React.useState(props.checked);

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
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
