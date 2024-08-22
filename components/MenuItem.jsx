import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item mx-auto">
      <Image src={img} alt={title} className="h-80 w-56 mx-auto" height={768} width={1366} />
      <div className="item-info">
        <header>
          <h5 className="text-2xl w-full capitalize text-center">{title}</h5>
        </header>

        <div className="flex justify-center items-center">
          <Link href="/contact">
          <button type="button" className="px-10 py-2 bg-[#af8260] transition-all duration-150 rounded-lg text-[18px] capitalize text-white font-normal hover:bg-[#af8260ae] active:scale-[0.98]">
            Add to Cart
          </button>
          </Link>
          
        </div>


      </div>
    </article>
  );
};
export default MenuItem;
