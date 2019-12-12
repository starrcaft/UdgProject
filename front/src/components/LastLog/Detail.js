import React, {Component} from 'react';

class Detail extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.user}</td>
                <td>{this.props.IP}</td>
                <td>{this.props.protocol}</td>
                <td>{this.props.date}</td>
            </tr>
        )
    }
}

export default Detail;
