import React, { Component } from 'react';
import './Footer';
import {Container} from 'react-bootstrap';

class Footer extends Component {
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
        <div className="footer-copyright text-center py-3 bg-dark">
        <Container fluid style={{color: "white"}}>
          &copy; {new Date().getFullYear()} Copyright: <span>Mohammed Hiras</span>
        </Container>
      </div>
    );
  }
}

export default Footer;