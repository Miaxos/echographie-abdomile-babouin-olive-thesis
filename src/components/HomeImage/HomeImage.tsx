import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
// @ts-ignore
import home from './home.png';

const style = css`
  flex: 1;
  max-width: 500px;
  padding: 5px;
  margin-left: 20px;
`;

const styleImage = css`
  width: 100%;
`;

const HomeImage = () => {
  return (
    <div className={style}>
      <img src={home} alt="babouin olive" className={styleImage} />
    </div>
  );
};

export default HomeImage;
