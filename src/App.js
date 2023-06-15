import React from 'react'

import './App.css';
import Sectionstate from './context/sectionstate';
import AllSection from './components/Section/AllSection';

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="header">
          <p>Select your sections </p>
        </div>
          <Sectionstate>
            <AllSection />
          </Sectionstate>
        <div className="footer">
          <input type="button" value="Save and Next" />
        </div>
      </div>
      <div className="ce" style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>

      </div>
    </div>
  )
}

export default App;
