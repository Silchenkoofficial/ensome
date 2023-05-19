import React from "react";
import { Context } from "src/App";

const Section = ({ children }) => {
  const { state } = React.useContext(Context);

  return (
    <section
      style={{
        marginTop: state.header.height,
      }}
    >
      {children}
    </section>
  );
};

export default Section;
