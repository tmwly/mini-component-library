/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const wrapperStyles = {
  small: {
    "--borderRadius": "4px",
    "--wrapperHeight": "8px",
    "--padding": "0px",
  },
  medium: {
    "--borderRadius": "4px",
    "--wrapperHeight": "12px",
    "--padding": "0px",
  },
  large: {
    "--borderRadius": "8px",
    "--wrapperHeight": "24px",
    "--padding": "4px",
  },
};

const innerBarStyles = {
  small: {"--innerHeight": "8px" },
  medium: {"--innerHeight": "12px" },
  large: {"--innerHeight": "16px" },
};

const ProgressBar = ({ value, size }) => {
  const wrapperStyle = wrapperStyles[size];
  const innerBarStyle = innerBarStyles[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={wrapperStyle}
    >
      <InnerBar style={innerBarStyle} value={value}>
        <VisuallyHidden>{value}</VisuallyHidden>
      </InnerBar>
    </Wrapper>
  );
};

const InnerBar = styled.div`
  height: var(--innerHeight);
  border-radius: 4px;
  background: linear-gradient(to right, ${COLORS.primary} ${p => p.value}%, transparent ${p => p.value}%);
`;

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  height: var(--wrapperHeight);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`;

export default ProgressBar;
