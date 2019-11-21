import React, {Component} from 'react';

class TableContent extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.ip}</td>
                <td>{this.props.time}</td>
                <td>{this.props.cmd}</td>
            </tr>
        )
    }
}

export default TableContent;
