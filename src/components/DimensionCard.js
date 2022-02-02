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
  const handleClick = () => {
    {document.getElementById(props.name).style.top = '5vh'};
  }

  // console.log("DimensionCard:");
  // console.log(props.questions);
  return (
    <>
    <div className="CategoryCard" style={bgColor} onClick={handleClick}>
      <div className="CategoryCardIcon">{IconList[props.name]}</div>
      <div className="CategoryCardText">{props.name}</div>
      <div className="CategoryCardNum">{props.score}</div>
    </div>
    <DimensionPage questions={props.questions} content={props.content} name={props.name} />
    <DimensionPageAssessment questions={props.questions} name={props.name + "Assessment"} />
    </>
  )
}
