import ReactPlayer from 'react-player';
import { useTranslation } from "react-i18next";

function EnvironmentSectionOne() {
  const { t } = useTranslation("segam_environment");

  return (
    <div>
      <div className="relative max-w-8xl md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl bg-white p-5 mt-[-80px]">
        <div className="flex md:flex-row flex-col gap-5">
          <div className="basis-1/2">
            <div className="flex-col items-start gap-4 inline-flex">
              <div className="px-[17.84px] py-[6.42px] bg-[#fef4f2] rounded-[51.36px] justify-center items-center gap-2 inline-flex">
                <span className="text-[#eb6a48] text-xs font-semibold font-['Segoe UI'] leading-[19.10px]">
                  {t("tag")}
                </span>
              </div>
              <div className="self-stretch text-[#323f47] text-[40px] font-semibold font-['Segoe UI']">
                {t("title")}
              </div>
              <div className="self-stretch text-[#3d3d3d] text-base font-normal font-['Segoe UI'] leading-relaxed">
                {t("content")}
              </div>
            </div>
          </div>
          <div className="h-[600px] md:h-[400px] basis-1/2 flex justify-end">
            <ReactPlayer
              url="https://youtu.be/hYoQa3cC3Ys?si=DVDH7n6Ol6OqiJR0"
              controls
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnvironmentSectionOne;
