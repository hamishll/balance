import * as React from 'react';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AssessmentQuestion from './AssessmentQuestion';

export default function DimensionPageAssessment(props) {
//   const [value, setValue] = React.useState(0);

const minimisePage = () => {
    {document.getElementById(props.name).style.top = '120vh'};
  }
  return (
    <div className="PageCardContainer" id={props.name}>
      {/* <div className="PageCloseBg" onClick={minimisePage}/> */}
      <div className="PageCard" >
        <div className="PageClose" onClick={minimisePage}><CloseOutlinedIcon/></div>
        
        <h1>Assessment</h1>
        <AssessmentQuestion 
          question="Question 1" 
          choice1="Never"
          choice2="Rarely"
          choice3="Sometimes"
          choice4="Often"
          choice5="Always"
        />
        <AssessmentQuestion 
          question="Question 2" 
          choice1="Never"
          choice2="Rarely"
          choice3="Sometimes"
          choice4="Often"
          choice5="Always"
        />
        <AssessmentQuestion 
          question="Question 3" 
          choice1="Never"
          choice2="Rarely"
          choice3="Sometimes"
          choice4="Often"
          choice5="Always"
        />
      </div>
    </div>
  )
}
