// import { createContext, useContext, useEffect, useState,React } from "react";
// import { auth } from "../firebase";
// import { 
//   onAuthStateChanged, 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword,
//   signOut
// } from "firebase/auth";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       console.log("user",user);
      
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const signup = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const logout = () => {
//     return signOut(auth);
//   };

//   const value = { currentUser, login, signup, logout };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

// Define the shape of the context
interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
}

// Create context with undefined initially (will enforce use inside Provider)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("User signed in:", user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value: AuthContextType = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
