import React from 'react';
import YodaQuotePicture from "./YodaQuotePicture.jpeg"
import './App.css';
import "semantic-ui-css/semantic.min.css"

function App() {
  return (
      <div className="ui grid">
        <div className="ui row">
          <div className="ui sixteen wide column">
            <h1 className="ui dividing header">
              Yoda Translator
              <div className="ui sub header">A tool to go to Yoda Speak and Back</div>
            </h1>
          </div>
        </div>
        <div className="ui row">
          <div className="ui eight wide column">
            <h2 className="ui dividing header">
              <i className="ui right arrow icon"></i>
              To Yoda Speak
            </h2>
          </div>
          <div className="ui eight wide column">
            <img src={YodaQuotePicture} alt="Lol this was supposed to be yoda"></img>
          </div>
        </div>
      </div>
  );
}

export default App;
