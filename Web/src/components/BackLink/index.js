import React from 'react';
import { Link } from './styles';

export default function BackLink({ children, ...props}) {
  return (
    <Link {...props}>{ children }</Link>
  );
}
