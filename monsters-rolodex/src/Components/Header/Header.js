import React, { memo } from "react";
import CounterButton from "../CounterButton/CounterButton";

// In most cases, instead of writing shouldComponentUpdate()
// by hand, you can inherit from React.PureComponent. It is
// equivalent to implementing shouldComponentUpdate() with a
// shallow comparison of current and previous props and state.

const Header = () => {
  return (
    <div>
      <h1 className="f1">RoboFriends</h1>
      <CounterButton />
    </div>
  );
};

export default memo(Header);
