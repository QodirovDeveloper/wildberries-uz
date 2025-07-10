import React from "react";

function Footer() {
  return (
    <>
      <div className="py-10 max-lg:pb-20 mt-10 bg-[#F4F5F7]">
        <div className="container mx-auto lg:pr-7 lg:pl-7 pr-4 pl-2">
          <div className="flex max-lg:flex-col items-start max-lg:gap-2 justify-between">
            <ul className="*:p-0.5 ">
              <li>
                <a href="#">Покупателям</a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Доставка по клику от ПВЗ
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Юридическая информация
                </a>
              </li>
            </ul>
            <ul className="*:p-0.5 ">
              <li>
                <a href="#">Продавцам и партнёрам</a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Продавать товары
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Открыть пункт выдачи
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Предложить помещение
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Развозить грузы
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Доставлять заказы
                </a>
              </li>
            </ul>
            <ul className="*:p-0.5 ">
              <li>
                <a href="#">Наши проекты</a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  WB Guru
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  WB Stream
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  WB Track
                </a>
              </li>
            </ul>
            <ul className="*:p-0.5 ">
              <li>
                <a href="#">Компания</a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  О нас
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Пресс‑служба
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Контакты
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Вакансии
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Сообщить о мошенничестве
                </a>
              </li>
              <li>
                <a className="text-gray-500 max-lg:hidden" href="#">
                  Социальные сети
                </a>
              </li>
            </ul>
            {/* <a href="#" className=" max-lg:hidden">
            <img src="/qr-apps.svg" alt="qr-apps">
          </a> */}
            <img src="/qr-apps.svg" alt="" />
          </div>
          <div className="flex justify-between text-gray-500">
            <div className="">
              <p>© Wildberries 2004–2025. Все права защищены.</p>
              <p>
                Применяются <a href="#">рекомендательные технологии</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#">
                <i className="fa-brands fa-vk"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-odnoklassniki"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
