import { useState } from "react";

//image imports
import bgImg from "../../assets/vector3.png";
import bgImg2 from "../../assets/vector2.png";
import Food1 from "../../assets/biryani2.png";
import Food2 from "../../assets/biryani3.png";
import Food3 from "../../assets/biryani5.png";

const imageList = [
  {
    id: 1,
    img: Food1,
  },
  {
    id: 2,
    img: Food2,
  },
  {
    id: 3,
    img: Food3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg2})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = useState(Food1);

  //function to change main image from hero section
  const changeMainImage = (item) => {
    setImageId(item.id === 1 ? Food1 : item.id === 2 ? Food2 : Food3);
  };

  return (
    <>
      <div
        id="inicio"
        style={bgImage}
        className="mt-10 min-h-[550px] sm:min-h-[500px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0 sm:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Bem-vindo a RK Refeições!
              </h1>
              <p className="text-md">
                Alimentação coletiva com segurança e satisfação RK, <br /> sua
                parceira desde 1987
              </p>
              <div>
                <button className="bg-gradient-to-r bg-rkcolor text-white px-4 py-2 rounded hover:scale-105 duration-200">
                  Entre em contato!
                </button>
              </div>
            </div>

            {/* img content section */}
            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              {/* main image section */}
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  src={imageId}
                  alt="Spinning food image"
                  className="w-[250px] sm:w-[350px] mx-auto spin"
                />
              </div>

              {/* image list section */}
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {imageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer"
                    onClick={() => changeMainImage(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
