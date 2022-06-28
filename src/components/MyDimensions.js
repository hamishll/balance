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

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function MyDimensions(props) {
  const [isPlaying, setPlaying] = useState(true);
  const [counter, setCounter] = useState(0);

  const [overallScore, setOverallScore] = useState(
    (parseInt(localStorage.getItem("LoveAssessment") ?? 0) +
      parseInt(localStorage.getItem("Mental HealthAssessment") ?? 0) +
      parseInt(localStorage.getItem("SleepAssessment") ?? 0) +
      parseInt(localStorage.getItem("FriendsAssessment") ?? 0) +
      parseInt(localStorage.getItem("Meaningful WorkAssessment") ?? 0) +
      parseInt(localStorage.getItem("Health & FitnessAssessment") ?? 0) +
      parseInt(localStorage.getItem("Financial FreedomAssessment") ?? 0) +
      parseInt(localStorage.getItem("FamilyAssessment") ?? 0)) /
      8
  );
  useInterval(
    () => {
      if (counter < Math.round(overallScore, 0)) {
        setCounter(counter + 1);
      } else {
        setPlaying(false);
      }
    },
    isPlaying ? 10 : null
  );

  // useEffect(() => {
  //   setPlaying(true);
  //   setCounter(0);
  // }, []);

  return (
    <div
      className="grow justify-center  flex flex-row flex-wrap px-3 gap-3 pb-[100px] overflow-scroll no-scrollbar"
      id="Dimensions"
    >
      <div className="flex-col w-full text-center flex items-center">
        <span className="text-sm ">Your Balance score: </span>
        <span className="w-full text-6xl font-semibold leading-tight">
          {counter}
        </span>

        <div
          className="bg-white w-1/2 max-w-md h-[6px] mb-4 rounded-lg bg-opacity-30"
          style={{ backgroundColor: `${Colors[0]}30` }}
        >
          <div
            className={`h-full rounded-lg bg-opacity-100`}
            style={{ width: counter + "%", backgroundColor: Colors[0] }}
          ></div>
        </div>
      </div>
      {/* <Card
        name="explainerCard"
        backgroundColor="rgb(240,240,240)"
        heading="About the Journey"
        text="Finding happiness requires us to find balance across our life.
        Through the journey below, we'll start by looking after our mind, body,
        relationships, finances and work to find balance and be happy."
      /> */}

      <DimensionCard
        userdata={props.userdata}
        goals={props.appData["Sleep"].goals}
        questions={props.appData["Sleep"].questions}
        content={SleepContent}
        name="Sleep"
        icon={<DarkModeOutlinedIcon />}
        color={Colors[1]}
        score={62}
        modules={[{ name: "Why We Sleep", content: SleepContent }]}
      />

      <DimensionCard
        goals={props.appData["Mental Health"].goals}
        questions={props.appData["Mental Health"].questions}
        name="Mental Health"
        icon={<DirectionsRunIcon />}
        color={Colors[2]}
        score={50}
        modules={[
          { name: "Handling Worry", content: MindsetContent },
          { name: "Having a Philosophy of Life", content: ValuesContent },
        ]}
      />

      <DimensionCard
        goals={props.appData["Health & Fitness"].goals}
        questions={props.appData["Health & Fitness"].questions}
        name="Health & Fitness"
        icon={<DirectionsRunIcon />}
        color={Colors[3]}
        score={50}
        modules={[
          { name: "Nutrition", content: "Module coming soon" },
          { name: "Self-Care", content: "Module coming soon" },
        ]}
      />

      <DimensionCard
        userdata={props.userdata}
        content={FriendsContent}
        goals={props.appData["Friends"].goals}
        questions={props.appData["Friends"].questions}
        name="Friends"
        icon={<EmojiPeopleOutlinedIcon />}
        color={Colors[4]}
        score={40}
        modules={[
          { name: "Interpersonal Relationships", content: FriendsContent },
        ]}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData["Family"].goals}
        questions={props.appData["Family"].questions}
        name="Family"
        icon={<FamilyRestroomIcon />}
        color={Colors[5]}
        score={40}
        modules={[{}]}
      />
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData["Love"].goals}
        questions={props.appData["Love"].questions}
        name="Love"
        icon={<FavoriteBorderOutlinedIcon />}
        color={Colors[6]}
        score={90}
        modules={[{}]}
      />

      {/* <DimensionCard
        userdata={props.userdata}
        goals={props.appData["Personal Growth"].goals}
        questions={props.appData["Personal Growth"].questions}
        name="Personal Growth"
        icon={<ColorLensOutlinedIcon />}
        color={Colors[7]}
        score={50}
        modules={[{}]}
      /> */}
      <DimensionCard
        userdata={props.userdata}
        goals={props.appData["Meaningful Work"].goals}
        questions={props.appData["Meaningful Work"].questions}
        name="Meaningful Work"
        icon={<LocalAtmOutlinedIcon />}
        color={Colors[7]}
        score={84}
        modules={[
          { name: "Finding Meaning in your Life", content: MeaningContent },
        ]}
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
        modules={[
          { name: "Making your money work for you", content: FinancialContent },
        ]}
      />
      {/* <Heading1 toptext="Overall" text="" />
      <DimensionCard
        // className="basis-[100px]"
        content={ValuesContent}
        goals={props.appData["Values"].goals}
        questions={props.appData["Values"].questions}
        name="Values"
        icon={<ExploreOutlinedIcon />}
        color={Colors[0]}
        score={66}
        modules={[
          { name: "Having a Philosophy of Life", content: ValuesContent },
        ]}
      />
      <DimensionCard
        // className="basis-[100px]"
        userdata={props.userdata}
        content={MindsetContent}
        goals={props.appData["Worry"].goals}
        questions={props.appData["Worry"].questions}
        name="Handling worry"
        icon={<SelfImprovementOutlinedIcon />}
        color={Colors[0]}
        score={82}
        modules={[{ name: "Handling Worry", content: MindsetContent }]}
      />
      <DimensionCard
        // className="basis-[100px]"
        userdata={props.userdata}
        goals={props.appData["Meaning"].goals}
        questions={props.appData["Meaning"].questions}
        content={MeaningContent}
        name="Finding Meaning"
        icon={<FollowTheSignsIcon />}
        color={Colors[0]}
        score={62}
        modules={[
          { name: "Finding Meaning in your Life", content: MeaningContent },
        ]}
      /> */}
    </div>
  );
}
