import React from 'react'

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="min-w-screen h-20 bg-blue-400 flex justify-center items-center px-4">
      <input
        type="text"
        className="flex-grow max-w-md h-10 bg-white border-2 border-gray-300 rounded-2xl pl-5 focus:outline-none focus:border-blue-500"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar
