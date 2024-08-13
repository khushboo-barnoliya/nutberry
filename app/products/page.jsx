import Logo from "@/components/Logo/Logo";
import Products from "@/components/Products/Products";

const page = () => {
  return (
    <main className="bg-orange-100">
      <Logo src="/images/nutberry.svg" />
      <section className="header-products h-screen">
        <div className="header__text-box text-center">
          <h1 className="text-slate-200 -mt-16">
            <span className="heading-primary--main block md:text-[10rem] text-[4rem] font-normal tracking-widest uppercase mb-7">
              Products
            </span>
            <span className="heading-primary--sub block md:text-5xl text-3xl font-normal tracking-wide uppercase">
              We are grateful to offer
            </span>
          </h1>
        </div>
      </section>

      <section>
        <div className="pt-[30rem] -mt-[20rem]">
          <div className="text-center">
            <h2 className="heading-secondary md:text-6xl text-4xl -mt-[3rem] uppercase inline-block text-transparent tracking-wide mb-[6rem]">
              Take a glance for future
            </h2>
          </div>
        </div>
      </section>
      <Products />
    </main>
  );
};
export default page;
