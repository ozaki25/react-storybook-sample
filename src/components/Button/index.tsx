import React from 'react';
import { css } from 'emotion';

const style = css`
  background-color: teal;
  border: 1px solid teal;
  /* border-radius: 6px; */
  color: white;
  padding: 4px 8px;
  &:focus {
    opacity: 0.6;
  }
`;

type Props = {
  children: string;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
