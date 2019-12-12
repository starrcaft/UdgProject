import React, {Component} from 'react';
import {XYPlot, VerticalBarSeries, XAxis, YAxis} from "react-vis";
import {Table} from "react-bootstrap";
import Detail from "./Detail";

class LogPage extends Component {
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
        const res = await fetch('http://127.0.0.1:8000/api/')
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
                <h3 className="text-left">LastLog Page</h3>
                <h5 className="text-center">세부사항</h5>
                <Table bordered hover>
                    <thead>
                      <th>User</th>
                      <th>IP</th>
                      <th>Protocol</th>
                      <th>Time</th>
                    </thead>
                    <tbody>
                    {this.state.details.map(item => {
                        return <Detail user={item.user} ip={item.IP} protocol={item.protocol} date={item.date}/> // 테이블 열 추가될 경우, 여기에 props 추가 필요. 행은 자동 추가.
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default LogPage;
