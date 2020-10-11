import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'linaria';
import { Spacing } from './Spacing';

const separator = css`
  flex: 1;
`;

const nextLinkContainer = css`
  display: flex;
  flex: 1;
`;

type Props = {
  prev?: React.ReactNode;
  next?: React.ReactNode;
};

const NextPrevLinks = ({ prev, next }: Props) => {
  return (
    <>
      <Spacing.Height.M />
      <div className={nextLinkContainer}>
        {prev && prev}
        <div className={separator} />
        {next && next}
      </div>
    </>
  );
};

export default NextPrevLinks;
