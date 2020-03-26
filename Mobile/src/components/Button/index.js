import React from 'react';

import { SimpleButtonElemet, ButtonElement, Text } from './styles';

export function SimpleButton({ children,  ...props }) {
  return (
    <SimpleButtonElemet { ...props }>
      {children}
    </SimpleButtonElemet>
  );
}

export function Button({ children,  ...props }) {
  return (
    <ButtonElement { ...props }>
      {children}
    </ButtonElement>
  );
}


export function ButtonText({ children, ...props }){
  return (
    <Text { ...props }>{children}</Text>
  );
}