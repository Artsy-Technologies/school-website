import { createContext, useState } from "react";
import PropTypes from "prop-types";
const AuthContext = createContext({});

export const Authprovider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

Authprovider.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;