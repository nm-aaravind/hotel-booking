import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../assets/burger.svg"
import AuthModal from "./ModalWrapper";
const Header = ({ toggleModalVisible }) => {

  return (
    <div className="bg-orange-600 py-7 font-raleway sticky">
      <nav className="mx-auto sm:w-full sm:px-9 md:w-[90%]">
        <ul className="flex justify-between items-center gap-5">
          <li>
            <Link to="/" className="text-white sm:text-5xl md:text-6xl tracking-tight">
              TourVista
            </Link>
          </li>
          <li className="flex gap-10 sm:hidden md:inline-flex">
            <Link
            onClick={() => toggleModalVisible('signin')}
              className="p-4 rounded-lg text-2xl border-2 border-white box-content text-white hover:bg-white hover:text-orange-600 transition-all"
            >
              Sign In
            </Link>
            <Link
              onClick={() => toggleModalVisible('signup')}
              className="p-4 rounded-lg text-2xl bg-white text-orange-600 hover:bg-slate-200 hover:border-slate-200 transition-all border-2 border-white"
            >
              Sign Up
            </Link>
          </li>
          <li className="md:hidden">
            <img src={Burger}></img>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
