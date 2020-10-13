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
        <div className="footer-copyright text-right py-3 bg-dark mb-0" >
        <Container fluid style={{color: "white"}}>
          &copy; <span>Mohammed Hiras</span>
        </Container>
      </div>
    );
  }
}

export default Footer;