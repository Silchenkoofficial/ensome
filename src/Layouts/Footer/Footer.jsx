import React from "react";
import styled from "styled-components";

import THEME from "src/theme";

import { Container } from "src/Layouts";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>Footer</Container>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  padding: 50px 0 40px;
  background-color: ${THEME.COLORS.background};
`;
