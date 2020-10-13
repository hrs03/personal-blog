import React, { Component } from "react";
import "./Portofolio.css";
import { Container, Row, Button, Image, Card } from "react-bootstrap";
import GithubProfile from '../../components/Github-profile/Github-profile'

class Portofolio extends Component {
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
        <Container fluid className="bg-dark">
          <div>
            <Image
              style={{ width: "98%" }}
              src={require("../../assets/images/banner.jpg")}
            />
          </div>
          <br/>

          <Card className="mx-auto bg-secondary text-white" style={{ width: "98%" }}>
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
          </Card>
        
        </Container>
        <GithubProfile />
        
      </div>
    );
  }
}

export default Portofolio;
