import { createContext, useState } from "react";
const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  function signIn(signedUser) {
    setUser(signedUser);
  }

  function signOut() {

  }

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
