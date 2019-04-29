import React from "react";
import "./Code.css";

const Code = ({ dataLang, children }) => React.createElement(
  "pre",
  { "class": "code", "data-lang": dataLang },
  React.createElement(
    "code",
    null,
    children
  )
);

export default Code;