import { css } from "styled-components";

export const mobile = (props) => {
  // Setting media breakpoints for mobile responsive props
  return css`
    @media only screen and (max-width: 390px) {
      ${props}
    }
  `;
};

export const largeMobile = (props) => {
  return css`
    @media only screen and (max-width: 428px) {
      ${props}
    }
  `;
};

export const smallMobile = (props) => {
  return css`
    @media only screen and (max-width: 376px) {
      ${props}
    }
  `;
};
