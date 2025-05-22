import { FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white p-9 w-full">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between text-center">
        <div className="flex space-x-8 items-center">
            <Logo />

            <div>
                <h2 className="font-kaushan text-xl font-semibold mb-4">Little Saigon Nails & Spa</h2>
                <div className="font-roboto">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
                <p>66 Mall Rd, Hamilton, ON L8V 5B9</p>
                <p>Phone: (905) 296-5166</p>
            </div>
            </div>
        </div>
        <div>
          <h3 className="font-medium font-roboto mb-3">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <Socials href="facebook.com" icon={<FaFacebook size={20} />} />
            <Socials href="instagram.com" icon={<FaInstagram size={20} className="hover:text-blue"/>} />
          </div>
        </div>
        
      </div>
    </footer>
  );
}
