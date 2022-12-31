import React from "react";
import { Link } from "react-router-dom";

export default function LinkToPage({ text, page }) {
  return (
    <div>
      <Link to={`/${page}`}>{text}</Link>
    </div>
  );
}
