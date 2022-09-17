import React from "react";
import { Link } from "react-router-dom";
import bnr from "../../assets/bkash-nagad-rocket-1.png";
import "./Donation.css";

function Donation() {
  return (
    <>
      <div className="wrapper flex flex-col min-h-screen">
        <div className="container p-5 my-auto">
          <div className="header my-8">
            <h1 className="font-bold text-center">
              *Note=We will keep 30% cash and donate 70% cash to the poor.
            </h1>
          </div>
          <div className="donation text-center space-y-10">
            <h1 className="text-3xl font-extrabold">We need some donation</h1>
            <img
              src={bnr}
              alt="Image"
              className="mx-auto"
              style={{ width: "18rem" }}
            />
            <div className="email space-y-2">
              <h1 className="text-3xl font-extrabold">E-mail</h1>
              <h1 className="font-extrabold text-xl">
                mohammadali.150236@gmail.com
              </h1>
            </div>
            <div className="Number space-y-2">
              <h1 className="text-3xl font-extrabold">Number</h1>
              <h1 className="font-extrabold text-2xl">01782576700</h1>
            </div>
            <Link
              to={"/"}
              className="flex link text-xl mx-auto w-64 py-3 justify-center font-bold"
            >
              BACK
            </Link>
          </div>
        </div>
        <footer class="p-4 select-none bg-white w-full shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <h4 className="text-white font-bold text-center py-4">
            MADE WITH ❤️ BY <span className="text-2xl">SIAM</span>.
          </h4>
        </footer>
      </div>
    </>
  );
}

export default Donation;
