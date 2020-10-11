import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';

const style = css`
  min-width: 500px;
  padding: 5px;
  padding-left: 0px;
  margin-bottom: 10px;
`;
const title = css`
  font-family: HelveticaNeue;
  font-size: 24px;
  color: #000000;
  text-align: left;
`;

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <div className={style}>
      <div className={title}>{children}</div>
    </div>
  );
};

export default Title;
