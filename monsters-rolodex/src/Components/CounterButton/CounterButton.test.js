import React from "react";

import { shallow } from "enzyme";
import CounterButton from "./CounterButton";
import CounterButtonHooks from "./CounterButtonHooks";

describe("CounterButton", () => {
  const mockColor = "black";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  const hooksWrapper = shallow(<CounterButtonHooks color={mockColor} />);

  it("Expect to render CounterButton component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Expect to render CounterButton Hooks Component", () => {
    expect(hooksWrapper).toMatchSnapshot();
  });

  it("Correctly increments the counter", () => {
    // simulates click event on the Id selected element
    wrapper.find("[id='counter']").simulate("click");
    hooksWrapper.find("[id='counter']").simulate("click");

    // grabs the state and compares
    expect(wrapper.state()).toEqual({ count: 1 });
    // expect(hooksWrapper.state("count")).toEqual({ count: 1 });

    expect(wrapper.props().color).toEqual("black");
  });
});
