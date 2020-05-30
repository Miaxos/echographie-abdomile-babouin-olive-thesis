import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { RED } from '../../styles/color';

const separator = css`
  position: relative;
  width: 100%;
  border: 1px solid ${RED};
  margin-top: 100px;
`;

const contact = css`
  position: absolute;
  left: 47%;
  background-color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  top: -19px;
  color: ${RED};
`;

// TODO: Align it to the center properly.
const HomeSeparator = () => {
  return (
    <div className={separator}>
      <div className={contact}>Contact</div>
    </div>
  );
};

export default HomeSeparator;
