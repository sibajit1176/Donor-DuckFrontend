import { createContext, useEffect, useState } from "react";
import { refreshToken, logoutUser } from "../services/auth.service";
import { isTokenExpired } from "../utils/helper";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        try {
            let token = localStorage.getItem("accessToken");

            if (!token || isTokenExpired(token)) {
                const result = await refreshToken();

                token = result.accessToken;

                localStorage.setItem("accessToken", token);
            }

            const decoded = jwtDecode(token);

            setUser(decoded);
            setIsLoggedIn(true);
            setIsAdmin(decoded.role === "ADMIN");

        } catch (error) {
            localStorage.removeItem("accessToken");

            setUser(null);
            setIsLoggedIn(false);
            setIsAdmin(false);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = (accessToken) => {
        localStorage.setItem("accessToken", accessToken);

        const decoded = jwtDecode(accessToken);

        setUser(decoded);
        setIsLoggedIn(true);
        setIsAdmin(decoded.role === "ADMIN");
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
        setIsAdmin(false);
    };

    return (
        <AuthContext.Provider
            value={{
                loading,
                isLoggedIn,
                isAdmin,
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