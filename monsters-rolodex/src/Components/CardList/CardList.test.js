import React from "react";

import { shallow } from "enzyme";
import CardList from "./CardList";

it("Expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Chris D'Elia",
      username: "noDents",
      email: "daddy@congratulations.com"
    }
  ];
  expect(shallow(<CardList monsters={mockRobots} />)).toMatchSnapshot();
});
