import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Button } from 'reakit/Button';
import { LIGHT_RED } from '../../styles/color';

type Props = {
  title: string;
  subtitle?: string;
  image: any;
};

const badgeContainer = css`
  display: flex;
  max-width: 500px;
  padding: 5px;
  margin-left: 20px;
`;

const badgeDescription = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 35px;
`;
const badgeTitle = css`
  margin-bottom: 4px;
`;
const badgeSubTitle = css`
  maring-top: 4px;
`;

const resetButton = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
`;

const styleImage = css`
  border: 2px solid #75052d;
  border-radius: 5px;
  width: 65px;
  height: 65px;
  &:hover {
    background-color: ${LIGHT_RED};
    cursor: pointer;
  }
`;

const HomeBadge = ({ title, subtitle, image }: Props) => {
  return (
    <div className={badgeContainer}>
      <Button className={resetButton}>
        <img src={image} alt="badge-alt" className={styleImage} />
      </Button>
      <div className={badgeDescription}>
        <div className={badgeTitle}>
          <b>{title}</b>
        </div>
        {subtitle && <div className={badgeSubTitle}>{subtitle}</div>}
      </div>
    </div>
  );
};

export default HomeBadge;
