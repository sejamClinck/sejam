import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To get postId from URL

import { SharedHero, PostHeaderSection, Swapper } from "../components";

import { useTranslation } from "react-i18next";

const SgamBediaPost = () => {
  const { t, i18n } = useTranslation("sgamBedia");
  const { postId } = useParams(); // Get postId from the URL
  const [post, setPost] = useState(null); // To store blog data
  const [loading, setLoading] = useState(true); // For loading state
  const lang = i18n.language; // Get the current language from i18next

  useEffect(() => {
    // Fetch blog post data
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(
         `https://sijamdashboard.com/api/blogs/${postId}`,
          {
            params: { lang: i18n.language }, // pass the current language
          }
        );
        // console.log("API Response:", response.data); // Add this to check the structure
        setPost(response.data.data); // Set the blog data
        setLoading(false); // Turn off loading
      } catch (error) {
        console.error("Error fetching the blog post:", error);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [postId, lang]); // Fetch data when postId or lang changes

  // If still loading, show a loading spinner or message
  if (loading) {
    return <div>Loading...</div>;
  }
 
  return (
    <main className="">
      <SharedHero />
      {/* take title tage and imageUrl */}
       {/* Pass title, tag, and imageUrl from the blog data */}
       {post && (
        <PostHeaderSection title={post.title} tag={post.tag} imageUrl={post.imageUrl} />
      )}

      <section>
        <div className="max-w-8xl mx-auto px-2 md:px-10 my-[50px] flex flex-col items-center justify-center mt-5">
          <div className="flex gap-5 w-full md:flex-row flex-col">
            <div className="w-full bg-white rounded-2xl p-3">
              <div className="  text-[#292929] text-xl font-bold font-['Segoe UI']">
                {post?.description}
              </div>
              <div className=" my-3  text-[#656565] text-base font-normal font-['Segoe UI']">
                {post?.content}
              </div>
              <div className=" my-3  text-[#292929] text-xl font-bold font-['Segoe UI']">
                {t("content-artical")}
              </div>
              <img
                className=" my-3 rounded-[20px] h-[400px] w-full object-cover"
                src={post?.imageUrl}
              />
              {/* Steps section */}
              {post?.steps?.map((step, index) => (
                <div key={index} className="my-3 flex-col gap-4 mt-5">
                  <div className="self-stretch text-[#292929] text-xl font-semibold">
                    {step.title}
                  </div>
                  <div className="self-stretch text-[#656565] text-base font-normal mx-5">
                    {step.description}
                  </div>
                </div>
              ))}
              <Swapper />
            </div>
           
          </div>
        </div>
      </section>
    </main>
  );
};

export default SgamBediaPost;
