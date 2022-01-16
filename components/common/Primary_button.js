import React from 'react';
import styled from 'styled-components';

const Primary_button = ({title}) => {

  return (
    <Wrap>
      {title}
    </Wrap>
  )
}

const Wrap = styled.div`
  align-items: center;
  border-image: linear-gradient(45deg, rgba(255, 230, 0, 1), rgba(250, 166, 3, 0.8), rgba(255, 107, 0, 0.69)) 1;
  border-style: solid;
  border-width: 2px;
  color: white;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;  
  width: 100%;
`;

export default Primary_button;