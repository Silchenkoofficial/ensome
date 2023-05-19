import React from "react";

import menuData from "./menuData";
import { Link } from "react-router-dom";
import { Context } from "src/App";
import styled from "styled-components";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import THEME from "src/theme";

const Navbar = () => {
  const { state, setState } = React.useContext(Context);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleNavbar = (el) => {
    setState((prev) => {
      return {
        ...prev,
        menu: {
          activeMenu: el.title,
        },
      };
    });
  };

  return (
    <Menu>
      {menuData.map((el) =>
        !el.dropdown ? (
          <Link
            key={el.title}
            to={el.to}
            onClick={() => handleNavbar(el)}
            style={{
              fontWeight: state.menu.activeMenu === el.title ? "700" : "400",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {el.title}
          </Link>
        ) : (
          <div
            key={el.title}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flex: 1,
              justifyContent: "center",
            }}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {el.title}
            <FiChevronDown
              style={{
                rotate: showDropdown ? "180deg" : "0deg",
                transition: "0.3s",
              }}
            />
            {showDropdown && (
              <DropdownWrapper>
                {el.dropdown.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    onClick={() => {
                      handleNavbar(item);
                      setShowDropdown(false);
                    }}
                    style={{
                      fontWeight:
                        state.menu.activeMenu === item.title ? "700" : "400",
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </DropdownWrapper>
            )}
          </div>
        )
      )}
    </Menu>
  );
};

export default Navbar;

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    transition: 0.3s;
  }
`;

const DropdownWrapper = styled.div`
  width: 190px;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background-color: white;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  & > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  box-shadow: ${THEME.SHADOWS.dropdown};
`;
