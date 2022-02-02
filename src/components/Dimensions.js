import React, {useState} from 'react';

import Header from './../components/Header';
import Heading1 from './../components/Heading1';
import DimensionCard from './../components/DimensionCard';
import {SleepQuestions, FinancialQuestions} from './../data/questions';
import {MindsetContent} from './../content/mindset';
import {FinancialContent} from './../content/financial';
import {SleepContent} from './../content/sleep';

export default function Dimensions(props) {
  // console.log("Dimensions:");
  // console.log(SleepQuestions);
  // {props.value}
  return (
    <>
    
    <div className="Container" id="Dimensions">
      {/* <Heading1 text="Self-Actualisation Needs"/> */}
      <DimensionCard questions={SleepQuestions} name="Creating" score="2.5"/>
      <DimensionCard questions={SleepQuestions} name="Consuming" score="3.1"/>

      {/* <Heading1 text="Esteem Needs"/> */}
      <DimensionCard content = {MindsetContent} questions={SleepQuestions} name="Self-Esteem" score="3.2"/>
      <DimensionCard questions={SleepQuestions} name="Career" score="3.3"/>

      {/* <Heading1 text="Belonging Needs"/> */}
      <DimensionCard questions={SleepQuestions} name="Friends" score="2.0"/>
      <DimensionCard questions={SleepQuestions} name="Relationship" score="4.5"/>

      {/* <Heading1 text="Safety Needs"/> */}
      <DimensionCard content = {FinancialContent} questions={FinancialQuestions} name="Financial" score="4.2"/>
      <DimensionCard questions={SleepQuestions} name="Shelter" score="5.0"/>

      {/* <Heading1 text="Physiological Needs"/> */}
      <DimensionCard  content = {SleepContent} questions={SleepQuestions} name="Sleep" score="4.5"/>
      <DimensionCard questions={SleepQuestions} name="Nutrition" score="4.1"/>
      <DimensionCard questions={SleepQuestions} name="Physical" score="4.7"/>
      <DimensionCard questions={SleepQuestions}  name="Exercise" score="2.3"/>
    </div>
    
    </>
  );
}
