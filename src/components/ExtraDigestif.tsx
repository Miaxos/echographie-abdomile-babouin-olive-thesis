import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
// @ts-ignore
import extradigestif from '../assets/extra_digestif.png';

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

const ExtraDigestifImage = () => {
  return (
    <div className={style}>
      <img
        src={extradigestif}
        alt="extra_digestif babouin olive"
        className={styleImage}
      />
    </div>
  );
};

export default ExtraDigestifImage;
