import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function Search() {
  const { dispatch } = useContext(GlobalContext);

  const handleSearch = (e) => {
    dispatch({
      type: "SET_SEARCH_TERM",
      payload: e.target.value.toLowerCase(),
    });
  };

  return (
    <form className="relative max-w-[1500px]x w-full rounded-xl border-0 bg-primary-content pl-4 lg:py-4 py-2">
      <input
        type="text"
        id="search"
        placeholder="Найти на Wildberries"
        onChange={handleSearch}
        className="max-w-[600px] focus:border-none border-0 focus:ring-0 w-full text-black placeholder-gray-400 focus:outline-none"
      />
      <button className="absolute text-[#C8C8D1] right-0 top-0 text-2xl bottom-0 px-4 rounded-br-full rounded-tr-full">
        <i className="fa-solid fa-camera"></i>
      </button>
    </form>
  );
}

export default Search;
