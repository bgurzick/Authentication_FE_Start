import React from 'react'

const AppProvider = ({children}) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider