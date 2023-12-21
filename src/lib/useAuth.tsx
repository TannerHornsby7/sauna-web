'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

export interface User {
    steamId: string;
    name?: string;
    pictureUrl?: string;
    // Add other user properties as needed
}

// Context value type remains the same
export interface AuthContextType {
    user: User | null;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>({ steamId: 'loading' });

    useEffect(() => {
        const userInfo = Cookies.get('sauna.user_info');
        if (userInfo) {
            // parse Json from userinfo string
            setUser(JSON.parse(userInfo) as User);
        } else {
            console.log('no user info cookie has been set')
            setUser(null);
        }
    }, []);

    const logout = () => {
        Cookies.remove('sauna.user_info');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// export useAuth hook
export const useAuth = () => useContext(AuthContext);
