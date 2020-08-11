import React from "react";

import { shallow } from "enzyme";
import Card from "./Card";

it("Expect to render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Chris D'Elia",
      username: "noDents",
      email: "daddy@congratulations.com"
    }
  ];
  expect(shallow(<Card robot={mockRobots} />)).toMatchSnapshot();
});
