import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Head from "next/head";

export default function Contact() {
    return(
        <>
        <Head>
        <title>Contact Us | Little Saigon Nails & Spa</title>
            <meta name="description" content="Get in touch with Little Saigon Nails & Spa in Hamilton. Find our location, hours, phone number, and book your next appointment today!" />
            <meta name="keywords" content="contact nail salon, spa location, book appointment, call nail salon, nail salon address, Hamilton" />
        </Head>

        <NavBar />
        <main className="pt-[12rem] flex flex-col space-y-10 md:flex-row min-h-screen animate-[fadeIn_1s_ease-out_forwards]">
            <section className="flex-1 flex flex-col items-center pt-[2rem]">
                <h1 className="font-markazi text-[3rem] text-gray-700">CONTACT US</h1>
                <ul className="font-markazi text-[2rem] text-gray-700 text-center">
                    <li>66 Mall Rd, Hamilton, ON L8V 5B9</li>
                    <li>(905) 296-5166</li>
                    <li></li>
                </ul>
            <h1 className="font-markazi text-[3rem] text-gray-700">HOURS</h1>
                <ul className="font-markazi text-[1.7rem] text-gray-700 text-center">
                    <li>Monday 9:30 AM - 7:30 PM</li>
                    <li>Tuesday 9:30 AM - 7:30 PM</li>
                    <li>Wednesday 9:30 AM - 7:30 PM</li>
                    <li>Thursday 9:30 AM - 7:30 PM</li>
                    <li>Friday 9:30 AM - 7:30 PM</li>
                    <li>Saturday 9:30 AM - 6 PM</li>
                    <li>Sunday - CLOSED</li>
                </ul>
            <h1 className="font-markazi text-[3rem] text-gray-700">FOLLOW US</h1>
                <div className="flex flex-row space-x-8">
                    <Socials href="facebook.com" icon={<FaFacebook size={50} className="text-blue-600 hover:-translate-y-1 duration-300"/>} />
                    <Socials href="instagram.com" icon={<FaInstagram size={50} className="text-fuchsia-500 hover:-translate-y-1 duration-300"/>} />
                </div>
            </section>
            <div className="flex-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5814.864428819937!2d-79.86397698809252!3d43.22139698013084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a4dda8fffff%3A0x84bdb89532de0ea8!2sLittle%20Saigon%20Nails%20%26%20Spa!5e0!3m2!1sen!2sca!4v1746143680067!5m2!1sen!2sca" 
                className="w-full h-[600px] md:h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </main>
        <Footer />
        </>
    );
}