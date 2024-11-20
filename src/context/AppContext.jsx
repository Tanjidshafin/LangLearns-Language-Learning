import React, { createContext, useEffect, useState } from 'react';
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    fetch('/Words.json')
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, []);
  const value = {lessons,};
  return (
    <div>
      <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
