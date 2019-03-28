import React from 'react';

type Props = {
  children: string;
};

function Text({ children }: Props) {
  return <p>{children}</p>;
}

export default Text;
