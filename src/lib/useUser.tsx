
import React, { createContext, useState } from 'react';

interface User {
    steamid: string;
    // Add more properties if needed
}

interface UserContextValue {
    user: User | null;
    setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextValue>({
    user: null,
    setUser: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};