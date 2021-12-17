import React, { useState, createContext, useEffect } from "react";

import PropTypes from "prop-types";

const AuthContext = createContext({
  isLoggedIn: false,
});

const AuthContextProvider = ({ children }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("userLoggedIn"))
  );

  const handleLogin = () => {
    localStorage.setItem("userLoggedIn", JSON.stringify(true));
    setUserIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    setUserIsLoggedIn(false);
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
    if (userLoggedIn) {
      setUserIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContextProvider, AuthContext };
