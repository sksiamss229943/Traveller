import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container p-4 flex flex-col min-h-screen ">
        <div className="header">
          {/* <img className="mx-auto" src={header_img} alt="" /> */}
          <div className="box bg-black my-4 text-white rounded-md text-center py-3">
            <h1 className="font-bold text-xl">Happy Journey Bangladesh</h1>
          </div>
        </div>
        <div className="main mt-5">
          <h1 className="text-5xl font-bold my-4">
            Welcome <span className="font-extrabold text-7xl">Traveller</span>,
          </h1>
          <h1 className="font-medium text-justify">
            Thank you for choosing our website.In this website you can buy
            tickets of Train,Bus,Air and Boat for travelling ONLINE.We always
            try our best to provide you a better, peaceful and happy journey...
          </h1>
        </div>
        <div className="other_pages">
          <h1 className="text-[2.5rem] my-7 mt-14 font-bold text-center">
            What do you like?
          </h1>
          <div className="buttons mt-4">
            <Link
              to={"/buses"}
              className="flex link text-xl mx-auto w-48 py-3 justify-center font-bold my-5"
            >
              BUS
            </Link>
            <button className="flex text-xl mx-auto w-48 py-3 justify-center font-bold my-5">
              <a href="https://eticket.railway.gov.bd/">TRAIN</a>
            </button>
            <button className="flex text-xl mx-auto w-48 py-3 justify-center font-bold my-5">
              <a href="https://www.cheapflights.com/">BOAT</a>
            </button>
            <button className="flex text-xl mx-auto w-48 py-3 justify-center font-bold my-5">
              <a href="https://www.cheapflights.com/">FLIGHT</a>
            </button>
            <span className="flex text-center font-bold my-8 text-sm">
              *Note=Our site just directs to authorized ticketing page.Doesn't
              provide tickets.
            </span>
          </div>
          <div className="donations">
            <h1 className="text-4xl font-bold text-center mb-8">Donate US</h1>
            <Link
              to={"/donation"}
              className="flex link text-xl mx-auto w-64 py-3 justify-center font-bold my-5"
            >
              HELP THE POOR
            </Link>
          </div>
        </div>
      </div>

      <footer class="p-4 select-none bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <h4 className="text-white font-bold text-center py-4">
          MADE WITH ❤️ BY <span className="text-2xl">SIAM</span>.
        </h4>
      </footer>
    </>
  );
}

export default Home;
