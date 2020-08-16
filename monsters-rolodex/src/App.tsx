import React, { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "./Redux/actions";

import MainPage from "./Components/MainPage/MainPage";

import "./App.css";

export interface IRobots {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {
  children?: any;
}

interface IAppState {
  robots: Array<IRobots>;
  searchField: string;
}

const mapStateToProps = (state: any) => {
  const { searchRobots, requestRobots } = state;
  return {
    searchField: searchRobots.searchField,
    robots: requestRobots.robots,
    isPending: requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>): void => {
      dispatch(setSearchField(event.currentTarget.value));
    },
    onRequestRobots: (): void => dispatch(requestRobots()),
  };
};

class App extends Component<IAppProps, IAppState> {
  render(): JSX.Element {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
