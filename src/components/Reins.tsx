import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
// @ts-ignore
import reins from '../assets/reins.png';

const style = css`
  max-width: 495px;
  padding: 5px;
  margin-right: 5px;
`;

const styleImage = css`
  width: 100%;
  height: 100%;
`;

const ReinsImage = () => {
  return (
    <div className={style}>
      <img src={reins} alt="reins babouin olive" className={styleImage} />
    </div>
  );
};

export default ReinsImage;
