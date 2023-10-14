import React from "react";

const AboutPage = () => {
  return (
    <main className="flex items-center min-h-screen justify-center">
      <div className=" flex flex-col max-w-2xl pt-24 w-full text-xl text-bold bg-white/70 text-center items-center justify-center p-4">
        <div className="text-sm">
          Данный сайт создан исключительно <br />
          на субъективном толковании <br />
          индуистской мифологии автором. <br />
          Создан только в творческих целях. <br />
          Не несет в себе цель оскорбить <br />и не претендует на всеприятие.
        </div>
        <div className="text-black/50 mt-14 flex text-sm">
          <div>Контакты:</div>
          <div>
            <span className="text-blue-700 transition duration-150 cursor-pointer hover:text-red-600  ml-[15vw]">
              vvitcherv@gmail.com
            </span>
            <br />
            Телефон/WhatsApp:{" "}
            <span className="text-black transition duration-150 cursor-pointer hover:text-gray-600">
              +79992149895
            </span>
            <br />
            Telegram:{" "}
            <span className="text-black transition duration-150 cursor-pointer hover:text-gray-600">
              @kain_rd
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
