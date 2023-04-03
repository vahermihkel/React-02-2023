import React, { createContext, useState } from 'react';

// Create a new context
export const AuthContext = createContext();

// Create a provider for the context
export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(determineIfLoggedIn());

  function determineIfLoggedIn() {
    if (sessionStorage.getItem("token") !== null) {
      return true;
    } else {
      return false;
    }
  }

  // Provide the state and updater function to the context
  const contextValue = {
    loggedIn,
    setLoggedIn,
  };
return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};