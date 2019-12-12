import React, {Component} from 'react';
import {Table, Card} from "react-bootstrap";
import TableContent from './TableContent';

class SU extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // chartData: this.props.chartData,
            // details: this.props.tableDetail,
            details : [],
        };
    };

    async componentDidMount(){
      try {
        const res = await fetch('http://127.0.0.1:8000/data/history')
        const details = await res.json();
        this.setState({
          details
        });
      } catch (e) {
        console.log(e);
      }
    }

    render() {
        return (
            <div className="LogPage">
                <h3 className="text-left">SU 명령어</h3>
                <Card bg="light" className="my-4">
                    <Card.Header>세부사항</Card.Header>
                </Card>
                <Table striped bordered hover>
                    <thead>
                        <th>Date</th>
                        <th>Command</th>
                    </thead>
                    <tbody>
                        {this.state.details.map(item => {
                            return <TableContent date={item.date} cmd={item.cmd}/>
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SU;
