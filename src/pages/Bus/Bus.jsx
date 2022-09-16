import React from "react";
import { Link } from "react-router-dom";
import "./Bus.css";

function Bus() {
  return (
    <>
      <div className="container">
        <div className="buttons mt-4 text-center">
          <div className="button my-12">
            <h1 className="font-bold text-2xl">Shohagh Paribahan Pvt. Ltd</h1>
            <button className="flex text-xl mx-auto w-48 py-3 justify-center font-bold my-5">
              <a target="#" href="http://shohagh.com/">
                BOOK NOW
              </a>
            </button>
          </div>
          <div className="button my-12">
            <h1 className="font-bold text-2xl">Hanif Enterprise</h1>
            <button className="flex text-xl mx-auto w-48 py-3 justify-center font-bold my-5">
              <a target="#" href="https://www.hanif-enterprise.com/">
                BOOK NOW
              </a>
            </button>
          </div>
          <div className="button my-12">
            <h1 className="font-bold text-2xl">Green Line Paribahan</h1>
            <button className="flex text-xl mx-auto w-48 py-3 justify-center font-bold my-5">
              <a target="#" href="https://www.greenlinebd.com/">
                BOOK NOW
              </a>
            </button>
          </div>
          <div className="button my-12">
            <h1 className="font-bold text-2xl">Shyamoli N.R. Travels</h1>
            <button className="flex text-xl mx-auto w-48 py-3 justify-center font-bold my-5">
              <a target="#" href="https://www.shyamoliparibahan-bd.com/">
                BOOK NOW
              </a>
            </button>
          </div>
          <div className="button my-12">
            <h1 className="font-bold text-2xl">Eagle Paribahan</h1>
            <button className="flex text-xl mx-auto w-48 py-3 justify-center font-bold my-5">
              <a target="#" href="https://www.eagleparibahan.com/">
                BOOK NOW
              </a>
            </button>
          </div>
        </div>
        <Link
          to={"/"}
          className="flex link text-xl mx-auto w-72 py-3 my-9 justify-center font-bold"
        >
          BACK
        </Link>
      </div>
      <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <h4 className="text-white font-bold text-center py-4">
          MADE WITH ❤️ BY <span className="text-2xl">SIAM</span>.
        </h4>
      </footer>
    </>
  );
}

export default Bus;
