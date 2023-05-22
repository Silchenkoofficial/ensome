import React from "react";
import styled from "styled-components";

import THEME from "src/theme";

const TabItem = (props) => {
  const { data } = props;
  return <TabItemWrapper>{data}</TabItemWrapper>;
};

export default TabItem;

const TabItemWrapper = styled.p``;
