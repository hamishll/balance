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

export default function MyStatus(props) {
  // const [value, setValue] = React.useState(props.initValue);
  const Dimensions = [
    "Health",
    "Friends",
    "Family",
    "Love",
    "Fun",
    "Personal Development",
    "Work",
    "Finances",
  ];

  const Colors = [
    "#34C759",
    "#FFCD00",
    "#FF9500",
    "#FF3B30",
    "#AF52DE",
    "#5856D6",
    "#007AFF",
    "#30B0C7",
  ];

  const Icons = [
    <HikingOutlinedIcon />,
    <ConnectWithoutContactOutlinedIcon />,
    <FamilyRestroomIcon />,
    <FavoriteBorderOutlinedIcon />,
    <HeadphonesOutlinedIcon />,
    <ColorLensOutlinedIcon />,
    <WorkOutlineOutlinedIcon />,
    <LocalAtmOutlinedIcon />,
  ];

  return (
    <div className="py-4 flex flex-row justify-center">
      {Dimensions.map((dimension, index) => {
        return (
          <div className="mx-1 w-[37px] h-[250px]" key={index}>
            <VerticalSlider
              color={Colors[index]}
              k={dimension + ".q0"}
              initValue={parseInt(localStorage.getItem(dimension + ".q0"))}
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
