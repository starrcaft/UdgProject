import React, {Component} from 'react';
import {Table, Card} from "react-bootstrap";
import TableContent from './TableContent';

const tableContent =  [
    {
        id: 0,
        ip: "192.168.188.129",
        time: "2019-11-19 01:39:30",
        cmd: "rm detail.log",
    },
    {
        id: 1,
        ip: "192.168.188.88",
        time: "2019-11-19 01:39:30",
        cmd: "rm detail.log",
    },
];

class SU extends Component {

    render() {
        return (
            <div className="LogPage">
                <h3 className="text-left">SU 명령어</h3>
                <Card bg="light" className="my-4">
                    <Card.Header>세부사항</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Table striped bordered hover>
                    <thead>
                        <th>#</th>
                        <th>IP</th>
                        <th>Time</th>
                        <th>Command</th>
                    </thead>
                    <tbody>
                        {tableContent.map(t => {
                            return <TableContent id={t.id} ip={t.ip} time={t.time} cmd={t.cmd}/>
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SU;