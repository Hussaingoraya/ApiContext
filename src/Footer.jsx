import React, { useContext } from "react";
import { AddingContext } from "./MyContext";

export default function Footer() {
  const { title } = useContext(AddingContext);
  return (
    <>
      <h2> {title}</h2>
    </>
  );
}
