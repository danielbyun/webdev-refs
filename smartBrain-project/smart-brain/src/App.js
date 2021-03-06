import React, { Component } from "react";
import Particles from "react-particles-js";
import axios from "axios";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Profile from "./components/Profile/Profile";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const initialState = {
  input: "",
  imageUrl: "",
  boxes: [],
  route: "home",
  isProfileOpen: true,
  isSignedIn: true,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
    age: 0,
    pet: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map((region) => {
      const image = document.getElementById("inputimage");
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        id: region.id,
        leftCol: region.region_info.bounding_box.left_col * width,
        topRow: region.region_info.bounding_box.top_row * height,
        rightCol: width - region.region_info.bounding_box.right_col * width,
        bottomRow: height - region.region_info.bounding_box.bottom_row * height,
      };
    });
  };

  displayFaceBoxes = (boxes) => {
    this.setState({ boxes: boxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    axios({
      method: "post",
      url: "http://localhost:3000/imageurl",
      headers: { "Content-Type": "application/json" },
      data: {
        input: this.state.input,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        if (res) {
          axios({
            method: "put",
            url: "http://localhost:3000/image",
            headers: { "Content-Type": "application/json" },
            data: {
              id: this.state.user.id,
            },
          })
            .then((resp) => resp.data)
            .then((count) =>
              this.setState(Object.assign(this.state.user, { entries: count }))
            )
            .catch((err) => console.error(err));
        }
        this.displayFaceBoxes(this.calculateFaceLocations(res));
      });

    // fetch("http://localhost:3000/imageurl", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     input: this.state.input,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response) {
    //       fetch("http://localhost:3000/image", {
    //         method: "put",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //           id: this.state.user.id,
    //         }),
    //       })
    //         .then((response) => response.json())
    //         .then((count) => {
    //           this.setState(Object.assign(this.state.user, { entries: count }));
    //         })
    //         .catch(console.log);
    //     }
    //     this.displayFaceBoxes(this.calculateFaceLocations(response));
    //   })
    //   .catch((err) => console.error(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      return this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  toggleModal = () => {
    this.setState((state) => ({
      ...state,
      isProfileOpen: !state.isProfileOpen,
    }));
  };

  render() {
    const {
      isSignedIn,
      imageUrl,
      route,
      boxes,
      isProfileOpen,
      user,
    } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
          toggleModal={this.toggleModal}
        />
        {isProfileOpen && (
          <Modal>
            <Profile
              isProfileOpen={isProfileOpen}
              toggleModal={this.toggleModal}
              user={user}
              loadUser={this.loadUser}
            />
          </Modal>
        )}
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
