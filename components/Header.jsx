import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaOdnoklassniki, FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { IoIosPhonePortrait, IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 bg-white select-none">
      <div className="hidden lg:block bg-[#F7EBE5] w-full border-b border-gray-200">
        <div className="max-w-[1400px] w-full mx-auto px-6 flex items-center justify-between py-5 text-sm text-gray-700">
          <ul className="flex items-center gap-6 font-medium text-gray-600">
            <li>
              <a href="#" className="hover:text-black transition">
                Гарантия свежести
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Доставка и оплата
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Оптовые поставки
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Контакты
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 cursor-pointer hover:text-black">
              <CiLocationOn className="text-base" /> Санкт-Петербург
            </span>
            <a
              href="tel:88123098288"
              className="flex items-center gap-1 hover:text-black"
            >
              <IoIosPhonePortrait className="text-base" /> 8 812 309-82-88
            </a>

            <div className="flex items-center gap-2 cursor-pointer hover:text-black">
              <div className="relative flex items-center">
                <BsCart2 className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  4
                </span>
              </div>
              <span className="ml-1">В корзине</span>
            </div>

            <div className="flex items-center gap-3 text-base text-gray-600 ml-2">
              <a href="#" className="hover:text-blue-400 transition">
                <FaTelegramPlane />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <SlSocialVkontakte />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <FaOdnoklassniki />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="w-full bg-[#F7EBE5] lg:bg-white relative pb-0 lg:pb-[44px] border-b border-gray-200 lg:border-none">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-6 flex items-center justify-between h-20 relative lg:border-b lg:border-gray-200">
          <div className="flex lg:hidden flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>

          <div className="hidden lg:flex flex-1 items-center gap-8 font-semibold text-sm text-gray-800 uppercase tracking-wider">
            <a
              href="#"
              className="flex items-center gap-1.5 text-red-400 hover:opacity-80 transition"
            >
              Сладкие дни
              <span className="bg-red-400 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                %
              </span>
            </a>
            <a
              href="#"
              className="hover:text-gray-500 transition flex items-center gap-1"
            >
              Подарочные наборы{" "}
              <span className="text-[10px] text-gray-400">▼</span>
            </a>
            <a href="#" className="hover:text-gray-500 transition">
              Собрать набор
            </a>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 lg:top-1/2 lg:-translate-y-1/2">
            <img
              src="logo.png"
              alt="Macaron Shop Logo"
              className="w-[100px] h-auto lg:w-[124px] lg:h-[124px] max-w-none lg:border-[6px] lg:border-white lg:rounded-full lg:shadow-md bg-transparent lg:bg-white"
            />
          </div>

          <div className="hidden lg:flex flex-1 justify-end items-center gap-8 font-semibold text-sm text-gray-800 uppercase tracking-wider">
            <a href="#" className="hover:text-gray-500 transition">
              Создать дизайн
            </a>
            <a
              href="#"
              className="hover:text-gray-500 transition flex items-center gap-1"
            >
              Компаниям <span className="text-[10px] text-gray-400">▼</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-500 transition flex items-center gap-1"
            >
              Весь каталог <span className="text-[10px] text-gray-400">▼</span>
            </a>
          </div>

          <div className="flex lg:hidden flex-1 justify-end">
            <div className="relative flex items-center cursor-pointer">
              <BsCart2 className="text-3xl text-gray-800" />
              <span className="absolute -bottom-1 -right-1 bg-black text-white text-[11px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                4
              </span>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40 flex flex-col p-5 lg:hidden animate-fade-in">
            <a
              href="#"
              className="py-3.5 border-b text-red-400 font-bold uppercase tracking-wider text-sm flex items-center justify-between"
            >
              Сладкие дни{" "}
              <span className="bg-red-400 text-white text-[10px] px-2 py-0.5 rounded-full">
                %
              </span>
            </a>
            <a
              href="#"
              className="py-3.5 border-b font-semibold text-gray-700 uppercase tracking-wider text-sm"
            >
              Подарочные наборы
            </a>
            <a
              href="#"
              className="py-3.5 border-b font-semibold text-gray-700 uppercase tracking-wider text-sm"
            >
              Собрать набор
            </a>
            <a
              href="#"
              className="py-3.5 border-b font-semibold text-gray-700 uppercase tracking-wider text-sm"
            >
              Создать дизайн
            </a>
            <a
              href="#"
              className="py-3.5 border-b font-semibold text-gray-700 uppercase tracking-wider text-sm"
            >
              Компаниям
            </a>
            <a
              href="#"
              className="py-3 font-semibold text-gray-700 uppercase tracking-wider text-sm"
            >
              Весь каталог
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
