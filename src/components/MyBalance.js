import React, {useState} from 'react';
import Heading1 from './Heading1';
import BalanceWheel from './BalanceWheel';
import Checkbox from '@mui/material/Checkbox';

export default function MyBalance(props) {
  // const [value, setValue] = React.useState(0);



  return (
    <div>
      <BalanceWheel score={83}/>
      <Heading1 text="Grateful for"/>
      <ul>
        <li>Being physically healthy</li>
        <li>Living in the modern world</li>
        <li>Morning coffee</li>
      </ul>
      <Heading1 text="AIdra's Top Tips"/>
        <Checkbox />Spend a few minutes messaging your friends<br/>
          <Checkbox />Prepare a monthly budget<br/>
          <Checkbox />Drink a big glass of water when you wake up<br/>
    </div>
  );
}
