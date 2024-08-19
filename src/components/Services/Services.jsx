//images imports
import Img2 from "../../assets/biryani2.png";

//services data
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde vel eligendi praesentium harum fuga libero ex, odio ipsam provident.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Kari",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde vel eligendi praesentium harum fuga libero ex, odio ipsam provident.",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde vel eligendi praesentium harum fuga libero ex, odio ipsam provident.",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* HEADER SECTION */}
          <div className="text-center mb max-w-[400px] md:max-w-[800px] mx-auto">
            <h1 className="text-3xl font-bold">Nossos Serviços</h1>
            <p className="text-sm text-gray-600 mt-2">
              A RK é uma empresa especializada na área de alimentação coletiva.
              Desde 1987 fornecendo refeições para indústrias, construtoras e
              órgãos públicos, garantindo segurança e satisfação.
            </p>
          </div>

          {/* CARD SECTION */}
          <div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {ServicesData.map(({ id, img, name, description }) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    key={id}
                    className="text-center max-w-[300px] group rounded-2xl shadow-xl bg-white mb-10 dark:bg-gray-800 dark:text-white hover:bg-rkcolor duration-300 transition cursor-pointer hover:text-white"
                  >
                    <div className="h-[100px]">
                      <img
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-once="true"
                        src={img}
                        alt={name}
                        className="max-w-[200px] mx-auto block transform -translate-y-4 group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="mt-14 p-4 text-center">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-800 text-sm dark:text-white group-hover:text-white duration-300">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
