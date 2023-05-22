import React from "react";
import styled from "styled-components";

import THEME from "src/theme";

const Switch = (props) => {
  const { data, small } = props;
  const [switchState, setSwitchState] = React.useState(data[0]);

  const switchHandler = () =>
    setSwitchState((p) => (p === data[0] ? data[1] : data[0]));

  return (
    <div style={{ display: "block" }}>
      <SwitchWrapper onClick={switchHandler} {...props}>
        <SwitchElement switchState={switchState} value={data[0]}>
          <p style={{ ...THEME.FONTS.H[7] }}>{data[0]}</p>
        </SwitchElement>
        <SwitchElement switchState={switchState} value={data[1]}>
          <p style={{ ...THEME.FONTS.H[7] }}>{data[1]}</p>
        </SwitchElement>
        <SwitchPanel switchState={switchState} {...props} />
      </SwitchWrapper>
      <p>{switchState}</p>
    </div>
  );
};

export default Switch;

const SwitchWrapper = styled.div`
  position: relative;
  background-color: ${THEME.COLORS.tertiary};
  display: inline-flex;
  width: ${(p) => (p.small ? "188px" : "250px")};
  height: ${(p) => (p.small ? "38px" : "46px")};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`;

const SwitchElement = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  color: ${(p) => (p.switchState === p.value ? "#ffffff" : "#000000")};
`;
const SwitchPanel = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  transform: translate(
    ${(p) => (p.switchState === p.data[1] ? "100%" : "0")},
    0
  );
  transition: 0.3s ease;

  background-color: ${THEME.COLORS.primary};
`;
