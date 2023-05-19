import React from "react";

import { FiMenu } from "react-icons/fi";
import THEME from "src/theme";
import styled from "styled-components";

import BurgerMenu from "./BurgerMenu";

const Burger = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  return (
    <Flex>
      <FiMenu
        size={24}
        color={THEME.COLORS.primary}
        onClick={() => setShowMenu(true)}
      />
      <BurgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </Flex>
  );
};

export default Burger;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
