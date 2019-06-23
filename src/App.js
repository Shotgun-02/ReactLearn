import React, { Component } from 'react';
import './App.css';
import TodoComp from './TodoComp';

class App extends Component {
  state = {
    lst: [],
    newVal: ''
  };

  txtChange = e => {
    let { newVal } = this.state;
    newVal = e.target.value;
    this.setState({ newVal });
  };

  btnSubmit = e => {
    let { lst, newVal } = this.state;
    if (newVal === "") { return };
    lst.push(newVal);
    // console.log(lst);
    // console.log(newVal);
    newVal = '';
    this.setState({ lst, newVal });
  };

  btnRemove=indx=>{
    let { lst} = this.state;
    lst.splice(indx,1);
    this.setState({lst});
  };

  render() {
    let { lst, newVal } = this.state;
    return (
      <div className="mainDiv">
        <input className="mtxtbox" type="text" value={newVal} onChange={this.txtChange} /> &nbsp;&nbsp; <button className="btn" onClick={this.btnSubmit}>Submit</button><br />
        <ul>
          {lst.map((val, indx) => (
            <TodoComp
              key={indx}
              val={val}
              indx={indx}
              onRem={this.btnRemove}

            />
          ))}
        </ul>
      </div>
    );
  };
}

export default App;