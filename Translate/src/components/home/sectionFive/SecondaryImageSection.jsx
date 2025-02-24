import { useState, useEffect } from "react";
import woman from "../../../assets/img/homeimages/woman.png";
import woman2 from "../../../assets/img/homeimages/woman2.png";
import woman3 from "../../../assets/img/homeimages/woman3.png";
// import wommancercile from "../../../assets/img/homeimages/woman-circle.png";
import { useTranslation } from "react-i18next";

const SecondaryImageSection = () => {
  const { t } = useTranslation("home"); // Use 'home' namespace

  const images = [woman, woman2, woman3];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000); // 1 minute interval (60000 ms)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div
      className="w-full mt-10 md:mt-0 relative rounded-[20px] overflow-hidden basis-100 lg:basis-1/3 bg-cover h-[550px]"
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    >
      <div className="w-full  h-[350px] left-0 bottom-[0px] absolute bg-gradient-to-t from-[#507a8a] to-[white]/0 "></div>
      <div className="flex items-center justify-center">
        <div className="hidden md:flex Frame88 p-[8.36px] left-[20%] top-[394px] absolute bg-white/20 rounded-[233.95px] backdrop-blur-[11.70px] flex-col justify-center items-center gap-[8.36px] inline-flex">
          <div className="Frame85 w-full md:w-[280.29px] m-auto justify-between items-center inline-flex">
            <div className="Frame84 justify-start items-center flex">
              <div className="Frame83 w-[34.26px] h-[34.26px] px-[6.68px] py-[5.01px] bg-[#efefef] rounded-[17.13px] border border-white justify-center items-center gap-[8.36px] flex">
                <div className="Frame w-[16.71px] h-[16.71px] relative"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex Frame87 p-[9.05px] left-[15%] top-[402px]  absolute bg-white/20 rounded-[253.26px] backdrop-blur-[12.66px] flex-col justify-center items-center gap-[9.05px] inline-flex">
          <div className="Frame85 w-full md:w-[320px] m-auto justify-between items-center inline-flex">
            <div className="Frame84 justify-start items-center flex">
              <div className="Frame83 w-[37.08px] h-[37.08px] px-[7.24px] py-[5.43px] bg-[#efefef] rounded-[18.54px] border border-white justify-center items-center gap-[9.05px] flex">
                <div className="Frame w-[18.09px] h-[18.09px] relative"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="Frame86 p-2.5 left-[10%] top-[411px] absolute bg-white/20 rounded-[280px] backdrop-blur-[14px] flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="Frame85 w-full  m-auto justify-between items-center inline-flex">
            <div className="Frame84 justify-start items-center flex gap-3">
              <div className="Frame83 w-[41px] h-[41px] px-2 py-1.5 z-10 bg-[#efefef] rounded-[20.50px] border border-white justify-center items-center gap-2.5 flex">
                <div className="Frame w-5 h-5 relative">99</div>
              </div>
              <div className="Frame83 w-[41px] h-[41px] z-0 bg-[#efefef] rounded-[20.50px] mr-[-20px] border border-white justify-center items-center gap-2.5 flex">
                <div className="Frame relative">
                  <img
                    src={currentImage}
                    alt="Woman's portrait"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="text-wrap w-[200px] md:w-[272px] text-white text-xs font-normal font-['Segoe UI'] leading-none">
                {t("s7-second-slug")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryImageSection;
