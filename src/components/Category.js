import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DialogSelect({
  category,
  options,
  onChange,
  ...props
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(category);

  const handleChange = (event) => {
    setValue(event.target.value || "");
    // Need to add event to bubble up state of
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel htmlFor="demo-dialog-native">value</InputLabel>
      <Select
        native
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label="value" id="demo-dialog-native" />}
      >
        {/* <option aria-label="None" value="" /> */}
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}
