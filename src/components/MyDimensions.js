import React from "react";

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
import { Colors } from "./Theme.js";

export default function MyDimensions(props) {
  return (
    <div
      className="grow justify-center flex flex-row flex-wrap px-3 gap-3 pb-[100px] overflow-scroll no-scrollbar"
      id="Dimensions"
    >
      {/* <Card
        name="explainerCard"
        backgroundColor="rgb(240,240,240)"
        heading="About the Journey"
        text="Finding happiness requires us to find balance across our life.
        Through the journey below, we'll start by looking after our mind, body,
        relationships, finances and work to find balance and be happy."
      /> */}

      <Heading1 toptext="Dimensions" text="" />

      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Sleep.goals}
        questions={props.appData.Sleep.questions}
        content={SleepContent}
        name="Sleep"
        icon={<DarkModeOutlinedIcon />}
        color={Colors[1]}
        score={62}
      />

      <DimensionCard
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Health & Fitness"
        icon={<DirectionsRunIcon />}
        color={Colors[2]}
        score={50}
      />

      <DimensionCard
        userdata={props.userdata}
        content={FriendsContent}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Friends"
        icon={<EmojiPeopleOutlinedIcon />}
        color={Colors[3]}
        score={40}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Family"
        icon={<FamilyRestroomIcon />}
        color={Colors[4]}
        score={40}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Love"
        icon={<FavoriteBorderOutlinedIcon />}
        color={Colors[5]}
        score={90}
      />

      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Personal Growth"
        icon={<ColorLensOutlinedIcon />}
        color={Colors[6]}
        score={50}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Work"
        icon={<LocalAtmOutlinedIcon />}
        color={Colors[7]}
        score={84}
      />
      <DimensionCard
        userdata={props.userdata}
        content={FinancialContent}
        goals={props.appData["Financial Freedom"].goals}
        questions={props.appData["Financial Freedom"].questions}
        name="Financial Freedom"
        icon={<LocalAtmOutlinedIcon />}
        color={Colors[8]}
        score={84}
      />
      <Heading1 toptext="Overall" text="" />
      <DimensionCard
        // className="basis-[100px]"
        content={ValuesContent}
        goals={props.appData.Values.goals}
        questions={props.appData.Values.questions}
        name="Values"
        icon={<ExploreOutlinedIcon />}
        color={Colors[0]}
        score={66}
      />
      <DimensionCard
        // className="basis-[100px]"
        userdata={props.userdata}
        content={MindsetContent}
        goals={props.appData.Worry.goals}
        questions={props.appData.Worry.questions}
        name="Handling worry"
        icon={<SelfImprovementOutlinedIcon />}
        color={Colors[0]}
        score={82}
      />
      <DimensionCard
        // className="basis-[100px]"
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        content={MeaningContent}
        name="Finding Meaning"
        icon={<FollowTheSignsIcon />}
        color={Colors[0]}
        score={62}
      />
    </div>
  );
}
