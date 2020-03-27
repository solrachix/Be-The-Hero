import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { FiSun } from 'react-icons/fi';

import Light from '../../styles/themes/Light';
import Dark from '../../styles/themes/Dark';

export default function SetTheme({setTheme}) {
  const themeContext = useContext(ThemeContext);

  function handleSetTheme(){
    // console.log('==>', themeContext.title);
    
    setTheme(themeContext.title == 'Light' ? Dark : Light);
  }
  return (
      <Sun size={30} color={themeContext.colors.primary} onClick={handleSetTheme} />
  );
}

const Sun = styled(FiSun)`
  position: fixed;
  margin: 20px 20px;
  cursor: pointer;
  
  z-index: 15;
  &:hover{
    filter: brightness(0.8)
  }
`;