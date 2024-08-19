// images imports
import Food1 from "../../assets/biryani.png";
import sobre from "../../assets/sobre.webp";

//icons
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>
      <div id="sobre" className="min-h-[500px]">
        <div>
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container mb-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* image section */}
              <div className="rounded-xl lg:max-h-[400px]">
                <img
                  src={sobre}
                  alt=""
                  className=" hidden sm:block max-w-[500px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
                />
              </div>

              {/* text section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">Sobre</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Somos obstinados por entregar aos nossos parceiros uma
                  experiência única, além da alimentação. E para isso,
                  investimos em processos e equipamentos de última geração,
                  garantindo segurança e qualidade para nossos clientes do
                  início ao fim.
                  <br />
                  <br />
                  Procuramos sempre oferecer os melhores serviços e preço justo,
                  visando sempre a qualidade e a segurança dos alimentos.
                </p>

                {/* icons section */}
                <div className="my-10 flex gap-5">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-200 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-200 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-200 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r bg-rkcolor text-white px-6 py-3 rounded-full hover:scale-105 duration-300">
                    Seja parceiro!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
