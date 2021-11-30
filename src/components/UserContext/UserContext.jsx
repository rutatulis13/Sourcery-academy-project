import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

const UserProvider = (props) => {
  const [userData, setUserData] = useState({});
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
        setUserData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading && (
        <UserContext.Provider value={{ userData, setUserData, loading }}>
          {props.children}
        </UserContext.Provider>
      )}
    </>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { UserProvider, UserContext };
