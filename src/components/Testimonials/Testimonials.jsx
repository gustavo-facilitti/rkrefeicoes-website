//slider from react-slick lib
import Slider from "react-slick";

const Testimonials = () => {
  //settings for slider
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  //testimonial data will be used to map through in the Slider
  const testimonialData = [
    {
      id: 1,
      name: "Pedro Alvarez",
      text: "Qualidade no atendimento, higiene e perfeito cardápio variado. Uma empresa espetacular!",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 2,
      name: "Alex Machado",
      text: "Amei o atendimento, menu perfeito de excelência e alta qualidade em todos os detalhes.",
      img: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: 3,
      name: "Luciano",
      text: "Alimentação de alta qualidade, sempre apresentando diversos pratos e diversidade no menu!",
      img: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
      id: 4,
      name: "Suzan Martins",
      text: "Eu sempre indiquei e sempre vou indicar, pratos variados e profissionais sempre com sorriso no rosto!",
      img: "https://randomuser.me/api/portraits/women/78.jpg",
    },
    {
      id: 5,
      name: "Mari Cunha",
      text: "Ótimo serviço, sempre excelente. Uma empresa de alta qualidade em refeições coletivas",
      img: "https://randomuser.me/api/portraits/women/66.jpg",
    },
  ];

  return (
    <>
      <div className="p-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">O que Nossos Clientes Dizem</h1>
          </div>
          {/* testimonial section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            {/* slider with react slick lib & slick-carousel */}
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div
                  key={data.id}
                  className="p-6 rounded-2xl bg-[#F3F4F6] dark:bg-gray-800 dark:hover:bg-rkcolor hover:bg-rkcolor hover:text-white duration-300"
                >
                  <div className="flex flex-col justify-center text-center gap-3 items-center mx-auto">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="border-none rounded-full"
                    />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
