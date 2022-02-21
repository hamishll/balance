import * as React from "react";

import DimensionPage from "./DimensionPage";
import DimensionPageAssessment from "./DimensionPageAssessment";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import Rating from "@mui/material/Rating";
import { PanoramaPhotosphereSelect } from "@mui/icons-material";

export default function DimensionCard(props) {
  //   const [value, setValue] = React.useState(0);
  // const getColor = (value) => {
  //     //value from 0 to 1
  //     var hue=(10 + (value)*100).toString(10);
  //     return ["hsl(",hue,",100%,43%)"].join("");
  //   }
  //var bgColor = {color: getColor(props.score/5)};
  //const [name, setName] = useState("name1");

  const IconList = {
    Creating: <ColorLensOutlinedIcon />,
    "Helping others": <HeadphonesOutlinedIcon />,

    Family: <HeadphonesOutlinedIcon />,
    Friends: <EmojiPeopleOutlinedIcon />,
    Love: <FavoriteBorderOutlinedIcon />,

    "Financial freedom": <LocalAtmOutlinedIcon />,
    "Personal freedom": <HomeOutlinedIcon />,

    "Handling worry": <SelfImprovementOutlinedIcon />,
    Values: <NavigationOutlinedIcon />,

    Sleep: <BedOutlinedIcon />,
    Nutrition: <DinnerDiningOutlinedIcon />,
    Physical: <HealthAndSafetyOutlinedIcon />,
    Exercise: <HikingOutlinedIcon />,
  };

  const DimensionColors = {
    "Helping others": "rgb(88,86,214)",
    Creating: "rgb(88,86,214)",

    Love: "rgb(255,45,85)",
    Friends: "rgb(255,45,85)",
    Family: "rgb(255,59,48)",

    Values: "rgb(255,149,0)",
    "Handling worry": "rgb(255,149,0)",

    "Financial freedom": "rgb(52,199,89)",
    "Personal freedom": "rgb(52,199,89)",

    Nutrition: "rgb(0,122,255)",
    Sleep: "rgb(0,122,255)",
    Exercise: "rgb(0,122,255)",
    Physical: "rgb(0,122,255)",
  };

  const handleClick = () => {
    document.getElementById(props.name).style.top = "2.5vh";
  };

  return (
    <>
      <div
        className="CategoryCard"
        style={{ backgroundColor: DimensionColors[props.name] }}
        onClick={handleClick}
      >
        <div className="CategoryCardIcon">{IconList[props.name]}</div>
        <div className="CategoryCardText">{props.name}</div>
        <div className="CategoryCardNum">
          <Rating
            name="read-only"
            value={props.score}
            precision={0.1}
            style={{ color: "white", opacity: 0.7 }}
            readOnly
          />
        </div>
      </div>
      <DimensionPage
        questions={props.questions}
        content={props.content}
        name={props.name}
        themes={DimensionColors[props.name]}
      />
      <DimensionPageAssessment
        userdata={props.userdata}
        questions={props.questions}
        name={props.name + "Assessment"}
      />
    </>
  );
}
