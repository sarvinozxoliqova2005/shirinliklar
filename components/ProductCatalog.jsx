import React from "react";
import { BsCart2 } from "react-icons/bs";

const ProductCatalog = () => {
  const categories = [
    "Свадьба",
    "Девичник",
    "День рождения",
    "8 марта",
    "23 февраля",
    "Новый год",
    "День учителя",
    "День тренера",
    "1 сентября",
    "Пасха",
    "Без печати",
  ];

  const products = [
    {
      id1: 1,
      title: "Сердце",
      desc: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
      price: "2800 руб",
      img: "heart-box.png",
    },

    {
      id: 1,
      title: "Красота спасёт мир",
      desc: "Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
      price: "750 руб",
      img: "beauty-box.png",
    },

    {
      id: 3,
      title: "Круглый набор",
      desc: "40 макаронс в круглой коробке с персональной надписью",
      price: "3900 руб",
      img: "round-box.png",
    },

    {
      id: 4,
      title: "Набор на 9",
      desc: "Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня",
      price: "950 руб",
      img: "nabor9.png",
    },

    {
      id: 5,
      title: "Набор на 16",
      desc: "Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ",
      price: "1500 руб",
      img: "nabor16.png",
    },

    {
      id: 6,
      title: "Сердце ",
      desc: "24 штуки в коробке в виде сердца.Ассорти из 6 вкусов ",
      price: "2500 руб",
      img: "heart-nabor.png",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
        <a className=" hover:underline" href="#">
          Главная
        </a>
        <span>&gt;</span>
        <a className="hover:underline" href="#">
          Каталог
        </a>
        <span>&gt;</span>
        <a className="text-blue-500 hover:underline" href="">
          Готовые наборы
        </a>
      </div>

      <h2 className="text-[30px] font-bold text-center">Готовые наборы</h2>

      {/* Categories - horizontal scroll */}
      <div className="flex items-center gap-2 mt-6 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#F7EBE5] text-gray-700 text-xs sm:text-sm rounded-full transition duration-200 font-medium hover:bg-[#ecd9d0] hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-[5px] overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            <div className="w-full aspect-square bg-gray-50 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
              />
            </div>

            <div className="p-3 md:p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-[11px] md:text-sm text-gray-500 font-normal leading-tight md:leading-relaxed mb-2 line-clamp-2 md:line-clamp-none">
                  {product.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center border-t border-gray-200 h-11 md:h-14 w-full mt-auto">
              <div className="flex-1 h-full flex items-center justify-center px-1">
                <span className="text-xs sm:text-base md:text-xl font-bold text-[#D96B74] whitespace-nowrap">
                  {product.price}
                </span>
              </div>

              <div className="h-full border-l border-gray-200"></div>

              <button className="w-11 sm:w-auto sm:flex-1 h-full flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition duration-200 focus:outline-none px-2 text-gray-800">
                <BsCart2 className="text-base sm:text-lg md:text-xl flex-shrink-0" />
                <span className="hidden sm:inline text-xs md:text-sm font-medium whitespace-nowrap">
                  В корзину
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
