import React from "react";

import { FiChevronDown } from "react-icons/fi";

import THEME from "src/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AccordionItem = (props) => {
  const contentEl = React.useRef(null);

  const { handleToggle, active, item, setShowMenu } = props;
  const { title, id, childrens } = item;

  return (
    <React.Fragment>
      <AccordionItemWrapper
        active={active === id}
        onClick={() => {
          if (childrens) handleToggle(id);
          setShowMenu(false);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <h2 style={{ ...THEME.FONTS.H[6] }}>{title}</h2>
          {childrens && (
            <span>
              <FiChevronDown />
            </span>
          )}
        </div>
        <Collapse ref={contentEl} show={active}>
          <CollapseContent>
            {childrens &&
              childrens.map((el) => (
                <Link
                  key={el.title}
                  to={el.to}
                  onClick={() => setShowMenu(false)}
                >
                  {el.title}
                </Link>
              ))}
          </CollapseContent>
        </Collapse>
      </AccordionItemWrapper>
    </React.Fragment>
  );
};

export default AccordionItem;

const AccordionItemWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid ${THEME.COLORS.blue3};
  span {
    transform-origin: center;
    rotate: ${(p) => (p.active ? "180deg" : "0")};
  }
`;

const Collapse = styled.div`
  position: relative;
  height: ${(p) => (p.show ? "auto" : "0")};
  overflow: hidden;
  transition: 0.5s ease;
`;

const CollapseContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;
