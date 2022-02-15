import * as React from 'react';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DimensionPage from './DimensionPage';
import SettingsPage from './SettingsPage';
import AccountPage from './AccountPage';

export default function Header(props) {
  const [value, setValue] = React.useState(0);
  const pageContent = "";
  
  const handleClickSettings = () => {
    {document.getElementById('Settings').style.top = '2.5vh'};
  }
  const handleClickAccount = () => {
    {document.getElementById('Account').style.top = '2.5vh'};
  }
  return (
    <>
    <div id="Header">
      {props.name}
      <div className="HeaderControls">
        
        <SettingsOutlinedIcon onClick={handleClickSettings}/>
        <AccountCircleOutlinedIcon onClick={handleClickAccount}/>

        
        
      </div>
      
    </div>
    <SettingsPage content={pageContent} name='Settings' />
    <AccountPage content={pageContent} name='Account' />
    </>
  );
}
