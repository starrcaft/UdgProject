import React, {Component} from 'react';

class TableContent extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.cmd}</td>
            </tr>
        )
    }
}

export default TableContent;
