import right from "../../assets/img/kids/right.png";
import left from "../../assets/img/kids/left.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const KidsSectionFive = () => {
  const { t } = useTranslation("doctorInformation");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.yourdomain.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission
        navigate("/thank-you"); // You can navigate to a thank you page
      } else {
        // Handle form submission error
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  return (
    <section>
      <div className="flex flex-col md:flex-row mb-10">
        <div className="h-[800px] ml-[-100px] w-full hidden lg:flex z-0 mt-[-100px]">
          <img className="w-full" src={right} alt="" />
        </div>

        <div className="max-w-xl  mx-auto overflow-hidden p-5 w-full z-50">
          <div className="w-[90%] rounded-2xl h-[400px] mb-[-390px] rotate-[5.36deg] bg-white p-5 rounded-[20px] border border-[#82cddc] z-50"></div>
          <div className="rounded-2xl bg-white p-5 rotate-[0deg] rounded-[20px] shadow border-2 border-[#eb6a48] z-0 ">
            <form
              id="contact-doctor-form"
              onSubmit={handleSubmit}
              className="flex-col justify-start items-center gap-[47px] inline-flex"
            >
              <div className="h-[92px] flex-col justify-start items-center gap-8 flex">
                <div className="self-stretch text-center text-[#292929] text-[40px] font-bold font-['Segoe UI'] leading-[48px]">
                  {t("s11-stay-at-contact")}
                </div>
                <div className="self-stretch text-center text-[#656565] text-sm font-semibold font-['Segoe UI'] leading-snug">
                  {t("s10-slug")}
                </div>
              </div>

              <div className="self-stretch h-[546px] flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch h-[486px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3.5 flex">
                    <label className="grow shrink basis-0 text-right text-[#3d3d3d] text-sm font-bold font-['Segoe UI'] leading-snug">
                      {t("s11-full-name")}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="self-stretch h-[60px] bg-[#f9f9f9] rounded-[10px] border border-[#e0917c] p-2"
                      placeholder={t("s11-full-name")}
                    />
                  </div>

                  <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3.5 flex">
                    <label className="grow shrink basis-0 text-right text-[#3d3d3d] text-sm font-bold font-['Segoe UI'] leading-snug">
                      {t("s11-phone-number")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="self-stretch h-[60px] bg-[#f9f9f9] rounded-[10px] border border-[#e0917c] p-2"
                      placeholder={t("s11-phone-number")}
                    />
                  </div>

                  <div className="self-stretch h-[84px] flex-col justify-start items-start gap-3.5 flex">
                    <label className="grow shrink basis-0 text-right text-[#3d3d3d] text-sm font-bold font-['Segoe UI'] leading-snug">
                      {t("s11-email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="self-stretch h-[60px] bg-[#f9f9f9] rounded-[10px] border border-[#e0917c] p-2"
                      placeholder={t("s11-email")}
                    />
                  </div>

                  <div className="self-stretch h-[162px] flex-col justify-start items-start gap-3.5 flex">
                    <label className="grow shrink basis-0 text-right text-[#3d3d3d] text-sm font-bold font-['Segoe UI'] leading-snug">
                      {t("s11-message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="h-full self-stretch bg-[#f9f9f9] rounded-[10px] border border-[#e0917c] p-2"
                      placeholder={t("s11-message")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="self-stretch h-11 p-2.5 bg-[#eb6a48] rounded-[50px] justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-right text-white text-sm font-semibold font-['Segoe UI'] leading-snug">
                    {t("s11-send")}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="h-[800px] mr-[-100px] w-full hidden lg:flex z-0 mt-[-100px]">
          <img className="w-full" src={left} alt="" />
        </div>
      </div>
    </section>
  );
};

export default KidsSectionFive;
