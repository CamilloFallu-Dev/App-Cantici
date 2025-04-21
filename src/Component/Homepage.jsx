import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Homepage() {
  return (
    <div>
      <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-800"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            BENVENUTO SU
            <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-slate-600">
              <span class="relative text-white">ADI LICATA</span>
            </span>
          </h1>
        </div>
      </div>

      {/* <Image /> */}
      {/* <Footer /> */}
      {/* bg-lime-950/25 */}
    </div>
  );
}
