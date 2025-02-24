import { Link } from "react-router-dom";

const BlogPost = ({ id, title, content, imageUrl, tag }) => (
  <Link to={`/blog/${id}`} className="block">
    <div className="p-2.5 bg-white rounded-2xl justify-center items-center gap-2.5 inline-flex m-1">
      <div className="flex-col justify-start items-start gap-[7px] inline-flex">
        <img className="self-stretch rounded-2xl" src={imageUrl} alt={title} />
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch text-right text-[#292929] text-sm font-bold font-['Segoe UI']">
              {title}
            </div>
            <div className="self-stretch text-right text-[#656565] text-[13px] font-normal font-['Segoe UI']">
              {content}
            </div>
          </div>
          <div className="p-2.5 bg-[#fef4f2] rounded-[120px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-right text-[#eb6a48] text-[10px] font-normal font-['Segoe UI']">
              {tag}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default BlogPost;
