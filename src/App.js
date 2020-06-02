import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "gabriel",
  }
  changeName = (newName) =>{
    this.setState({
        name: newName
    })
  }
  changeNameInput =(event) =>{
    this.setState({
      name:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick = {() => this.changeName("gabriel fono(:")}>change button</button>
        <button onClick={ this.changeName.bind(this,"gabriel fono :)")}> button</button>
        <input type = "text" onChange = {this.changeNameInput} value = {this.state.name}/>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
