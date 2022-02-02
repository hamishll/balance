import * as React from 'react';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ReactMarkdown from 'react-markdown';


import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function AccountPage(props) {
  const [value, setValue] = React.useState(0);

  const minimisePage = () => {
    {document.getElementById(props.name).style.top = '120vh'};
  }


  const handleClickAssessment = () => {
    {document.getElementById(props.name + 'Assessment').style.top = '7vh'};
  }

  return (
    <div className="PageCardContainer" id={props.name}>
      <div className="PageCloseBg" onClick={minimisePage}/>
      <div className="PageCard" >
        <div className="PageClose" onClick={minimisePage}><CloseOutlinedIcon/></div>
        
        <h1>{props.name}</h1>

      </div>
    </div>
  )
}
