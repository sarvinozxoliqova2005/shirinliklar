import React from "react";
import { FaInstagram, FaFacebookF, FaVk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] text-gray-800 py-12 md:py-16 font-sans select-none border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-8 lg:gap-6 max-[600px]:flex-col items-start">
          <div className="flex flex-col items-start lg:items-center gap-6 lg:col-span-1 ">
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:gap-4 lg:flex lg:flex-row lg:justify-between lg:w-full w-full">
              <div className="flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-4 lg:gap-0 flex-1">
                <img
                  src="love.png"
                  alt="Love"
                  className="h-12 w-12 object-contain lg:mb-3 flex-shrink-0"
                />
                <h1 className="text-sm lg:text-xs text-gray-600 font-medium leading-tight">
                  Готовим вручную <br className="hidden lg:block" /> и с любовью
                </h1>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-4 lg:gap-0 flex-1">
                <img
                  src="dostavka.png"
                  alt="Dostavka"
                  className="h-12 w-12 object-contain lg:mb-3 flex-shrink-0"
                />
                <h1 className="text-sm lg:text-xs text-gray-600 font-medium leading-tight">
                  Доставим <br className="hidden lg:block" /> в день заказа
                </h1>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-4 lg:gap-0 flex-1">
                <img
                  src="muka.png"
                  alt="Muka"
                  className="h-12 w-12 object-contain lg:mb-3 flex-shrink-0"
                />
                <h1 className="text-sm lg:text-xs text-gray-600 font-medium leading-tight">
                  100% миндальная мука <br className="hidden lg:block" /> и
                  натуральные ингредиенты
                </h1>
              </div>
            </div>

            <div className="hidden lg:block text-[11px] text-gray-400 leading-normal mt-6">
              © 2021 Макароншоп <br />
              ООО "Квантум", Санкт-Петербург, улица Маршала Тухачевского, дом 22
            </div>
          </div>

          <div className="hidden sm:grid grid-cols-3 gap-10">
            <div>
              <h1 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                Информация
              </h1>
              <ul className="flex flex-col gap-2.5 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Гарантии вкуса и свежести
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                Каталог
              </h1>
              <ul className="flex flex-col gap-2.5 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Каталог десертов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Готовые наборы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Собрать свой набор
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Наборы с печатью
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Свадебные предложения
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Акции
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                ДЛЯ БИЗНЕСА
              </h1>
              <ul className="flex flex-col gap-2.5 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Корпоративные подарки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Для юридических лиц
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition">
                    Оптовикам
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end lg:text-right gap-6">
            <div>
              <h1 className="text-xl font-bold text-gray-900 mb-1">
                +7 (812) 309 82 88
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                с 9:00 до 21:00
              </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-800 flex items-center justify-center rounded-full shadow-sm transition"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-800 flex items-center justify-center rounded-full shadow-sm transition"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white hover:bg-gray-100 text-gray-800 flex items-center justify-center rounded-full shadow-sm transition"
              >
                <FaVk className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="block lg:hidden text-[11px] text-gray-400 text-center border-t border-gray-200 pt-6 mt-8">
          © 2021 Макароншоп ООО "Квантум", Санкт-Петербург, улица Маршала
          Тухачевского, <br /> дом 22
        </div>
      </div>
    </footer>
  );
};

export default Footer;
