const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="px-5 py-4 bg-[#af8260] rounded-lg text-3xl capitalize text-white font-medium hover:bg-[#af8260ae]"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
