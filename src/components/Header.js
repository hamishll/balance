import * as React from 'react';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Header(props) {
  const [value, setValue] = React.useState(0);

  return (
    <div id="Header">
      {props.name}
      <div className="HeaderControls">
        <SettingsOutlinedIcon/>
        <AccountCircleOutlinedIcon/>
      </div>
    </div>
  );
}
