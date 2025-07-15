import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="py-10 max-lg:pb-20 mt-10 bg-[#F4F5F7]">
        <div className="container mx-auto lg:pr-7 lg:pl-7 pr-4 pl-2">
          <div className="flex max-lg:flex-col items-start max-lg:gap-2 justify-between">
            <ul className="*:p-0.5 ">
              <li>
                <Link to="/">Покупателям</Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Доставка по клику от ПВЗ
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Юридическая информация
                </Link>
              </li>
            </ul>
            <ul className="*:p-0.5 ">
              <li>
                <Link to={"/"}>Продавцам и партнёрам</Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Продавать товары
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Открыть пункт выдачи
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Предложить помещение
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Развозить грузы
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Доставлять заказы
                </Link>
              </li>
            </ul>
            <ul className="*:p-0.5 ">
              <li>
                <Link to={"/"}>Наши проекты</Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  WB Guru
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  WB Stream
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  WB Track
                </Link>
              </li>
            </ul>
            <ul className="*:p-0.5 ">
              <li>
                <Link Компания to={"/"}></Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  О нас
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Пресс‑служба
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Контакты
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Вакансии
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Сообщить o мошенничестве
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 max-lg:hidden" to={"/"}>
                  Социальные сети
                </Link>
              </li>
            </ul>

            <img src="/qr-apps.svg" alt="" />
          </div>
          <div className="flex justify-between text-gray-500">
            <div className="">
              <p>© Wildberries 2004–2025. Все права защищены.</p>
              <p>
                <Link to={"/"}>рекомендательные технологии</Link>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link to={"/"}></Link>

              <i className="fa-brands fa-vk"></i>

              <Link to={"/"}></Link>

              <i className="fa-brands fa-square-odnoklassniki"></i>

              <Link to={"/"}></Link>

              <i className="fa-brands fa-telegram"></i>

              <Link to={"/"}></Link>

              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
