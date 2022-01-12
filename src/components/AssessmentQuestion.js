import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function AssessmentQuestion(props) {
//   const [value, setValue] = React.useState(0);

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return(
    <>
    <h3>{props.question}</h3>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
    <ToggleButton value="1">{props.choice1}</ToggleButton>
    <ToggleButton value="2">{props.choice2}</ToggleButton>
    <ToggleButton value="3">{props.choice3}</ToggleButton>
    <ToggleButton value="4">{props.choice4}</ToggleButton>
    <ToggleButton value="5">{props.choice5}</ToggleButton>
  </ToggleButtonGroup>
  </>
  )
}
