import React from 'react';

type Props = {
  /** Size or pixel size */
  size: string;
  /** Thickness in pixel */
  thickness?: number;
  color?: string;
};

/**
 * Vertical Line Separator
 */
export const VerticalLineSeparator = React.memo(
  ({ size, thickness = 2, color = '#75052d' }: Props) => {
    return (
      <div
        style={{
          height: size,
          borderLeft: `${thickness}px solid ${color}`,
        }}
      />
    );
  },
);

/**
 * Vertical Line Separator
 */
export const HorizontalLineSeparator = React.memo(
  ({ size, thickness = 2, color = '#75052d' }: Props) => {
    return (
      <div
        style={{
          width: size,
          borderTop: `${thickness}px solid ${color}`,
        }}
      />
    );
  },
);
