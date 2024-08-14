"use client"

import { useState } from "react";
import menu from "./data";
import Menu from "../Menu";
import Categories from "../Categories";
import "./products.css";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const Products = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    console.log(category);
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu">
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default Products;
