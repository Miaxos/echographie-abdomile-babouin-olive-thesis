import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
// @ts-ignore
import digestif from '../assets/digestif.png';

const style = css`
  max-width: 455px;
  padding: 5px;
  margin-right: 5px;
`;

const styleImage = css`
  margin: 20px;
  width: 100%;
  height: 100%;
`;

const DigestifImage = () => {
  return (
    <div className={style}>
      <img src={digestif} alt="digestif babouin olive" className={styleImage} />
    </div>
  );
};

export default DigestifImage;
