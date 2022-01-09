import raw from './md/sleep.md';
import './App.css';
import ReactMarkdown from 'react-markdown'
import React, {useState} from 'react';

// material icons

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// end material icons


function Header (props) {

  return (
    <div id="Header">
      My Health
      <div class="HeaderControls">
        <SettingsOutlinedIcon/>
        <AccountCircleOutlinedIcon/>
      </div>
    </div>
  )
}

function getColor(value){
  //value from 0 to 1
  var hue=(10 + (value)*100).toString(10);
  return ["hsl(",hue,",100%,43%)"].join("");
}



function CategoryCard (props) {
  var bgColor = {backgroundColor: getColor(props.score/5)};

  //const [name, setName] = useState("name1");

  const IconList = {
    Creating: <ColorLensOutlinedIcon/>,
    Consuming: <HeadphonesOutlinedIcon/>,
    Personal: <SelfImprovementOutlinedIcon/>,
    Professional: <WorkOutlineOutlinedIcon/>,
    Friends: <EmojiPeopleOutlinedIcon/>,
    Relationship: <FavoriteBorderOutlinedIcon/>,
    Financial: <LocalAtmOutlinedIcon/>,
    Shelter: <HomeOutlinedIcon/>,
    Sleep: <BedOutlinedIcon/>,
    Nutrition: <DinnerDiningOutlinedIcon/>,
    Physical: <HealthAndSafetyOutlinedIcon/>,
    Exercise: <HikingOutlinedIcon/>,
  }
  const handleClick = () => {
    //setName("name2");
    {document.getElementById(props.name).style.top = '5vh'};
  }

  return (
    <>
    <div className="CategoryCard" style={bgColor} onClick={handleClick}>
      <div className="CategoryCardIcon">{IconList[props.name]}</div>
      <div className="CategoryCardText">{props.name}</div>
      <div className="CategoryCardNum">{props.score}</div>
    </div>
    <PageCard content={FinancialContent} name={props.name} />
    </>
  )
}

function Heading1 (props) {
  return (
    <div className="Heading1">{props.text}</div>
  )
}


function PageCard (props) {

  const minimisePage = () => {
    {document.getElementById(props.name).style.top = '120vh'};
  }

  const IconList = {
    Creating: <ColorLensOutlinedIcon/>,
    Consuming: <HeadphonesOutlinedIcon/>,
    Personal: <SelfImprovementOutlinedIcon/>,
    Professional: <WorkOutlineOutlinedIcon/>,
    Friends: <EmojiPeopleOutlinedIcon/>,
    Relationship: <FavoriteBorderOutlinedIcon/>,
    Financial: <LocalAtmOutlinedIcon/>,
    Shelter: <HomeOutlinedIcon/>,
    Sleep: <BedOutlinedIcon/>,
    Nutrition: <DinnerDiningOutlinedIcon/>,
    Physical: <HealthAndSafetyOutlinedIcon/>,
    Exercise: <HikingOutlinedIcon/>,
  }

  return (
    <div className="PageCardContainer" id={props.name}>
      <div className="PageCloseBg" onClick={minimisePage}/>
      <div className="PageCard" >
        <div className="PageClose" onClick={minimisePage}><CloseOutlinedIcon/></div>
        
        <h1><span className="PageIcon">{IconList[props.name]}</span>{props.name}</h1>
        <div style={{textAlign: "center"}}><Button variant="outlined">Complete Assessment</Button></div>
        <h2>Recommended for you</h2>
          <Checkbox />Recommendation 1 goes here.<br/>
          <Checkbox />Recommendation 2 goes here.<br/>
          <Checkbox />Recommendation 3 goes here.<br/>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </div>
  )
}



function App() {
  return (
    <>
    
    <div id="Container">
    <Header name="Hamish" />
      <Heading1 text="Self-Actualisation Needs"/>
      <CategoryCard name="Creating" score="2.5"/>
      <CategoryCard name="Consuming" score="3.1"/>

      <Heading1 text="Esteem Needs"/>
      <CategoryCard name="Personal" score="3.2"/>
      <CategoryCard name="Professional" score="3.3"/>

      <Heading1 text="Belonging Needs"/>
      <CategoryCard name="Friends" score="2.0"/>
      <CategoryCard name="Relationship" score="4.5"/>

      <Heading1 text="Safety Needs"/>
      <CategoryCard name="Financial" score="4.2"/>
      <CategoryCard name="Shelter" score="5.0"/>

      <Heading1 text="Physiological Needs"/>
      <CategoryCard name="Sleep" score="4.5"/>
      <CategoryCard name="Nutrition" score="4.1"/>
      <CategoryCard name="Physical" score="4.7"/>
      <CategoryCard name="Exercise" score="2.3"/>

    </div>
    </>
  );
}

const FinancialContent = `
## Key tips
* Tip 1 goes here.
* Tip 2 goes here.
* Tip 3 goes here.

## Reading List

`

export default App;
