import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

@inject('demoStore')
@observer
class App extends Component {
  constructor (props) {
    super(props);
    this.demoStore = props.demoStore;
    this.textInput = React.createRef();
    console.log(this.textInput);
    console.log(props);
  }


  render () {

    return <div>
              <label>{this.demoStore.greeting}</label>
              <br></br>
              <label>{this.demoStore.numero}</label>
              <br></br>
              <button onClick={this.demoStore.plus}>suma contador</button>
              <br></br>
              <input type="text" ref={this.textInput}></input>
              <button onClick={()=> {this.demoStore.push(this.textInput.current.value)}}>introduce tu nombre</button>
              <br></br>
              <label>{JSON.stringify(this.demoStore.lista)}</label>
              <br></br>
          </div>;
  }
}

export default App;
