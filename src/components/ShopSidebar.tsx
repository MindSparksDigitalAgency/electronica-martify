import React from "react";

const categories = [
  { name: "All", value: "all" },
  { name: "Laptops", value: "laptops" },
  { name: "Smartphones", value: "smartphones" },
  { name: "Accessories", value: "accessories" },
];

const ShopSidebar = ({ selectedCategory, setSelectedCategory, setSortBy }) => {
  return (
    <aside className="bg-secondary p-6 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Categories</h3>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.value}>
            <button
              className={`text-sm ${
                selectedCategory === cat.value
                  ? "font-bold text-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-bold mt-6 mb-4">Sort By</h3>
      <select
        className="w-full border border-gray-300 rounded p-2"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </aside>
  );
};

export default ShopSidebar;
