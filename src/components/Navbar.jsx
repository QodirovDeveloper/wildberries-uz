import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";

function Navbar() {
  const { basket } = useContext(GlobalContext);
  return (
    <>
      <div>
        <div className="bg-gradient-to-l left-0 right-0  top-0 fi xed z-[999999] from-[#7C1AF8] to-[#ED3CCA] pb-3 text-white/60 font-sansz">
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
                <a className="w-[216px]" href="/">
                  <img src="/logoWb.svg" alt="logo" />
                </a>
                <div className="p-3"></div>
              </div>
              <form className="relative max-w-[1500px]x w-full rounded-xl border-0 bg-primary-content pl-4 lg:py-4 py-2">
                <input
                  type="text"
                  id="search"
                  placeholder="Найти на Wildberries"
                  className=" max-w-[600px] focus:border-none border-0 focus:ring-0 w-full text-black placeholder-gray-400 focus:outline-none"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <button
                  type="submit"
                  className="absolute text-[#C8C8D1] right-0 top-0 text-2xl bottom-0 px-4 rounded-br-full rounded-tr-full"
                >
                  <i className="fa-solid fa-camera"></i>
                </button>
              </form>
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
                <button className="cursor-pointer font-semibold max-lg:hidden">
                  <span className="relative text-[20px] text-white">
                    <p className="products-counter absolute -top-3 -right-3 bg-red-500 text-sm  px-1.5 flex items-center rounded-full">
                      {basket}
                    </p>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <p className="">Корзина</p>
                </button>
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
            <a href="/">
              <i className="fa-solid fa-house"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>
          <span className="relative text-[20px] text-white">
            <p className="products-counter absolute -top-3 -right-3 bg-red-500 text-sm  px-1.5 flex items-center rounded-full">
              {basket}
            </p>
            <li>
              <a href="/">
                <i className="fa-solid fa-cart-shopping text-[#A439F9]"></i>
              </a>
            </li>
          </span>
          <li>
            <a href="/">
              <i className="fa-solid fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
