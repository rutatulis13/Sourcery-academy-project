import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router";

const UserContext = createContext();

const UserProvider = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [contextData, setContextData] = useState({
    userData,
    setUserData,
    loading,
  });

  useEffect(() => {
    setLoading(true);
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/userData.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data.userData[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setContextData({
      userData,
      setUserData,
      loading,
    });
  }, [userData, loading]);

  return (
    <UserContext.Provider value={contextData}>
      <Outlet />
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
