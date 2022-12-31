import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action,horror,orginals,comedy,romance, documentaries} from './Urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={orginals} title="Netflix originals
"/>
        <RowPost url={action} title="Action" isSmall/>
        <RowPost url={horror} title="Horror" isSmall/>
        <RowPost url={comedy} title="Comedy" isSmall/>
        <RowPost url={romance} title="romance" isSmall/>
        <RowPost url={documentaries} title="Documentaries" isSmall/>

    </div>
  );
}


export default App;
