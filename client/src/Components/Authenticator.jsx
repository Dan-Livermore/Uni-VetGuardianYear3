import { createContext, useState } from "react";

const Authenticator = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <Authenticator.Provider value={{ auth, setAuth}}>
            {children}
        </Authenticator.Provider>
    )
}

export default Authenticator