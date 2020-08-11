import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "./Redux/actions";

import MainPage from "./Components/MainPage/MainPage";

import "./App.css";

const mapStateToProps = (state) => {
  const { searchRobots, requestRobots } = state;
  return {
    searchField: searchRobots.searchField,
    robots: requestRobots.robots,
    isPending: requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
