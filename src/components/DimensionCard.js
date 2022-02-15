import * as React from 'react';

import DimensionPage from './DimensionPage';
import DimensionPageAssessment from './DimensionPageAssessment';

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
import Rating from '@mui/material/Rating';
import { SportsRugby } from '@mui/icons-material';

export default function DimensionCard(props) {
//   const [value, setValue] = React.useState(0);

const getColor = (value) => {
    //value from 0 to 1
    var hue=(10 + (value)*100).toString(10);
    return ["hsl(",hue,",100%,43%)"].join("");
  }

  var bgColor = {color: getColor(props.score/5)};

  //const [name, setName] = useState("name1");

  const IconList = {
    Creating: <ColorLensOutlinedIcon/>,
    Consuming: <HeadphonesOutlinedIcon/>,
    'Self-Esteem': <SelfImprovementOutlinedIcon/>,
    Career: <WorkOutlineOutlinedIcon/>,
    Friends: <EmojiPeopleOutlinedIcon/>,
    Relationship: <FavoriteBorderOutlinedIcon/>,
    Financial: <LocalAtmOutlinedIcon/>,
    Shelter: <HomeOutlinedIcon/>,
    Sleep: <BedOutlinedIcon/>,
    Nutrition: <DinnerDiningOutlinedIcon/>,
    Physical: <HealthAndSafetyOutlinedIcon/>,
    Exercise: <HikingOutlinedIcon/>,
  }
  // RED "rgb(255,59,48)"
  // Bluish rgb(0,199,190)
  // LI RED   "rgb(255,45,85)"
  const DimensionColors = {
    Career: {backgroundColor: "rgb(255,149,0)"},
    Consuming: {backgroundColor: "rgb(255,149,0)"},
    'Self-Esteem': {backgroundColor: "rgb(255,205,0)"},
    Creating: {backgroundColor: "rgb(52,199,89)"},
    Friends: {backgroundColor: "rgb(255,59,48)"},
    Physical: {backgroundColor: "rgb(48,176,199)"},
    Nutrition: {backgroundColor: "rgb(50,173,230)"},
    Shelter: {backgroundColor: "rgb(0,122,255)"},
    Sleep: {backgroundColor: "rgb(0,122,255)"},
    Exercise: {backgroundColor: "rgb(88,86,214)"},
    Financial: {backgroundColor: "rgb(175,82,222)"},
    Relationship: {backgroundColor: "rgb(255,45,85)"},
  
    
  }
  const handleClick = () => {
    {document.getElementById(props.name).style.top = '2.5vh'};
  }

  // console.log("DimensionCard:");
  // console.log(props.questions);
  return (
    <>
    <div className="CategoryCard" style={DimensionColors[props.name]} onClick={handleClick}>
      <div className="CategoryCardIcon">{IconList[props.name]}</div>
      <div className="CategoryCardText">{props.name}</div>
      <div className="CategoryCardNum"><Rating name="read-only" value={props.score} precision={0.1} style={{color: 'white', opacity: 0.7}} readOnly /></div>
    </div>
    <DimensionPage questions={props.questions} content={props.content} name={props.name} themes={DimensionColors[props.name]}/>
    <DimensionPageAssessment questions={props.questions} name={props.name + "Assessment"} />
    </>
  )
}
