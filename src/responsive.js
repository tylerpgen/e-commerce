import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (device-width: 390px) and (device-height: 844px) {
      ${props}
    }
  `;
};

export const largeMobile = (props) => {
  return css`
    @media only screen and (device-width: 428px) and (device-height: 926px) {
      ${props}
    }
  `;
};
