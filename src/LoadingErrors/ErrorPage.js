import React from "react";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Something went wrong with the page</h1>
      <img src="./warning.png" alt="warning sign" className="w-24 h-24 opacity-60" />
    </div>
  );
}
