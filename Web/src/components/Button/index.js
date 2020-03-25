import React from 'react';

import { Button } from './styles';

export default function ButtonComponents({ children, ...props }) {
  return (
    <Button {...props}>{children}</Button>
  );
}
