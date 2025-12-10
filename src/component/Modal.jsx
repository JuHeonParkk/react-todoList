import React from "react";
import Layout from "./Layout";

export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <Layout>
      <div className="fixed top-0 left-0 max-w-sm h-full px-8 bg-black bg-opacity-50 items-center z-50">
        <div className="bg-[#F3F2F8] rounded-xl p-4 w-80 shadow-xl mx-auto mt-40">
          {children}
        </div>
      </div>
    </Layout>
  );
}
