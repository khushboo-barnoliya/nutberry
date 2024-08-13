import React from "react";
import "./about.css";
import Image from "next/image";
import Logo from "@/components/Logo/Logo";

const page = () => {
  return (
    <main>
      <Logo src="/images/nutberry.svg" />
      <section className="header-about h-screen">
        <div className="header__text-box">
          <h1 className="text-slate-200 -mt-16">
            <span className="heading-primary--main block md:text-[7rem] text-[3rem] font-normal tracking-widest uppercase mb-7 text-center md:text-left">
              About Nutberry
            </span>
          </h1>
        </div>
      </section>
      <section className="pt-[25rem] pb-[5rem] -mt-[20vh] bg-amber-100">
        <h2 className="heading-secondary md:text-6xl text-4xl p-[2%] -mt-[6rem] uppercase block text-transparent tracking-wide md:mb-[8rem] -mb-[10rem] text-center">
          Glimpse of what Nutberry is all about
        </h2>
        <div className="grid-section xl:max-w-[114rem] mx-auto flex flex-wrap-reverse justify-between p-10 text-slate-800">
          <div className="area-1 md:w-[45%] flex flex-wrap">
            <h3 className="heading-tertiary inline-block px-1 mb-2 mt-10 font-bold text-[2rem] uppercase">
              {`The legacy that Nutberry is building.`}
            </h3>
            <p className="paragraph text-justify text-xl tracking-wide leading-8 md:text-[15px] md:tracking-wider md:leading-10">
              Nutberry Food Processors Pvt. Ltd., founded by Manish Tanwar in
              2024, is poised to revolutionize the agro-processing industry with
              its commitment to quality, purity, and organic practices. With a
              primary focus on cashew processing and plans to expand into
              processing various other agro products in the future, Nutberry
              aims to provide wholesome, organic food to the public while
              contributing to the {"nation's"} health and well-being.
            </p>

            <h3 className="heading-tertiary inline-block px-1 mb-2 font-bold text-[2rem] uppercase">
              Our Future is in your hands.
            </h3>
            <p className="paragraph text-justify text-xl tracking-wide leading-8 md:text-[15px] md:tracking-wider md:leading-10">
              At Nutberry Food Processors Pvt. Ltd., our vision is to become a
              leading provider of organic food products, serving the nation with
              pure and nutritious offerings. We envision a future where every
              individual has access to healthy, organic food options that
              promote well-being and vitality. Through sustainable practices and
              a dedication to quality, we strive to elevate the standards of
              agro-processing and set a benchmark for purity and excellence in
              the industry
            </p>
          </div>
          <div className="area-2 md:w-[45%] w-[75%] mx-auto">
            <Image
              src="/images/composition-1.jpeg"
              alt=""
              height={400}
              width={300}
              className="hover:scale-110 cursor-pointer transition-all mt-[20rem] md:mt-[30px] mr-auto ml-auto"
            />
            <Image
              src="/images/ranges/standard-cashew.jpg"
              alt=""
              height={400}
              width={400}
              className="hover:scale-110 cursor-pointer transition-all mt-20 w-[300px] h-fit mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="">
        <div className="usageGallery__heading text-center">
          <h2 className="heading-secondary md:text-6xl text-4xl mt-[10rem] uppercase inline-block text-transparent tracking-wide mx-auto">
            We have got you covered with cashews...
          </h2>
        </div>

        <div className="container max-w-screen-2xl mx-auto pb-[10%] pt-[10rem] flex flex-wrap gap-20 justify-evenly ">
          <div className="max-w-sm bg-amber-100 rounded-lg shadow relative hover:scale-110 transition-all">
            <Image
              className="rounded-t-lg h-[200px]"
              src="/images/ranges/premium-cashew.jpg"
              alt=""
              width={400}
              height={250}
            />

            <div className="p-6 mx-auto">
              <h4 className="mb-5 text-4xl font-light tracking-wide text-black text-center font-sans">
                Years of Service
              </h4>
            </div>
          </div>

          <div className="max-w-sm bg-amber-100 rounded-lg shadow relative hover:scale-110 transition-all">
            <Image
              className="rounded-t-lg h-[200px]"
              src="/images/ranges/supreme-cashew.jpg"
              alt=""
              width={400}
              height={250}
            />

            <div className="p-6 mx-auto">
              <h4 className="mb-5 text-4xl font-light tracking-wide text-black text-center font-sans">
                Everyones needs met
              </h4>
            </div>
          </div>

          <div className="max-w-sm bg-amber-100 rounded-lg shadow relative hover:scale-110 transition-all">
            <Image
              className="rounded-t-lg h-[200px]"
              src="/images/ranges/standard-cashew.jpg"
              alt=""
              width={400}
              height={250}
            />

            <div className="p-6 mx-auto">
              <h4 className="mb-5 text-4xl font-light tracking-wide text-black text-center font-sans">
                Quality Assured
              </h4>
            </div>
          </div>

          <div className="max-w-sm bg-amber-100 rounded-lg shadow relative hover:scale-110 transition-all">
            <Image
              className="rounded-t-lg h-[200px]"
              src="/images/ranges/budget-cashew.jpg"
              alt=""
              width={400}
              height={250}
            />

            <div className="p-6 mx-auto">
              <h4 className="mb-5 text-4xl font-light tracking-wide text-black text-center font-sans">
                Affordable Prices
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
