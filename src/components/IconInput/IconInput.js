import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": `${styles.iconSize}px` }}>
        <Icon id={icon} size={styles.iconSize}></Icon>
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--width": `${width}px`,
          "--height": `${styles.height}px`,
          "--borderThickness": `${styles.borderThickness}px`,
          "--fontSize": `${styles.fontSize}px`,
        }}
      />
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const Wrapper = styled.label`
  display: block;
  color: ${COLORS.gray700};
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: solid var(--borderThickness) ${COLORS.black};
  padding-left: var(--height);
  outline-offset: 2px;
  font-weight: 700;
  color: inherit;
  font-size: var(--fontSize);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
