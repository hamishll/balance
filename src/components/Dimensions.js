import React, { useState, useEffect } from "react";

// Components
import DimensionCard from "./../components/DimensionCard";

// Questions
import {
  SleepQuestions,
  FinancialQuestions,
  DummyQuestions,
  WorryQuestions,
} from "./../data/questions";

// Content
import { MindsetContent } from "./../content/MindsetContent";
import { FinancialContent } from "./../content/FinancialContent";
import { SleepContent } from "./../content/SleepContent";
import { FriendsContent } from "./../content/FriendsContent";
import { ValuesContent } from "./../content/ValuesContent";
import { MeaningContent } from "./../content/MeaningContent";
import Heading1 from "./Heading1";
import Card from "./Card";

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

export default function Dimensions(props) {
  return (
    <div
      className="Container justify-center flex px-3 gap-3 text-black"
      id="Dimensions"
    >
      <Card
        name="explainerCard"
        backgroundColor="rgb(240,240,240)"
        heading="About the Journey"
        text="Finding happiness requires us to find balance across our life.
        Through the journey below, we'll start by looking after our mind, body,
        relationships, finances and work to find balance and be happy."
      />

      <Heading1 toptext="Level 1" text="Philosophy of Life" />
      <DimensionCard
        content={ValuesContent}
        goals={props.appData.Values.goals}
        questions={props.appData.Values.questions}
        name="Values"
        icon={<ExploreOutlinedIcon />}
        color="rgb(255,149,0)"
        score={3.3}
      />

      <Heading1 toptext="Level 2" text="Health" />
      <DimensionCard
        userdata={props.userdata}
        content={SleepContent}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Sleep"
        icon={<DarkModeOutlinedIcon />}
        color="rgb(0,122,255)"
        score={4.5}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Exercise"
        icon={<HikingOutlinedIcon />}
        color="rgb(0,122,255)"
        score={2.3}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Nutrition"
        icon={<BakeryDiningOutlinedIcon />}
        color="rgb(0,122,255)"
        score={4.1}
      />
      <DimensionCard
        userdata={props.userdata}
        content={MindsetContent}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Handling worry"
        icon={<SelfImprovementOutlinedIcon />}
        color="rgb(0,122,255)"
        score={4.1}
      />

      <Heading1 toptext="Level 3" text="Relationships" />
      <DimensionCard
        userdata={props.userdata}
        content={FriendsContent}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Friends"
        icon={<EmojiPeopleOutlinedIcon />}
        color="rgb(255,45,85)"
        score={2.0}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Love"
        icon={<FavoriteBorderOutlinedIcon />}
        color="rgb(255,45,85)"
        score={4.5}
      />
      <DimensionCard
        userdata={props.userdata}
        content={FriendsContent}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Family"
        icon={<FamilyRestroomIcon />}
        color="rgb(255,45,85)"
        score={2.0}
      />
      <Heading1 toptext="Level 4" text="Smarter Living" />
      <DimensionCard
        userdata={props.userdata}
        content={FinancialContent}
        goals={props.appData["Financial Freedom"].goals}
        questions={props.appData["Financial Freedom"].questions}
        name="Financial freedom"
        icon={<LocalAtmOutlinedIcon />}
        color="rgb(52,199,89)"
        score={4.2}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Shelter"
        icon={<HomeOutlinedIcon />}
        color="rgb(52,199,89)"
        score={4.2}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Self-sufficiency"
        icon={<AllInclusiveOutlinedIcon />}
        color="rgb(52,199,89)"
        score={4.2}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Ecological living"
        icon={<EnergySavingsLeafOutlinedIcon />}
        color="rgb(52,199,89)"
        score={4.2}
      />

      <Heading1 toptext="Level 5" text="Meaningful work" />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        content={MeaningContent}
        name="Finding Meaning"
        icon={<FollowTheSignsIcon />}
        color="rgb(88,86,214)"
        score={3.1}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        name="Creating"
        icon={<ColorLensOutlinedIcon />}
        color="rgb(88,86,214)"
        score={2.5}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        content={MeaningContent}
        name="Learning"
        icon={<HeadphonesOutlinedIcon />}
        color="rgb(88,86,214)"
        score={3.1}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData.Generic.goals}
        questions={props.appData.Generic.questions}
        content={MeaningContent}
        name="Helping others"
        icon={<ConnectWithoutContactOutlinedIcon />}
        color="rgb(88,86,214)"
        score={3.1}
      />
    </div>
  );
}
