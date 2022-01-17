import React from 'react';
import styled from 'styled-components';

import { PAGE_LAYOUT_MARGINS, PAGE_LAYOUT_MARGINS_MOBILE, MOBILE_SIZE } from "../../config"

const Block_layout = ({ children }) => {

  return (
    <Wrap>
      {children}
    </Wrap>
  )
};

const Wrap = styled.div`
  margin: ${PAGE_LAYOUT_MARGINS}px;

  @media (max-width: ${MOBILE_SIZE}px) {
    margin: ${PAGE_LAYOUT_MARGINS_MOBILE}px;
  }
`;

export default Block_layout;