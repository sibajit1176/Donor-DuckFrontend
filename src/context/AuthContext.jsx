import { createContext, useEffect, useState } from "react";
import { refreshToken, logoutUser } from "../services/auth.service";
import { isTokenExpired } from "../utils/helper";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        try {
            let token = localStorage.getItem("accessToken");

            if (!token || isTokenExpired(token)) {
                const result = await refreshToken();

                token = result.accessToken;

                localStorage.setItem("accessToken", token);
            }

            setIsLoggedIn(true);

        } catch (error) {

            localStorage.removeItem("accessToken");

            setIsLoggedIn(false);

            setUser(null);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = (accessToken, userData) => {
        localStorage.setItem("accessToken", accessToken);

        setUser(userData);

        setIsLoggedIn(true);

        setLoading(false);
    };
    
    const logout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error(error);
        }

        localStorage.removeItem("accessToken");

        setUser(null);

        setIsLoggedIn(false);

        setLoading(false);
    };

    return (
        <AuthContext.Provider
            value={{
                loading,
                isLoggedIn,
                user,
                login,
                logout,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

