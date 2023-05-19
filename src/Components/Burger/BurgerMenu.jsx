import React from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";

import { Logo, Accordion } from "src/Components";

import THEME from "src/theme";
import Social from "./Social";
import LINKS from "./burgerData";

const BurgerMenu = ({ showMenu, setShowMenu }) => {
  return (
    <BurgerMenuWrapper isShow={showMenu}>
      <BurgerHeader>
        <Logo light onClick={() => setShowMenu(false)} />
        <FiX size={24} onClick={() => setShowMenu(false)} />
      </BurgerHeader>
      <BurgerContent>
        <Accordion data={LINKS} setShowMenu={setShowMenu} />
      </BurgerContent>
      <BurgerFooter>
        <p style={{ ...THEME.FONTS.H[6] }}>Follow Us</p>
        <BurgerContacts>
          <Social />
        </BurgerContacts>
      </BurgerFooter>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;

const BurgerMenuWrapper = styled.div`
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s ease;
  transform: translate(${(p) => (p.isShow ? "0" : "100%")}, 0);

  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: ${THEME.COLORS.primary};
  color: ${THEME.COLORS.white};
`;

const BurgerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BurgerContent = styled.div`
  flex: 1;
`;
const BurgerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BurgerContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
