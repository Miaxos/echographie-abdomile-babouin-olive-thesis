import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';

const SWS = css`
  width: 5px;
`;

const SHS = css`
  height: 5px;
`;

const SWM = css`
  width: 10px;
`;

const SHM = css`
  height: 10px;
`;

const WS = React.memo(() => <div className={SWS} />);
const HS = React.memo(() => <div className={SHS} />);
const WM = React.memo(() => <div className={SWM} />);
const HM = React.memo(() => <div className={SHM} />);

export const Spacing = {
  Width: {
    S: WS,
    M: WM,
  },
  Height: {
    S: HS,
    M: HM,
  },
};
