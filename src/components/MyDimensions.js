import React, { useEffect, useState, useRef } from "react";

// Components
import DimensionCard from "./DimensionCard";
import Heading1 from "./Heading1";

// Content
import { MindsetContent } from "../content/MindsetContent";
import { FinancialContent } from "../content/FinancialContent";
import { SleepContent } from "../content/SleepContent";
import { FriendsContent } from "../content/FriendsContent";
import { ValuesContent } from "../content/ValuesContent";
import { MeaningContent } from "../content/MeaningContent";

// Icons
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Colors, Colors2 } from "./Theme.js";
import DimensionPageAssessment from "./DimensionPageAssessment";
import ScoreCounter from "./ScoreCounter";

export default function MyDimensions(props) {
  return (
    <div
      className="grow justify-center  flex flex-row flex-wrap px-3 gap-3 pb-[100px] overflow-scroll no-scrollbar"
      id="Dimensions"
    >
      <ScoreCounter />
      {props.appData.map((dimension, index) => {
        return (
          <DimensionCard
            key={index}
            userdata={props.userdata}
            goals={dimension.goals}
            questions={dimension.questions}
            name={dimension.name}
            icon={dimension.icon}
            color={dimension.color}
            modules={dimension.modules}
          />
        );
      })}
    </div>
  );
}
