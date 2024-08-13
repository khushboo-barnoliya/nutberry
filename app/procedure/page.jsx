import Image from "next/image";
import "./procedure.css";
import { procedure } from "@/contants/data";
import Logo from "@/components/Logo/Logo";

const page = () => {
  return (
    <main>
      <Logo src="/images/nutberry.svg" />
      <section className="header-procedure h-screen">
        <div className="header__text-box text-center">
          <h1 className="text-slate-200 -mt-16">
            <span className="heading-primary--main block md:text-[10rem] text-[4rem] font-normal tracking-widest uppercase mb-7">
              Procedure
            </span>
            <span className="heading-primary--sub block md:text-5xl text-3xl font-normal tracking-wide uppercase">
              Followed by Nutberry
            </span>
          </h1>
        </div>
      </section>

      <section>
        <div className="bg-amber-100 pt-[30rem] -mt-[20rem]">
          <div className="text-center">
            <h2 className="heading-secondary md:text-6xl text-4xl -mt-[3rem] uppercase inline-block text-transparent tracking-wide mb-[6rem]">
              Step by Step Process
            </h2>
          </div>

          <div class="flex flex-wrap gap-20 max-w-[114rem] mx-auto text-3xl pb-40">
            {procedure.map((item) => {
              const { id, imgsrc, title, step, text } = item;
              return (
                <div class="story" key={id}>
                  <figure class="story__shape">
                    <Image
                      src={imgsrc}
                      alt={title}
                      class="story__img"
                      height={1000}
                      width={1000}
                    />
                    <figcaption class="story__caption">{step}</figcaption>
                  </figure>
                  <div class="story__text">
                    <h3 class="text-4xl text-slate-700 mb-8">{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default page;
