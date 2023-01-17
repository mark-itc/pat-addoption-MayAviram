import React from "react";

export default function TextDisplaying(props) {
  const { text } = props;
  return <div>you currently do not {text} any pets.</div>;
}
