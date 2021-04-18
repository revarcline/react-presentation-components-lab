import React from "react";

export default class SimpleComponent extends React.Component {
  state = {
    mood: "happy",
  };

  sadTime = () => this.setState({ mood: "sad" });

  render() {
    return <div onClick={this.sadTime}>{this.state.mood}</div>;
  }
}
