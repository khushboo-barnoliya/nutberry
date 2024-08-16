"use client";

import { React } from "react";
import ContactForm from "@/components/ContactForm";
import "./contact.css";
import Logo from "@/components/Logo/Logo";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <Logo src="/images/nutberry.svg" />
      <section className="header-contact h-screen">
        <div className="header__text-box text-center">
          <h1 className="text-slate-200 -mt-16">
            <span className="heading-primary--main block md:text-[10rem] text-[4rem] font-normal tracking-widest uppercase mb-7">
              Taste
            </span>
            <span className="heading-primary--sub block md:text-5xl text-3xl font-normal tracking-wide uppercase">
              is coming your way
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-amber-100 pt-[25rem] -mt-[15rem] w-full flex flex-wrap justify-around">
        <div className="py-8 lg:py-16 px-4 md:w-[500px] sm:w-300px">
          <ContactForm />
        </div>

        <div className="w-[300px] md:mt-40 mt-20">
          <div className="flex items-center gap-12 my-10">
            <div className="bg-[#f18b30] rounded-full w-24 h-24 flex items-center justify-center">
              <Image
                src="/images/phone.svg"
                alt="call us"
                className="h-12 w-12"
                height={200}
                width={200}
              />
            </div>
            <a href="tel:+919214089242" className="text-2xl">
              +91-9214089242
            </a>
          </div>

          <div className="flex items-center gap-12 my-10">
            <div className="bg-[#f18b30] rounded-full w-24 h-24 flex items-center justify-center">
              <Image
                src="/images/envelope.svg"
                alt="Email us"
                className="h-12 w-12"
                height={200}
                width={200}
              />
            </div>
            <a href="mailto:nutberryfood@gmail.com" className="text-2xl">
              nutberryfood@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-12 my-10">
            <div className="bg-[#f18b30] rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0 flex-grow-0">
              <Image
                src="/images/location-dot.svg"
                alt="Where to find us"
                className="h-12 w-12 "
                height={200}
                width={200}
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Sunshine+Coropack/@26.3055586,74.5328364,355m/data=!3m1!1e3!4m7!3m6!1s0x396961c66e882ab1:0x59fe738eb4e6f485!4b1!8m2!3d26.305977!4d74.532713!16s%2Fg%2F11f1n19dvj?entry=ttu"
              className="text-2xl"
            >
              Plot 8, Khasra 323. Arjunpura khalsa,
              <span className="text-2xl">Pisangan Ajmer, Rajasthan</span>
            </a>
          </div>
        </div>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.5365222813007!2d74.53247294228561!3d26.306186186065222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396961c671c23ae1%3A0xe5c47d6eb86d3b87!2s8G4M%2B93W%2C%20Arjunpura%20Khalsa%2C%20Rajasthan%20305203!5e1!3m2!1sen!2sin!4v1720243958870!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          className="w-[90%] mx-auto border-black border-4 my-10"
        ></iframe>
      </section>
    </main>
  );
};
export default page;
