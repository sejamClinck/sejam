import banner from "../../assets/img/showPost/banner.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PostHeaderSection = () => {
  const { t } = useTranslation("sgamBediaPost");
  return (
    <header aria-label="Post Header Section">
      <section className="relative max-w-8xl mx-auto md:mx-10 overflow-hidden rounded-2xl p-3 mt-[-400px]">
        <div
          className="h-[506px] w-full bg-cover bg-center rounded-2xl mt-[90px]"
          style={{ backgroundImage: `url(${banner})` }}
          aria-label="Dental care banner"
        >
          <div className="flex items-end justify-end">
            <Link
              to={"/blog"}
              className="text-center p-3 m-5 rounded-3xl bg-black/10 w-[140px] text-white flex items-center justify-center gap-1"
            >
              {t("blog")}
              <svg
                className="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="15 6 9 12 15 18" />
              </svg>{" "}
            </Link>
          </div>
          <div className="max-w-4xl h-full flex flex-col  justify-end gap-[29px] mt-[-100px]">
            <div className="p-5">
              <h1 className="text-right text-white text-[48.89px] font-bold leading-tight font-sans">
               {t("title")}
              </h1>
              <p className="p-[10.24px] bg-[#fef4f2] mt-5 w-[270px] rounded-full text-[#eb6a48] text-base font-normal text-center">
                {t("slug")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default PostHeaderSection;
