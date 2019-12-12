import React, {Component} from 'react';
import {XYPlot, VerticalBarSeries, XAxis, YAxis} from "react-vis";
import {Table} from "react-bootstrap";
import Detail from "./Detail";

const data = [ // 이건 그래프 데이터. 이런식으로 {x: , y: } 로 채워진 array 형식이어야 그래프로 나와.
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
];

const details = [
    // 이게 표 내용 배
    // /만약 "Column(열)"이 하나 더 생겨야할 경우, 말해줘.
    // 우선적으로 이렇게 id, ip, port, protocol, time으로 해뒀는데 예를 들어 ip가 src_ip / destination_ip 로 나눠서 하나가 더 생길 경우
    // 밑에 thead 하위 th 를 하나 더 추가해야하고,
    // Details 컴포넌트에 넘겨주는 props도 추가되어야해.
    // Detail 컴포넌트 내부에서도 열을 하나 더 추가해야하
    {
        id: 0,
        ip: "192.168.188.129",
        port: "22",
        protocol: "IPv4",
        time: "2019-11-19 01:39:30",
    },
    {
        id: 1,
        ip: "192.168.188.88",
        port: "22",
        protocol: "IPv4",
        time: "2019-11-19 01:39:30",
    },
];

class LogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // chartData: this.props.chartData,
            // details: this.props.tableDetail,
            details : this.props.tableDetail,
        };
    };

    render() {
        return (
            <div className="LogPage">
                <h3 className="text-left">Log Page</h3>
                <h5 className="text-center">세부사항</h5>
                <Table bordered hover>
                    <thead>
                    <th>#</th>
                    <th>User</th>
                    <th>IP</th>
                    <th>Protocol</th>
                    <th>Time</th>
                    </thead>
                    <tbody>
                    {details.map(d => {
                        return <Detail id={d.id} user={d.user} IP={d.IP} protocol={d.protocol} date={d.date}/> // 테이블 열 추가될 경우, 여기에 props 추가 필요. 행은 자동 추가.
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default LogPage;
