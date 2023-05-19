import React from "react";
import styled from "styled-components";

import LogoIMG from "src/assets/img/Logo.png";
import LogoLightIMG from "src/assets/img/Logo-light.png";
import { Link } from "react-router-dom";

import { Context } from "src/App";

const Logo = ({ light = false, onClick }) => {
  const { state, setState } = React.useContext(Context);

  return (
    <Link
      to="/"
      onClick={() => {
        setState((prev) => {
          return {
            ...prev,
            menu: {
              activeMenu: "Home",
            },
          };
        });
        onClick();
      }}
    >
      <LogoWrapper>
        {light ? (
          <img src={LogoLightIMG} alt="Logo" />
        ) : (
          <img src={LogoIMG} alt="Logo" />
        )}
      </LogoWrapper>
    </Link>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  min-width: 140px;
  max-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    object-fit: contain;
  }
`;
