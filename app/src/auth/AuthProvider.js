import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [dates, setDates] = useState([null, null]);


    const stored = localStorage.getItem("usuario");
    const storedParsed = JSON.parse(stored);

    useEffect(() => {
        if (localStorage.getItem("usuario")) {
            setUser(storedParsed);
        }
    }, [])

    const login = (userLogin) => {
        setUser(userLogin)
    };

    const isLogged = () => !!localStorage.getItem("jwt");
    const hasRole = (role) => {
        if (role) {
            return storedParsed?.role == role;
        }
    };
    const logout = () => {
        setUser(null);
        setDates([null, null])
    };

    const handleSelectedDates = (arrayDates) => {
        return setDates([...arrayDates]);
    };

    const contextValue = {
        user,
        login,
        isLogged,
        hasRole,
        logout,
        dates,
        handleSelectedDates
    };

    return (
        <>
            <AuthContext.Provider value={contextValue} >
                {children}
            </AuthContext.Provider>
        </>
    )
}