import React, { useState, createContext, useEffect } from "react";

import PropTypes from "prop-types";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [userIsLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("userLoggedIn"))
  );

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userLoggedIn");
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
    if (userLoggedIn) {
      loginHandler();
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
