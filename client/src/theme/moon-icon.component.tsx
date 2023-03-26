import React, { FC, ReactElement } from 'react';

interface Props {
  className?: string;
}

export const MoonIcon: FC<Props> = ({ className }): ReactElement => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <title>Moon</title>
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);
