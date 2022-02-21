import React, { useState, useEffect } from "react";

import DimensionCard from "./../components/DimensionCard";
import {
  SleepQuestions,
  FinancialQuestions,
  DummyQuestions,
} from "./../data/questions";
import { MindsetContent } from "./../content/MindsetContent";
import { FinancialContent } from "./../content/FinancialContent";
import { SleepContent } from "./../content/SleepContent";
import { FriendsContent } from "./../content/FriendsContent";
import { ValuesContent } from "./../content/ValuesContent";
import Heading1 from "./Heading1";
import Card from "./Card";

export default function Dimensions(props) {
  return (
    <div className="Container" id="Dimensions">
      <Card
        name="explainerCard"
        backgroundColor="rgb(235, 235, 235)"
        heading="About the Journey"
        text="Finding happiness requires us to find balance across our life. 
      Through the journey below, we'll start by looking after our mind, 
      body, relationships, finances and work to find balance and be happy."
      />

      <Heading1 toptext="Level 1" text="Philosophy of Life" />
      <DimensionCard
        userdata={props.userdata}
        content={ValuesContent}
        questions={DummyQuestions}
        name="Values"
        score={3.3}
      />
      <DimensionCard
        userdata={props.userdata}
        content={MindsetContent}
        questions={DummyQuestions}
        name="Handling worry"
        score={4.1}
      />

      <Heading1 toptext="Level 2" text="Health" />
      <DimensionCard
        userdata={props.userdata}
        content={SleepContent}
        questions={SleepQuestions}
        name="Sleep"
        score={4.5}
      />
      <DimensionCard
        userdata={props.userdata}
        questions={DummyQuestions}
        name="Exercise"
        score={2.3}
      />
      <DimensionCard
        userdata={props.userdata}
        questions={DummyQuestions}
        name="Nutrition"
        score={4.1}
      />
      <DimensionCard
        userdata={props.userdata}
        questions={DummyQuestions}
        name="Physical"
        score={4.7}
      />

      <Heading1 toptext="Level 3" text="Relationships" />
      <DimensionCard
        userdata={props.userdata}
        content={FriendsContent}
        questions={DummyQuestions}
        name="Friends"
        score={2.0}
      />
      <DimensionCard
        userdata={props.userdata}
        questions={DummyQuestions}
        name="Love"
        score={4.5}
      />
      {/* <DimensionCard questions={DummyQuestions} name="Family" score={4.5}/> */}

      <Heading1 toptext="Level 4" text="Freedom" />
      <DimensionCard
        userdata={props.userdata}
        content={FinancialContent}
        questions={FinancialQuestions}
        name="Financial freedom"
        score={4.2}
      />
      <DimensionCard
        userdata={props.userdata}
        questions={DummyQuestions}
        name="Personal freedom"
        score={4.2}
      />

      <Heading1 toptext="Level 5" text="Meaningful work" />
      <DimensionCard
        userdata={props.userdata}
        questions={DummyQuestions}
        name="Creating"
        score={2.5}
      />
      <DimensionCard
        userdata={props.userdata}
        questions={DummyQuestions}
        name="Helping others"
        score={3.1}
      />
    </div>
  );
}
