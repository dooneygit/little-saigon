//navigation bar containing all client components
import React from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";
import Contact from "./Contact";
import Socials from "./Socials";
import { FaFacebook, FaInstagram, FaHome, FaGift, FaHeart, FaHandSparkles } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";


const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 p-6 md:p-5 2xl:p-6 z-50">
      <div className="flex justify-between items-center w-full">
        <div className="flex space-x-8 items-center">
          <Logo/>
            <div className="space-y-3">
              <div className="hidden md:block font-kaushan text-extrabold text-[2.5rem] text-white">Little Saigon <br className="2xl:hidden" /><span className="hidden md:inline">Nails & Spa</span></div>
              <div className="font-roboto text-[0.8rem] flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-4 text-white">
                <div>66 MALL RD, <br className="md:hidden"/> HAMILTON ON L8V 5B9</div>
                <div className="flex space-x-4">
                  <Socials href="https://www.facebook.com/littlesaigonnails/" icon={<FaFacebook size={20} className="text-white"/>} />
                  <Socials href="https://www.instagram.com/littlesaigonnails_hamilton/" icon={<FaInstagram size={20} className="text-white"/>} />
                </div>
              </div>
            </div>
        </div>
        <div className="hidden xl:flex space-x-8 items-center">
          <NavLink href="/" text="HOME" icon={<FaHome size = {23} />} />
          <NavLink href="/about" text="ABOUT US" icon={<FaHeart size = {23} />} />
          <NavLink href="/services" text="SERVICES" icon={<FaHandSparkles size = {23} />} />
          <NavLink href="/promotions" text="PROMOTIONS" icon={<FaGift size = {23} />} />
          <Contact />
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;