import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
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
      <div>  
        <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto ml-auto">
        <Nav.Link as={Link} className="custom" to='/'><FontAwesomeIcon icon="home"/> <span>Home</span> </Nav.Link>
        <Nav.Link as={Link} className="custom" to='/blog'><FontAwesomeIcon icon="newspaper"/> <span>blog</span></Nav.Link>
        <Nav.Link as={Link} className="custom" to='/gallery'><FontAwesomeIcon icon="camera-retro"/> <span>gallery</span></Nav.Link>
      </Nav>
    </Navbar>
    </div>
    );
  }
}

export default Header;