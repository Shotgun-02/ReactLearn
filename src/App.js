import React, { Component } from 'react';
import './App.css';
import TodoComp from './TodoComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
  }

  txtChange = e => {
    this.setState({ text: e.target.value });
  };

  btnSubmit = e => {
    let { text } = this.state;
    let items = [...this.state.items];
    if (text === "") { console.log('no data');}
    else if((items.filter((elm)=>{return elm.val.toLowerCase() === text.toLowerCase()})).length>0){
      alert('data exists');
    }
    else{
    items.push({id:(items.length+1),val:text,done:false});
    this.setState({ items, text:"" });
    }
    e.preventDefault();
  };

  btnDone = (e,indx) => {
    let items = [...this.state.items];
    items.forEach(elm => {
      if(elm.id === indx){
        elm.done = true;
      }
    });
    this.setState({items});
    e.preventDefault();
  };
  
  btnDelete = (e,indx) => {
    let items = [...this.state.items];
    items = items.filter((elm)=>{return elm.id !== indx});
    //items.splice(indx, 1);
    this.setState({ items });
    e.preventDefault();
  };

  render() {
    let { items, text } = this.state;
    return (
      <form className="mainDiv">
        <h3>To Do List</h3>
        <ul>
          {items.map((elem, indx) => (
            <TodoComp
              key={indx}
              item={elem}
              indx={elem.id}
              onDel={this.btnDelete}
              onDone={this.btnDone}
            />
          ))}
        </ul>
        <input className="mtxtbox" type="text" value={text} onChange={this.txtChange} />
        &nbsp;&nbsp;
        <button className="btn submit" onClick={this.btnSubmit}>Submit</button><br />
      </form>
    );
  };
}

export default App;