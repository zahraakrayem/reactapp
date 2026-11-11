import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [searchText, setSearchText] = useState("");
  const [showInStock, setShowInStock] = useState(false);
  const [showOutOfStock, setShowOutOfStock] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function resetFilters() {
    setSearchText("");
    setShowInStock(false);
    setShowOutOfStock(false);
    setMinPrice("");
    setMaxPrice("");
  }

  return (
    <FilterContext.Provider
      value={{
        searchText,
        setSearchText,
        showInStock,
        setShowInStock,
        showOutOfStock,
        setShowOutOfStock,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}