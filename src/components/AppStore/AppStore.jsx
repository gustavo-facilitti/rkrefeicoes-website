//images imports
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import BikeGif from "../../assets/mobile_bike.gif";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <p className="mt-5 font-semibold text-2xl dark:text-gray-400">
                Fique de olho!
              </p>
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-white">
                Em breve estaremos disponíveis na App Store! <br />
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Play store icon"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="Play store icon"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div className="">
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                src={BikeGif}
                alt="Man piloting bike"
                className="max-w-[200px] md:max-w-[600px] mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
