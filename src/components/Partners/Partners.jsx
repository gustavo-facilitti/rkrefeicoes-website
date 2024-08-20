import { useState, useEffect } from "react";

//slider from react-slick lib
import Slider from "react-slick";

//partners logo imports
import dunorte from "../../assets/partners/logo-dunorte.png";
import amazonasfc from "../../assets/partners/logo-amazonasfc.png";
import audax from "../../assets/partners/logo-audax.png";
import iveco from "../../assets/partners/logo-iveco.png";
import oliva from "../../assets/partners/logo-oliva.png";

//clients logo imports
import seduc from "../../assets/clients/seduc.webp";
import inventus from "../../assets/clients/inventus.webp";
import petrobras from "../../assets/clients/petrobras.webp";
import policiafederal from "../../assets/clients/policia-federal.webp";
import uea from "../../assets/clients/uea.webp";
import ministeriojustica from "../../assets/clients/ministerio-da-justica.webp";
import ministerioeducacao from "../../assets/clients/ministerio-da-educacao.webp";
import ifam from "../../assets/clients/ifam.webp";
import ufam from "../../assets/clients/ufam.webp";

const Partners = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("window width:", windowWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //settings for slider
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  var MobileSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  //testimonial data will be used to map through in the Slider
  const testimonialData = [
    {
      id: 1,
      img: seduc,
    },
    {
      id: 2,
      img: uea,
    },
    {
      id: 3,
      img: petrobras,
    },
    {
      id: 4,
      img: inventus,
    },
    {
      id: 5,
      img: policiafederal,
    },
    {
      id: 6,
      img: ministerioeducacao,
    },
    {
      id: 7,
      img: ministeriojustica,
    },
    {
      id: 8,
      img: ifam,
    },
    {
      id: 9,
      img: ufam,
    },
  ];

  return (
    <>
      <div className="p-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Nossos Principais Clientes</h1>
          </div>
          {/* testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            {/* slider with react slick lib & slick-carousel */}
            {windowWidth > 600 ? (
              <Slider {...settings}>
                {testimonialData.map((data) => (
                  <div
                    key={data.id}
                    className="p-6 rounded-2xl bg-white  cursor-pointer hover:text-white duration-300"
                  >
                    <div className="flex flex-col justify-center text-center gap-3 items-center mx-auto">
                      <img src={data.img} alt={data.name} />
                      <p className="text-gray-500 text-sm dark:text-white">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <Slider {...MobileSettings}>
                {testimonialData.map((data) => (
                  <div
                    key={data.id}
                    className="p-6 rounded-2xl cursor-pointer hover:text-white duration-300"
                  >
                    <div className="flex flex-col justify-center text-center gap-3 items-center mx-auto">
                      <img src={data.img} alt={data.name} />
                      <p className="text-gray-500 text-sm dark:text-white">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
