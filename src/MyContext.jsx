import React, { useState } from "react";
import { createContext } from "react";

export const AddingContext = createContext("");

export default function MyContext({ children }) {
  const [title, setTitle] = useState("Hussain Aslam");
  const upperCaseData = () => {
    setTitle(title.toUpperCase());
  };
  return (
    <>
      <AddingContext.Provider value={{ title, upperCaseData }}>
        {children}
      </AddingContext.Provider>
    </>
  );
}
