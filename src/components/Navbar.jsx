import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
import Search from "./Search";

function Navbar() {
  const { basket } = useContext(GlobalContext);
  const { dispatch } = useContext(GlobalContext);
  const handleSearch = (e) => {
    dispatch({
      type: "SET_SEARCH_TERM",
      payload: e.target.value.toLowerCase(),
    });
  };
  return (
    <>
      <div>
        <div className="bg-gradient-to-l left-0 right-0  top-0 fixed z-[999999] from-[#7C1AF8] to-[#ED3CCA] pb-3 text-white/60 font-sansz">
          <div className="container mx-auto lg:pr-7 lg:pl-7 pr-2 pl-2">
            {/* nav top */}
            <div className="flex items-center pt-3 justify-between text-sm max-lg:hidden">
              <div className="">
                <p className="gap-2 font-semibold">
                  <i className="fa-solid fa-location-dot"></i>
                  Ташкент
                </p>
              </div>
              <div className="">
                <div className="bg-[rgba(255,255,255,0.21)] *:cursor-pointer text-white font-semibold flex items-center rounded-md gap-2 ">
                  <p className="bg-white py-0.5 px-2 rounded-md text-[#D42ED7]">
                    Товары
                  </p>
                  <p className="">Авиабилеты</p>
                  <p className="pr-2">Wibes</p>
                </div>
              </div>
              <div className="flex items-center gap-4 font-semibold *:cursor-pointer">
                <p className="">Продавайте на Wildberries</p>
                <p className="">Работа в Wildberries</p>
                <button className="bg-[rgba(0,0,0,0.32)] flex rounded-md gap-2 px-2 items-center">
                  <span className="w-5">
                    <img src="/ruFlag.png" alt="ruFlag" />
                  </span>
                  RUB
                </button>
              </div>
            </div>
            {/* nav bottom  */}
            <div className="flex items-center justify-between gap-3 pt-3">
              <div className="flex items-center gap-3 max-lg:hidden">
                <Link className="w-[216px]" to={"/"}>
                  <img src="/logoWb.svg" alt="logo" />
                </Link>
                <div className="p-3"></div>
              </div>
              <Search />
              <div className="flex items-center ml-2 gap-5">
                <button className="cursor-pointer font-semibold">
                  <span className="text-[20px] text-white">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <p className=" max-lg:hidden">Адреса</p>
                </button>
                <button className="cursor-pointer font-semibold max-lg:hidden">
                  <span className="text-[20px] text-white">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <p className="">Войти</p>
                </button>

                <NavLink to="/cart">
                  <button className="cursor-pointer font-semibold max-lg:hidden">
                    <span className="relative text-[20px] text-white">
                      <p className="products-counter absolute -top-3 -right-3 bg-red-500 text-sm px-1.5 flex items-center rounded-full">
                        {basket.length}
                      </p>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    <p>Корзина</p>
                  </button>
                </NavLink>
              </div>
            </div>

            <ul className="menu menu-horizontal *:border *:mx-1 *:rounded-sm  font-bold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="lg:hidden z-[9999999] fixed bottom-0 left-0 w-full bg-white border-zinc-200 text-[#C8C8D1] py-4">
        <ul className="flex justify-evenly text-xl sm:text-2xl">
          <li>
            <Link to={"/"}>
              <i className="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <i className="fa-solid fa-bars"></i>
            </Link>
          </li>
          <NavLink to="/cart">
            <span className="relative text-[20px] text-white">
              <p className="products-counter absolute -top-3 -right-3 bg-red-500 text-sm  px-1.5 flex items-center rounded-full">
                {basket.length}
              </p>
              <li>
                <i className="fa-solid fa-cart-shopping text-[#A439F9]"></i>
              </li>
            </span>
          </NavLink>

          <li>
            <Link to={"/"}>
              <i className="fa-solid fa-heart"></i>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
