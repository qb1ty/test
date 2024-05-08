import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const signin = (newUser, cb) => {
        setUser(newUser)
        cb()
    }

    const signout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            user,
            signin,
            signout
        }}>
            {children}
        </AuthContext.Provider>
    )
}