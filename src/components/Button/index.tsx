import React from 'react';
import { css } from 'emotion';

const style = css({
  backgroundColor: 'skyblue',
  border: '1px solid skyblue',
  borderRadius: '4px',
  color: 'white',
  padding: '4px 8px',
});

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
