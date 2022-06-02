import React, { useState, useEffect } from "react";

// Components
import DimensionCard from "./DimensionCard";
import Heading1 from "./Heading1";
import Card from "./Card";

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
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";

export default function MyDimensions(props) {
  return (
    <div
      className="Container justify-center flex px-3 gap-3 pb-12 text-black"
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

      <Heading1 toptext="Overall" text="" />
      <DimensionCard
        content={ValuesContent}
        goals={props.appData.Values.goals}
        questions={props.appData.Values.questions}
        name="Values"
        icon={<ExploreOutlinedIcon />}
        color="#555555"
        score={3.3}
      />
      <DimensionCard
        userdata={props.userdata}
        content={MindsetContent}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Handling worry"
        icon={<SelfImprovementOutlinedIcon />}
        color="#555555"
        score={4.1}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        content={MeaningContent}
        name="Finding Meaning"
        icon={<FollowTheSignsIcon />}
        color="#555555"
        score={3.1}
      />

      <Heading1 toptext="Dimensions" text="" />
      <DimensionCard
        userdata={props.userdata}
        content={SleepContent}
        goals={props.appData.Sleep.goals}
        questions={props.appData.Sleep.questions}
        name="Health & Fitness"
        icon={<DarkModeOutlinedIcon />}
        color="#34C759"
        score={4.5}
      />

      <DimensionCard
        userdata={props.userdata}
        content={FriendsContent}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Friends"
        icon={<EmojiPeopleOutlinedIcon />}
        color="#FFCD00"
        score={2.0}
      />
      <DimensionCard
        userdata={props.userdata}
        content={FriendsContent}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Family"
        icon={<FamilyRestroomIcon />}
        color="#FF9500"
        score={2.0}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Love"
        icon={<FavoriteBorderOutlinedIcon />}
        color="#FF3B30"
        score={4.5}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        content={MeaningContent}
        name="Fun"
        icon={<HeadphonesOutlinedIcon />}
        color="#AF52DE"
        score={3.1}
      />

      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Personal Growth"
        icon={<ColorLensOutlinedIcon />}
        color="#5856D6"
        score={2.5}
      />
      <DimensionCard
        userdata={props.userdata}
        content={FinancialContent}
        goals={props.appData["Financial Freedom"].goals}
        questions={props.appData["Financial Freedom"].questions}
        name="Work"
        icon={<LocalAtmOutlinedIcon />}
        color="#007AFF"
        score={4.2}
      />
      <DimensionCard
        userdata={props.userdata}
        content={FinancialContent}
        goals={props.appData["Financial Freedom"].goals}
        questions={props.appData["Financial Freedom"].questions}
        name="Financial freedom"
        icon={<LocalAtmOutlinedIcon />}
        color="#30B0C7"
        score={4.2}
      />
    </div>
  );
}
