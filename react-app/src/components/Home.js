/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React, {useState} from 'react';
import Adventures from './Adventures';
import EditableTitle from './editable/EditableTitle';
import { ResponsiveGrid } from '@adobe/aem-react-editable-components';
import EditableText from './editable/EditableText';
import EditableImage from './editable/EditableImage';


/***
 * Displays a grid of current adventures
 */
 function Home() {
    const [adventureActivity, setAdventureActivity] = useState('');

    return (
      <div className="Home">
        
        <EditableTitle
            pagePath='/content/wknd-app/us/en/home'
            itemPath='root/title'/>
        <ResponsiveGrid
                pagePath='/content/wknd-app/us/en/home'
                itemPath='root/responsivegrid'/>
                
        <div className="adventure-nav">
          <button onClick={() => setAdventureActivity('')}>All</button>
          <button onClick={() => setAdventureActivity('Camping')}>Camping</button>
          <button onClick={() => setAdventureActivity('Cycling')}>Cycling</button>
          <button onClick={() => setAdventureActivity('Rock Climbing')}>Rock Climbing</button>
          <button onClick={() => setAdventureActivity('Skiing')}>Skiing</button>
          <button onClick={() => setAdventureActivity('Social')}>Social</button>
          <button onClick={() => setAdventureActivity('Surfing')}>Surfing</button>
        </div>
        <Adventures adventureActivity={adventureActivity} />
    </div>
    );
}

export default Home;