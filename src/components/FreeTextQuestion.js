import React, { useEffect } from "react";

import TextField from "@mui/material/TextField";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

const sxBase = {
  borderRadius: 3,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    background: "inherit",
  },
};

export default function FreeTextQuestion({ k, sx, rows, initValue, ...props }) {
  const [alignment, setAlignment] = React.useState(initValue ?? "");
  const [expanded, setExpanded] = React.useState(rows);

  useEffect(() => {
    setAlignment("" + alignment);
  }, [alignment]);

  const handleChange = (event) => {
    setAlignment(event.target.value);
    localStorage.setItem(k, event.target.value);
  };

  return (
    <div className="relative flex flex-col w-full dark:bg-slate-900 bg-slate-100 rounded-2xl">
      <TextField
        sx={{ ...sx, ...sxBase }}
        className="w-full"
        id="outlined-multiline-static"
        multiline
        maxRows={expanded ?? Infinity}
        value={"" + alignment}
        onChange={handleChange}
      />
      <div
        className="absolute uppercase text-lg font-semibold  text-right right-0 bottom-0 w-1/4 bg-gradient-to-tl from-slate-100 dark:from-slate-900 via-slate-100 dark:via-slate-900  to-transparent px-6 pt-1 pb-4 rounded-b-2xl"
        onClick={() => {
          expanded ? setExpanded(null) : setExpanded(rows);
        }}
      >
        {expanded ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
      </div>
    </div>
  );
}
