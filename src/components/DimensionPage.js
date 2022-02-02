import * as React from 'react';

import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ReactMarkdown from 'react-markdown';

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

import styles from './../css/Post.css';

export default function DimensionPage(props) {
  const [value, setValue] = React.useState(0);

  const minimisePage = () => {
    {document.getElementById(props.name).style.top = '120vh'};
  }

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

  const handleClickAssessment = () => {
    {document.getElementById(props.name + 'Assessment').style.top = '6vh'};
  }

  return (
    <div className="PageCardContainer" id={props.name}>
      <div className="PageCloseBg" onClick={minimisePage}/>
      <div className="PageCard" >
        <div className="PageClose" onClick={minimisePage}><CloseOutlinedIcon/></div>
        
        <h1><span className="PageIcon">{IconList[props.name]}</span>{props.name}</h1>
        <div style={{textAlign: "center"}}><Button variant="outlined" onClick={handleClickAssessment}>Complete Assessment</Button></div>
        <h2>Recommended for you</h2>
        {props.questions.map((q,index) => { 
          return <FormGroup key={index}>
            <FormControlLabel control={<Checkbox label={q.response} />} label={q.response} /> 
          </FormGroup>
        })}
        <div className="post">
          <ReactMarkdown children={props.content}/>
        </div>
      </div>
    </div>
  )
}
