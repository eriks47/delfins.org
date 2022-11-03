import { createContext, useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

export const DolphinContext = createContext(null);

export function DolphinProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then((res) => {
      setCurrentUser(res.data.user);
    });
    supabase.auth.onAuthStateChange((_event, authSession) => {
      if (authSession) setCurrentUser(authSession.user);
      else setCurrentUser(null);
    });
  }, []);

  return (
    <DolphinContext.Provider value={{ currentUser }}>
      {children}
    </DolphinContext.Provider>
  );
}
