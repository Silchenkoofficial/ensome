import React from "react";

import styled from "styled-components";
import THEME from "src/theme";

const Button = (props) => {
  const { children, small, icon, onClick } = props;
  return (
    <ButtonWrapper {...props} onClick={onClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children && (
        <p style={small ? THEME.FONTS.H[7] : THEME.FONTS.H[6]}>{children}</p>
      )}
    </ButtonWrapper>
  );
};

export default Button;

// ===== STYLES ==================================================

const ButtonWrapper = styled.div`
  // ============== STATIC STYLES ==============
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ small }) => (small ? "10px 13px" : "15px 50px")};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;

  & > *:not(:first-child) {
    margin-left: 10px;
  }

  &:active {
    scale: 0.99;
  }

  // ============== DYNAMIC STYLES ==============
  width: ${({ fullScreen }) => (fullScreen ? "100%" : "fit-content")};
  background-color: ${({ disabled, outlined }) => {
    if (disabled) return THEME.COLORS.grey;
    if (outlined) return "transparent";
    return THEME.COLORS.primary;
  }};
  color: ${({ outlined }) => {
    if (outlined) return THEME.COLORS.primary;
    return THEME.COLORS.white;
  }};
  box-shadow: ${({ outlined }) => {
    if (outlined) return "none";
    return THEME.SHADOWS.button;
  }};
  border: ${({ outlined }) => {
    if (outlined) return `1px solid ${THEME.COLORS.primary}`;
    return "none";
  }};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    background-color: ${({ outlined }) => {
      if (outlined) return "transparent";
      return THEME.COLORS.primaryHover;
    }};
  }

  &:active {
    background-color: ${({ outlined }) => {
      if (outlined) return "transparent";
      return THEME.COLORS.primary;
    }};
    box-shadow: none;
    border: ${({ outlined }) => {
      if (outlined) return `1px solid ${THEME.COLORS.primaryHover}`;
      return "none";
    }};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
