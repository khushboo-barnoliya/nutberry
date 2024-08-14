import Image from "next/image";
import Link from "next/link";
import { footer } from "@/contants/data";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#af8260]">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/images/nutberry-logo.svg"
                className="h-30"
                alt=""
                height={1000}
                width={100}
              />
            
            </a>
            <ul className="flex flex-wrap md:flex-row flex-col md:gap-10 gap-5 md:items-center mb-6 py-10 text-2xl font-medium text-gray-100 sm:mb-0 max-w-[35rem]">
              {footer.map((item) => {
                const { id, title, href, blank } = item;
                return (
                  <li key={id}>
                    <a href={href} className="hover:underline" target={blank}>
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-xl text-gray-100 sm:text-center ">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Nutberry™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
