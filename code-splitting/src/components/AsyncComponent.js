import React, { useEffect, useState } from "react";

export default function asyncComponent(importComponent) {
  const AsyncComponent = (props) => {
    const [state, setState] = useState({
      component: null,
    });

    useEffect(() => {
      const load = async () => {
        const { default: component } = await importComponent();
        setState({ component });
      };

      load();
    }, []);

    const Component = state.component;

    return Component ? <Component {...props} /> : null;
  };

  return AsyncComponent;
}
