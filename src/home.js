import React from 'react';
import Hello from './Hello';
import Unity, { UnityContent } from "react-unity-webgl";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        isLoading:true
    }

    // Next up create a new Unity Content object to 
    // initialise and define your WebGL build. The 
    // paths are relative from your index file.

    this.unityContent = new UnityContent(
      "../../Build/webgl1.json",
      "../../Build/UnityLoader.js"
    );

    // Create a new listener for our on loaded Event.
    // When the unity player is loaded, the event will
    // fire.

    this.unityContent.on("loaded", () => {

      // Now we can for example hide the loading overlay.

      this.setState({
        isLoading: false
      });
    });
  }

  render() {

    // Finally render the Unity component and pass 
    // the Unity content through the props. Along with
    // a text that shows wether the player is loading.

    return (
      <div>
        {this.state.isLoading === true && <div>{"Loading..."}</div>}
        <Unity unityContent={this.unityContent} />
      </div>
    );
  }
}