import React from "react";
import AccordionItem from "./AccordionItem";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Accordion = ({ data, setShowMenu }) => {
  const [active, setActive] = React.useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <AccordionWrapper>
      <article>
        {data.map((item, index) =>
          !item.childrens ? (
            <Link to={item.to} key={index}>
              <AccordionItem
                active={active}
                handleToggle={handleToggle}
                item={item}
                setShowMenu={setShowMenu}
              />
            </Link>
          ) : (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              item={item}
            />
          )
        )}
      </article>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div``;
