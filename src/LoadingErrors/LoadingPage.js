import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <TailSpin
        ariaLabel="tail-spin-loading"
        color="#000000"
        height="90"
        width="90"
      />
    </div>
  );
}
