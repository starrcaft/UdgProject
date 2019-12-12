import React, {Component} from 'react';
import {Navbar, Nav, Card} from 'react-bootstrap';
import Fail2banLog from "../Fail2banLog/Fail2banLogPage";
import SU from "../SU/SU";
import LastLog from "../LastLog/LastLogPage"
import LastbLog from "../LastbLog/LastbLogPage"

class Main extends Component {
    state = {
        pageStatus: 0,
    };

    _goFail2banLog = () => {
        this.setState({
            pageStatus: 0,
        });
    };

    _goSU = () => {
        this.setState({
            pageStatus: 1,
        });
    };

    _goLastLog = () => {
        this.setState({
          pageStatus : 2,
        });
    };

    _goLastbLog = () => {
        this.setState({
          pageStatus : 3,
        });
    };

    render(){
        const page = this.state.pageStatus;
        let currentPage;
        if (page === 0) currentPage = <Fail2banLog/>;
        else if (page == 1) currentPage = <SU/>;
        else if (page == 2 ) currentPage = <LastLog/>;
        else currentPage = <LastbLog/>;

        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand>Log Control Center</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={this._goFail2banLog}>Fail2ban Log Page</Nav.Link>
                            <Nav.Link onClick={this._goSU}>SU command</Nav.Link>
                            <Nav.Link onClick={this._goLastLog}>Last</Nav.Link>
                            <Nav.Link onClick={this._goLastbLog}>Lastb</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Card className="col-10 my-2 mx-auto">
                    <Card.Body>
                        {currentPage}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Main;
