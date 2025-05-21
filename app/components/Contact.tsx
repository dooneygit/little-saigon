// Contact.js
import React from "react";

const Contact = () => {
  return (
    <a
      href="/contact"
      className="border-4 border-white text-white px-12 py-2 text-[1.4rem] rounded-lg hover:bg-white duration-300 hover:text-black transition-colors font-markazi relative"
    >
      CONTACT US
      <span className="absolute top-[-0.5rem] right-[-0.6rem] w-5 h-5 bg-rose-400 rounded-full animate-ping"></span>
    </a>

  );
};

export default Contact;
