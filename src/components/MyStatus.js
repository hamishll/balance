import React, { useState } from "react";
import Box from "@mui/material/Box";
import DiscreteSlider from "./DiscreteSlider";

export default function MyStatus(props) {
  // const [value, setValue] = React.useState(props.initValue);
  const Dimensions = ["Values"];

  return (
    <Box>
      {Dimensions.map((dimension) => {
        console.log(dimension);
        return (
          <Box
            sx={{
              width: 340,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ mr: 2 }}>{dimension}</Box>
            <DiscreteSlider
              k={dimension + ".q0"}
              initValue={parseInt(localStorage.getItem(dimension + ".q0"))}
              // question={question.question}
              // choices={question.choices}
            />
          </Box>
        );
      })}
    </Box>
  );
}
