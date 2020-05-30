import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import HomePrez from '../components/HomePrez/HomePrez';
import HomeImage from '../components/HomeImage/HomeImage';
import HomeSeparator from '../components/HomeSeparator/HomeSeparator';

const style = css`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px;
  padding-top: 60px;
`;
const content = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
`;

const Home = () => {
  return (
    <div className={style}>
      <div className={content}>
        <HomePrez />
        <HomeImage />
        <HomeSeparator />
      </div>
    </div>
  );
};

export default Home;
