import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;

describe("MainPage", () => {
  beforeEach(() => {
    const mockProps = {
      filterRobots: jest.fn(),
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: "Chris D'Elia",
          username: "noDents",
          email: "daddy@congratulations.com",
        },
      ],
      searchField: "",
      isPending: false,
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it("expect to render MainPage component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("filters robots correctly", () => {
    const mockProps2 = {
      filterRobots: jest.fn(),
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: "Chris D'Elia",
          username: "noDents",
          email: "daddy@congratulations.com",
        },
        {
          id: 2,
          name: "Noel Miller",
          username: "Uncle NOel",
          email: "letmehollaatya@noel.com",
        },
      ],
      searchField: "noel",
      isPending: false,
    };

    const mockProps3 = {
      filterRobots: jest.fn(),
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: "Chris D'Elia",
          username: "noDents",
          email: "daddy@congratulations.com",
        },
        {
          id: 2,
          name: "Noel Miller",
          username: "Uncle NOel",
          email: "letmehollaatya@noel.com",
        },
      ],
      searchField: "chris",
      isPending: false,
    };

    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper2.instance().filterRobots()).toEqual([
      {
        id: 2,
        name: "Noel Miller",
        username: "Uncle NOel",
        email: "letmehollaatya@noel.com",
      },
    ]);
    expect(wrapper3.instance().filterRobots()).toEqual([
      {
        id: 1,
        name: "Chris D'Elia",
        username: "noDents",
        email: "daddy@congratulations.com",
      },
    ]);
  });
});
