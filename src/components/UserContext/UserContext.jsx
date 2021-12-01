import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router";

const UserContext = createContext();

const UserProvider = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        setUserData(data.userData);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, loading }}>
      <Outlet />
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
