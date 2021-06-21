import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationSelect>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const PresentationSelect = styled.div`
  height: 43px;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;

  ${NativeSelect}:focus + & {
    outline: dotted 1px #212121;
    outline: auto 5px -webkit-focus-ring-color;
  } 

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  } 

`;
const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export default Select;
