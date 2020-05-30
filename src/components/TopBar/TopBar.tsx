import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { RED } from '../../styles/color';

const style = css`
  background-color: ${RED};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: RobotoMonoForPowerline-Regular;
  font-size: 18px;
`;

const TopBar = () => {
  return <div className={style}>CNRS de Rousset - Station de primatologie</div>;
};

export default TopBar;
