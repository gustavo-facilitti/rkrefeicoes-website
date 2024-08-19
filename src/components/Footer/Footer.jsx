//images imports
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

//react icons
// import FooterLogo from "../../assets/food-logo.png";
import RKLogo from "../../assets/Rk_logo.webp";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4 ">
              <img src={RKLogo} alt="Footer logo" className="w-32" />
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                RK Refeições
              </h1>
              <p>
                Alimentação coletiva com segurança e satisfação RK, sua parceira
                desde 1987
              </p>
              <br />
              <div className="flex items-center gap-3 mt-6">
                <FaLocationArrow />
                <p className="max-w-[270px]">
                  Av. Gabriel Corrêa Pedrosa, nº 149C, Parque Dez de Novembro -
                  Manaus-AM
                </p>
              </div>
              <div className="flex items-center gap-3 mt-10">
                <FaMobileAlt />
                <p>+92 123456789</p>
              </div>

              {/* SOCIAL HANDLES */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>

            <div className="sm:mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-2 md:pl-10">
              {/* LINKS COLUMN 1 */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mb-3">
                    Página
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="#inicio">Início</a>
                    </li>
                    <li>
                      <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                      <a href="#servicos">Serviços</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* LINKS COLUMN 2 */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="#">Novidades</a>
                    </li>
                    <li>
                      <a href="#">Trabalhe Conosco</a>
                    </li>
                    <li>
                      <a href="#">Endereço</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* LINKS COLUMN 3 */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mb-3">
                    Outros Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="#" id="contato">
                        Entre em Contato
                      </a>
                    </li>
                    <li>
                      <a href="#">Avalie nosso Serviços</a>
                    </li>
                    <li>
                      <a href="#">Certificados</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto text-center py-10 border-t-2 border-gray-300/50">
            RK Refeições &copy; 2024 - Todos os Direitos Reservados
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
