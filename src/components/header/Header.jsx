import React, { Component } from 'react';
import './Header.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>  <Navbar bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">Hiras</Navbar.Brand> */}
      <Nav className="mr-auto ml-auto">
        <Nav.Link href="#home" className="custom"><FontAwesomeIcon icon="home"/> <span>Home</span> </Nav.Link>
        <Nav.Link href="#features" className="custom"><FontAwesomeIcon icon="newspaper"/> <span>blog</span></Nav.Link>
        <Nav.Link href="#pricing" className="custom"><FontAwesomeIcon icon="camera-retro"/> <span>gallery</span></Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
    </div>
    );
  }
}

export default Header;