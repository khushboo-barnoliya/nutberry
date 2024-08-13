import Image from "next/image";

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item mx-auto">
      <Image src={img} alt={title} className="h-80 w-56 mx-auto" height={768} width={1366} />
      <div className="item-info">
        <header>
          <h5 className="text-2xl capitalize text-center">{title}</h5>
        </header>
      </div>
    </article>
  );
};
export default MenuItem;
