import React, { useEffect, ReactNode } from "react";

import "../../../src/App.css";

import Header from "../Header/Header";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundry";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import CardList from "../CardList/CardList";

const MainPage = ({
  robots,
  searchField,
  isPending,
  onRequestRobots,
  onSearchChange,
}: {
  robots: any;
  searchField: any;
  isPending: any;
  onRequestRobots: any;
  onSearchChange: any;
  children?: ReactNode;
}) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filterRobots = () => {
    return robots.filter((robot: any) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  return (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={(e) => onSearchChange(e)} />
      <Scroll>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundary>
            <CardList robots={filterRobots()} />
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
};

export default MainPage;
