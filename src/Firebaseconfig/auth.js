import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged,signOut as authSignOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import auth from "./Firebase";

const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authStateChanged = async (user) => {
    setIsLoading(true);
    if (!user) {
      setAuthUser(null);
      isLoading(false);
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
    });
    setIsLoading(false);
  };

  const signOut = () => authSignOut(auth).then(()=>{
    setAuthUser(null);
    setIsLoading(false);
    });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);
  return {
    authUser,
    isLoading,
    signOut
  };
}

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
