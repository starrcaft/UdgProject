import React, {Component} from 'react';

class Detail extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.ip}</td>
                <td>{this.props.port}</td>
                <td>{this.props.protocol}</td>
                <td>{this.props.time}</td>
            </tr>
        )
    }
}

export default Detail;
