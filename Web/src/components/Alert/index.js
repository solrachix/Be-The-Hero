import React from 'react';
import ButterToast, { Cinnamon } from 'butter-toast';

const Alert = ({ type = 'error', ...props }) => {
  const scheme = 
    type == 'success' ? Cinnamon.Crisp.SCHEME_BLUE
    : type == 'error' ? Cinnamon.Crisp.SCHEME_RED
      : type == 'warn' ? Cinnamon.Crisp.SCHEME_ORAGE 
        : null ;
  ButterToast.raise({
    content: (
      <Cinnamon.Crisp scheme={scheme}
        content={() => <div>You can put basically anything here.</div>}
        // title="ButterToast example"
        { ...props }
      />
      )
  });
};

export default Alert;