import './App.css';
import React, {useState} from 'react';

// Sections
import MyBalance from './pages/MyBalance';
import Dimensions from './pages/Dimensions';
import Coach from './pages/Coach';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';

function App() {
  const [value, setValue] = React.useState(0);
  
  return (
    <>
    <MyBalance value={setValue}/>
    <Dimensions value={setValue}/>
    <Coach value={setValue}/>
    <SimpleBottomNavigation/>
    </>
  );
}


export default App;
