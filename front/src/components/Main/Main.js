import React, {Component} from 'react';
import {Navbar, Nav, Card} from 'react-bootstrap';
import LogPage from "../LogPage/LogPage";
import SU from "../SU/SU";

class Main extends Component {
    state = {
        pageStatus: 0,
    };

    _goLogPage = () => {
        this.setState({
            pageStatus: 0,
        });
    };

    _goSU = () => {
        this.setState({
            pageStatus: 1,
        });
    };

    render(){
        const page = this.state.pageStatus;
        let currentPage;
        if (page === 0) currentPage = <LogPage/>;
        else currentPage = <SU/>;

        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand>Log Control Center</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={this._goLogPage}>Log Page</Nav.Link>
                            <Nav.Link onClick={this._goSU}>SU command</Nav.Link>
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
