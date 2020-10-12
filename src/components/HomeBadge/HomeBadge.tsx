import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Button } from 'reakit/Button';
import { Link, useHistory } from 'react-router-dom';
import { LIGHT_RED } from '../../styles/color';

type Props = {
  title: string;
  subtitle?: string;
  image: any;
  to: string;
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
  font-size: 15px;
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
  border: 2px solid #75052d;
  border-radius: 5px;
  &:hover {
    background-color: ${LIGHT_RED};
    cursor: pointer;
  }
  &:focus {
    background-color: ${LIGHT_RED};
    cursor: pointer;
  }
`;

const linkStyle = css`
  color: #75052d;
`;

const styleImage = css`
  width: 65px;
  height: 65px;
`;

const HomeBadge = ({ title, subtitle, image, to }: Props) => {
  const history = useHistory();
  return (
    <div className={badgeContainer}>
      <Button className={resetButton} onClick={() => history.push(to)}>
        <img src={image} alt="badge-alt" className={styleImage} />
      </Button>
      <div className={badgeDescription}>
        <div className={badgeTitle}>
          <Link to={to} className={linkStyle}>
            <b>{title}</b>
          </Link>
        </div>
        {subtitle && <div className={badgeSubTitle}>{subtitle}</div>}
      </div>
    </div>
  );
};

export default HomeBadge;
