import React from "react";
import styled from "styled-components";
import THEME from "src/theme";

import { Logo, Button, Burger } from "src/Components";
import { Navbar } from "src/Widgets";
import { FiPlayCircle } from "react-icons/fi";

import { Container } from "src/Layouts";

import { Context } from "src/App";

const Header = () => {
  const { state, setState } = React.useContext(Context);
  const headerEl = React.useRef(null);
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    setHeaderHeight(headerEl.current.clientHeight);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    setState((prev) => {
      return {
        ...prev,
        header: {
          height: headerHeight,
        },
      };
    });
  }, [headerHeight, windowWidth]);

  return (
    <HeaderWrapper ref={headerEl} {...state}>
      <Container>
        <HeaderContent>
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <Logo />
          </div>
          {windowWidth > 992 && <Navbar />}
          {windowWidth > 992 && (
            <Button small icon={<FiPlayCircle size={24} />}>
              Watch video
            </Button>
          )}
          {windowWidth <= 992 && <Burger />}
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  padding: ${(props) => (props.window.scrollTop >= 10 ? "8px 0" : "40px 0")};
  box-shadow: ${(props) =>
    props.window.scrollTop >= 10 ? THEME.SHADOWS.dropdown : "none"};
  background-color: ${THEME.COLORS.white};
  transition: 0.3s;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;
