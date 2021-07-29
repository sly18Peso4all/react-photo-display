import { useState } from "react";

const SearchForm = ({ handleSearch }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center  border-2 border-teal-500 py-2">
          <input
            type="text"
            className="apperance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search Image Term"
            value={text}
            onChange={handleChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 border-teal-500 text-white py-1 px-2 rounded hover:bg-teal-700 hover:border-teal-700  border-1"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
