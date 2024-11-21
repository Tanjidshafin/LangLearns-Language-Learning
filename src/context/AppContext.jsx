import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase.init';
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetch('/Words.json')
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, []);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const value = { lessons,setUser,user };
  return (
    <div>
      <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
