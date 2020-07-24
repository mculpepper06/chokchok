import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phoneNum: '',
      email: '',
      agree: false,
      contactType: 'By Phone',
      feedback: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Current state is: ' + JSON.stringify(this.state));
    alert('Current state is: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div id="portfolio" className="container-fluid text-center">
          <h2>About ChokChok</h2>
          <p>Matching you for every occasion</p>
          <div className="row text-center slideanim">
            <div className="col-sm-3">
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="Paris"
                  width="400"
                  height="300"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img
                  src="https://images.pexels.com/photos/3751769/pexels-photo-3751769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="New York"
                  width="400"
                  height="300"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1595120028053-1fe6d710ed35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
                  alt="San Francisco"
                  width="400"
                  height="300"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1530063139375-c15a976b3a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="San Francisco"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
          <div className="row row-content">
            <div className="col-12">
              <h2>Have a Question?</h2>
              <hr />
            </div>
            <div className="col-md-10">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="firstName" md={2}>First Name</Label>
                  <Col md={10}>
                    <Input type="text" id="firstName" name="firstName"
                      placeholder="First Name"
                      value={this.state.firstName}
                      onChange={this.handleInputChange} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastName" md={2}>Last Name</Label>
                  <Col md={10}>
                    <Input type="text" id="lastName" name="lastName"
                      placeholder="Last Name"
                      value={this.state.lastName}
                      onChange={this.handleInputChange} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Input type="email" id="email" name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleInputChange} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                  <Col md={10}>
                    <Input type="textarea" id="feedback" name="feedback"
                      rows="12"
                      value={this.state.feedback}
                      onChange={this.handleInputChange}></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}



export default About;