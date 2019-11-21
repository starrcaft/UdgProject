import React, {Component} from 'react';
import {XYPlot, VerticalBarSeries, XAxis, YAxis} from "react-vis";
import {Table} from "react-bootstrap";
import Detail from "./Detail";

const data = [
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

const details =  [
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
    state = {

    };

    render() {
        return (
            <div className="LogPage">
                <h3 className="text-left">Log Page</h3>
                <XYPlot height={300} width={300} className="mx-auto my-4">
                    <VerticalBarSeries data={data}/>
                    <XAxis/>
                    <YAxis/>
                </XYPlot>
                <h5 className="text-center">세부사항</h5>
                <Table bordered hover>
                    <thead>
                        <th>#</th>
                        <th>IP</th>
                        <th>Port</th>
                        <th>Protocol</th>
                        <th>Time</th>
                    </thead>
                    <tbody>
                    {details.map(d => {
                        return <Detail id={d.id} ip={d.ip} port={d.port} protocol={d.protocol} time={d.time}/>
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default LogPage;