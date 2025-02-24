import banner from "../assets/img/showDoctor/Banner.png";
// import map from "../assets/img/showDoctor/map.png";
import { SharedHero } from "../components";
import ContactDoctorForm from "../components/doctorInformation/ContactDoctorForm";
import { useTranslation } from "react-i18next";
const DoctorInformation = () => {
  const { t } = useTranslation("doctorInformation");
  return (
    <main className="mb-32">
      <SharedHero />
      <section>
        <div className="relative h-[500px] max-w-8xl md:mx-10 mx-auto px-5 md:px-10 rounded-t-2xl  p-3 mt-[-180px]">
          <div className="w-full h-full object-cover rounded-2xl overflow-hidden mt-5">
            <img className="w-full h-full object-cover" src={banner} alt="" />
          </div>
        </div>
        <div className="max-w-8xl md:mx-10 mx-auto px-5 md:px-10 mt-10">
          <div className="flex  md:flex-row flex-col">
            <div className="basis-3/4">
              <div className="w-full  flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch  text-[#292929] text-[32px] font-bold font-['Segoe UI']">
                    {t("name")}
                  </div>
                  <div className="self-stretch  text-[#464646] text-xl font-normal font-['Segoe UI'] leading-loose">
                    {t("slug")}
                  </div>
                </div>
                <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch  text-[#292929] text-xl font-semibold font-['Segoe UI']">
                    {t("prefe")}
                  </div>
                  <div className="self-stretch  text-[#464646] text-base font-normal font-['Segoe UI'] leading-relaxed">
                    {t("description")}
                  </div>
                </div>
                <div className="self-stretch  flex-col justify-start items-start gap-8 flex">
                  <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch  text-[#292929] text-xl font-semibold font-['Segoe UI']">
                      {t("specials")}
                    </div>
                    <div className="self-stretch  text-[#464646] text-[15px] font-normal font-['Segoe UI'] leading-normal">
                      يتميز د. فهد بخبرته الواسعة في المجالات التالية:
                    </div>
                  </div>
                  <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch  text-[#e8604b] text-base font-semibold font-['Segoe UI'] leading-relaxed">
                      إصلاح الأسنان التجميلية:
                    </div>
                    <div className="self-stretch pr-[25px] justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0  text-[#464646] text-[15px] font-normal font-['Segoe UI'] leading-normal">
                        ترميم الأسنان التالفة باستخدام أحدث المواد والتقنيات.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch  text-[#e8604b] text-base font-semibold font-['Segoe UI'] leading-relaxed">
                      زراعة الأسنان:
                    </div>
                    <div className="self-stretch pr-[25px] justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0  text-[#464646] text-[15px] font-normal font-['Segoe UI'] leading-normal">
                        توفير حلول دائمة للأسنان المفقودة من خلال زراعة الأسنان.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch  text-[#e8604b] text-base font-semibold font-['Segoe UI'] leading-relaxed">
                      ابتسامة هوليوود:
                    </div>
                    <div className="self-stretch pr-[25px] justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0  text-[#464646] text-[15px] font-normal font-['Segoe UI'] leading-normal">
                        تصميم ابتسامة مثالية باستخدام تقنيات متقدمة.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch  text-[#e8604b] text-base font-semibold font-['Segoe UI'] leading-relaxed">
                      علاج أمراض اللثة:
                    </div>
                    <div className="self-stretch pr-[25px] justify-center items-center gap-2.5 inline-flex">
                      <div className="grow shrink basis-0  text-[#464646] text-[15px] font-normal font-['Segoe UI'] leading-normal">
                        معالجة مشاكل اللثة لتحسين صحة الفم العامة.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch  text-[#292929] text-xl font-semibold font-['Segoe UI']">
                    {t("mind-set")}
                  </div>
                  <div className="self-stretch  text-[#464646] text-base font-normal font-['Segoe UI'] leading-relaxed">
                    يؤمن د. فهد الطاسان بأن كل مريض يستحق علاجًا مخصصًا يتناسب
                    مع احتياجاته الفردية. يسعى دائمًا إلى توفير بيئة مريحة
                    ومرحبة للمرضى، مع تقديم توعية شاملة حول العناية بالأسنان
                    لضمان الحفاظ على صحة الفم والأسنان على المدى الطويل.
                  </div>
                </div>
                <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch  text-[#292929] text-xl font-semibold font-['Segoe UI']">
                    {t("certificate")}
                  </div>
                  <div className="self-stretch  text-[#464646] text-base font-normal font-['Segoe UI'] leading-relaxed">
                    حاصل على تقدير عالي من [اسم الجهة المانحة] نظير تفوقه في
                    تقديم خدمات طب الأسنان. د. فهد شارك في العديد من المؤتمرات
                    والدورات التدريبية ليبقى على اطلاع بأحدث التطورات في مجاله.
                  </div>
                </div>
                <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch  text-[#292929] text-xl font-semibold font-['Segoe UI']">
                    {t("appointment")}
                  </div>
                  <div className="self-stretch  text-[#464646] text-base font-normal font-['Segoe UI'] leading-relaxed">
                    د. فهد متاح للاستشارات والعلاجات في [اسم العيادة أو المركز
                    الطبي]. للحجز أو الاستفسار، يمكنك التواصل عبر [رقم الهاتف]
                    أو زيارة الموقع الإلكتروني [رابط الموقع].
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/4 flex justify-end">
              <a
                href="#contact-doctor-form"
                className="bg-[#6b96a5] w-full h-[55px] text-white p-4 rounded-2xl text-center mt-5 md:mt-0"
              >
                {t("serve-now")}
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-8xl md:mx-10 mx-auto px-5 md:px-10 mt-10">
          <div className="w-full py-[100px] flex-col justify-center items-center gap-16 inline-flex">
            <div className="flex-col justify-start items-center gap-12 flex">
              <h4 className="max-w-2xl text-center text-[#292929] text-[30px] md:text-[68.91px] font-bold font-['Segoe UI'] leading-[82.69px]">
                {t("we-smile")}
              </h4>
              <p className="self-stretch text-center text-[#656565] text-[10px] text-base font-semibold font-['Segoe UI'] leading-relaxed">
               {t("inform")}
              </p>
            </div>
          </div>
        </div>

        <ContactDoctorForm />
      </section>
    </main>
  );
};

export default DoctorInformation;
