import React, { Component } from 'react';

class TodoComp extends Component {
    onDelete = e => this.props.onDel(e,this.props.indx);
    onDone =e=>this.props.onDone(e,this.props.indx);
    render() {
        let{ item} = this.props;
        return (           
            // <li className={(item.done === true)?'lidone':''}>
            //     {(item.done === false)?<button onClick={this.onDone} className="btn green" >&#x2713;</button>:null}
            //     <button className="btn red" onClick={this.onDelete}>x</button> &nbsp;
            //     <span>{item.val}</span>                
            // </li>

            <li className={(item.done === true)?'lidone':''}>
                {(item.done === false)?<input type="button"  onClick={this.onDone} className="btn green" value="&#x2713;"/>:null}
                <input type="button" className="btn red" onClick={this.onDelete} value="x"/> &nbsp;
                <span>{item.val}</span>                
            </li>
        );
    };
}

export default TodoComp;