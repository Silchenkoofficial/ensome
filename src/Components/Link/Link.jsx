import React from "react";
import styled from "styled-components";

import { Link as LinkRouter } from "react-router-dom";

import THEME from "src/theme";

const Link = (props) => {
  const { children, to } = props;
  return (
    <LinkWrapper {...props}>
      <LinkRouter to={to}>
        <LinkText>{children}</LinkText>
      </LinkRouter>
    </LinkWrapper>
  );
};

export default Link;

const LinkWrapper = styled.div`
  color: ${(p) => (p.disabled ? THEME.COLORS.grey : THEME.COLORS.primary)};
  pointer-events: ${(p) => (p.disabled ? "none" : "auto")};
`;

const LinkText = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  transition: 0.3s ease;

  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${THEME.COLORS.secondary};
  }
`;
