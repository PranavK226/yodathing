import React from 'react';
import YodaQuotePicture from "./YodaQuotePicture.jpeg"
import './App.css';
import "semantic-ui-css/semantic.min.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      translatetoyoda: "None",
      translateback: "None",
      endvalue: "None"
    }
  }
  HandleTextToYoda() {
    this.translatetoyoda = document.getElementById("TextToYoda").value;
    console.log(this.translatetoyoda)
  }

  render() {
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
              <form className="ui form">
                <div class="field">
                  <label>What should I translate to Yoda Speak?</label>
                  <input id="TextToYoda" name="TextToYoda" type="text" value="Yoda is Cool" onSubmit={this.HandleTextToYoda()}/>
                </div> 
              </form>
            <div className="ui eight wide column">
              <img src={YodaQuotePicture} alt="Lol this was supposed to be yoda"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
