import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="max-w-[1024px] mx-auto grid gap-y-10 items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
