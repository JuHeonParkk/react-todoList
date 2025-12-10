import React from "react";

export default function Layout({ children }) {
  return (
    <div className="max-w-sm w-screen h-screen overflow-hidden">{children}</div>
  );
}
