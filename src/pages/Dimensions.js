import React, {useState} from 'react';

import Header from './../components/Header';
import Heading1 from './../components/Heading1';
import DimensionCard from './../components/DimensionCard';

export default function Dimensions() {
  const [value, setValue] = React.useState(0);


  return (
    <>
    
    <div className="Container" id="Dimensions">
    <Header name="Dimensions" />{value}
      <Heading1 text="Self-Actualisation Needs"/>
      <DimensionCard name="Creating" score="2.5"/>
      <DimensionCard name="Consuming" score="3.1"/>

      <Heading1 text="Esteem Needs"/>
      <DimensionCard name="Personal" score="3.2"/>
      <DimensionCard name="Professional" score="3.3"/>

      <Heading1 text="Belonging Needs"/>
      <DimensionCard name="Friends" score="2.0"/>
      <DimensionCard name="Relationship" score="4.5"/>

      <Heading1 text="Safety Needs"/>
      <DimensionCard name="Financial" score="4.2"/>
      <DimensionCard name="Shelter" score="5.0"/>

      <Heading1 text="Physiological Needs"/>
      <DimensionCard name="Sleep" score="4.5"/>
      <DimensionCard name="Nutrition" score="4.1"/>
      <DimensionCard name="Physical" score="4.7"/>
      <DimensionCard  name="Exercise" score="2.3"/>
    </div>

    <div className="Container" id="MyBalance">
      <Header name="My Balance" />
    </div>

    <div className="Container" id="Coach">
      <Header name="AIdra" />
    </div>
    
    </>
  );
}
