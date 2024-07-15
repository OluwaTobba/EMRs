import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (user) {
                setIsVerified(user.emailVerified);
            } else {
                setIsVerified(false);
            }
        });
        return unsubscribe;
    }, []);

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    const register = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const logout = () => {
        return auth.signOut();
    };

    return (
        <AuthContext.Provider value={{ user, isVerified, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };