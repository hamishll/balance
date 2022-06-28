import React from "react";
// import DiscreteSlider from "./DiscreteSlider";
import VerticalSlider from "./VerticalSlider";

// Icons
// Icons
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { Colors, Colors2 } from "./Theme.js";

export default function Status(props) {
  // const [value, setValue] = React.useState(props.initValue);
  const Dimensions = [
    "Sleep",
    "Mental Health",
    "Health & Fitness",
    "Friends",
    "Family",
    "Love",
    "Meaningful Work",
    "Finances",
  ];

  const Icons = [
    <DarkModeOutlinedIcon />,
    <SelfImprovementIcon />,
    <HikingOutlinedIcon />,
    <ConnectWithoutContactOutlinedIcon />,
    <FamilyRestroomIcon />,
    <FavoriteBorderOutlinedIcon />,
    <WorkOutlineOutlinedIcon />,
    <LocalAtmOutlinedIcon />,
  ];

  return (
    <div className="py-4 flex flex-row justify-center">
      {Dimensions.map((dimension, index) => {
        return (
          <div className="mx-1 w-[37px] h-[250px]" key={index}>
            <VerticalSlider
              color={Colors[index + 1]}
              k={dimension + ".q0"}
              initValue={parseInt(localStorage.getItem(dimension + ".q0") ?? 0)}
              // question={question.question}
              // choices={question.choices}
            />
            <div className="mt-1 ml-[10px]">{Icons[index]}</div>
          </div>
        );
      })}
    </div>
  );
}
