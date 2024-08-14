import Image from "next/image";

const Logo = ({ src }) => {
  return (
    <div className="logo-box w-fit md:top-10 md:left-5 left-0  absolute z-10 mt-5 ">
      <a href="/">
        <Image
          src={src}
          alt="Nutberry Logo" // Add descriptive alt text
          height={200}
          width={200}
          className="md:h-36 h-24 -mr-16 md:mr-10"
        />
      </a>
    </div>
  );
};

export default Logo;
