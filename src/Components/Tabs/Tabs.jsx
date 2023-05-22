import React from "react";
import styled from "styled-components";

import THEME from "src/theme";

const Tabs = (props) => {
  const { data } = props;

  const [activeTab, setActiveTab] = React.useState(data[0]);

  const tabsHandler = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabsWrapper>
      {data.map((item) => (
        <TabItem
          key={item}
          tab={item}
          activeTab={activeTab}
          onClick={() => tabsHandler(item)}
          {...props}
        >
          <p style={{ ...THEME.FONTS.H[7] }}>{item}</p>
        </TabItem>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const TabItem = styled.div`
  display: flex;
  padding: ${(p) => (p.small ? "7px 20px" : "11px 35px")};
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s ease;

  background-color: ${(p) =>
    p.activeTab === p.tab ? THEME.COLORS.primary : THEME.COLORS.tertiary};
  color: ${(p) =>
    p.activeTab === p.tab ? THEME.COLORS.white : THEME.COLORS.black};
`;
