import React from 'react';

import { Input } from './styles';

export default function InputComponents({ children, ...props }) {
  return (
    <Input {...props}>{children}</Input>
  );
}
