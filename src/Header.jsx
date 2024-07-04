import React, { useContext } from "react";
import { AddingContext } from "./MyContext";

export default function Header() {
  const { title, upperCaseData } = useContext(AddingContext);
  return (
    <>
      <h2>{title}</h2>
      <button onClick={upperCaseData}>UpperCase</button>
    </>
  );
}
