import { useState, useEffect } from "react";

//slider from react-slick lib
import Slider from "react-slick";

//partners logo imports
import dunorte from "../../assets/partners/logo-dunorte.png";
import amazonasfc from "../../assets/partners/logo-amazonasfc.png";
import audax from "../../assets/partners/logo-audax.png";
import iveco from "../../assets/partners/logo-iveco.png";
import oliva from "../../assets/partners/logo-oliva.png";

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
      img: dunorte,
    },
    {
      id: 2,
      img: amazonasfc,
    },
    {
      id: 3,
      img: audax,
    },
    {
      id: 4,
      img: iveco,
    },
    {
      id: 5,
      img: oliva,
    },
  ];

  return (
    <>
      <div className="p-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Nossos Parceiros</h1>
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
