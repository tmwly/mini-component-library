import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  height:43px;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  border:none;
  font-size: 16px;
  color:${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  width:min-content;
`

export default Select;
