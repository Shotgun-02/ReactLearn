import React, { PureComponent } from 'react';

class TodoComp extends PureComponent {
    state = {
        lstcls: ''
    };
    onRemove = e => this.props.onRem(this.props.indx);
    onDone = e => {
        let { lstcls } = this.state;
        lstcls = (lstcls === "") ? 'lidone' : '';
        this.setState({ lstcls });
    };
    render() {
        let { val } = this.props;
        let { lstcls } = this.state;
        return (
            <li className={lstcls}>
                <span>{val}</span><button className="btn" onClick={this.onRemove}>X</button><button onClick={this.onDone} className="btn" >{(lstcls === "") ? 'Done' : 'UnDone'}</button>
            </li>
        );
    };
}

export default TodoComp;