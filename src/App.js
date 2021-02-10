import React from "react";
import "./App.css";
import profilePhoto from "./assets/profile_photo.jpg";
import { Button, Card,  } from "react-bootstrap";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Mohamed Jlassi",
      bio:
        "After earning my Diploma in Industrial Computer from National School of Engeneers of Carthage, and after having tested more than one profession in different sectors, I chose to enter the web development world to explore my passion for code and testing.",
      imgSrc: profilePhoto,
      profession: "Junior Software Developer",
    },
    show: false,
    intervall: null,
    timer: 0,
  };

  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <Button variant="outline-info" onClick={this.handleShow} style={{margin:"10px"}}>
          Toggle
        </Button>
        {this.state.show && (
          <div>
            <Card style={{ width: "18rem" }} className="Card">
              <Card.Img variant="top" src={this.state.Person.imgSrc}/>
              <Card.Body>
                <Card.Title className="FullName">
                  {this.state.Person.fullName}
                </Card.Title>
                <Card.Text className="Bio">{this.state.Person.bio}</Card.Text>
                <span>timer: {this.state.timer}</span>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    );
  }
}
export default App;