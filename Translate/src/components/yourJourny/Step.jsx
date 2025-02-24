import useSmallScreen from "../../hooks/useSmallScreen";
import StepDescription from "./StepDescription";
import StepImageSection from "./StepImageSection";

// Reusable Step Component
const Step = ({ image, smallText, title, description, isImageFirst }) => {
  const isSmallScreen = useSmallScreen();

  return (
    <article className="flex gap-5 md:gap-[200px] flex-col md:flex-row">
      {!isSmallScreen ? (
        <>
          {isImageFirst ? (
            <>
              <StepImageSection image={image} title={title} />
              <StepDescription
                smallText={smallText}
                title={title}
                description={description}
              />
            </>
          ) : (
            <>
              <StepDescription
                smallText={smallText}
                title={title}
                description={description}
              />
              <StepImageSection image={image} title={title} />
            </>
          )}
        </>
      ) : (
        <>
          <StepDescription
            smallText={smallText}
            title={title}
            description={description}
          />
          <StepImageSection image={image} title={title} />
        </>
      )}
    </article>
  );
};

export default Step;
// import useSmallScreen from "../../hooks/useSmallScreen";
// import StepDescription from "./StepDescription";
// import StepImageSection from "./StepImageSection";

// // Reusable Step Component
// const Step = ({ image, smallText, title, description, isImageFirst }) => {
//   const isSmallScreen = useSmallScreen();

//   return (
//     <article className="flex gap-5 md:gap-[200px] flex-col md:flex-row">
//       {!isSmallScreen ? (
//         <div className="flex my-[200px]  max-sm:my-[100px] flex-col justify-center m-auto md:flex-row mb-[200px]">
//           {isImageFirst ? (
//             <div className="flex  gap-[300px] items-center justify-between mb-[-100px] ">
//               <StepImageSection image={image} title={title} />
//               <StepDescription
//                 smallText={smallText}
//                 title={title}
//                 description={description}
//               />
//             </div>
//           ) : (
//             <div className="flex gap-[300px]  items-center justify-between mb-[-100px] ">
//               <StepDescription
//                 smallText={smallText}
//                 title={title}
//                 description={description}
//               />
//               <StepImageSection image={image} title={title} />
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <StepImageSection image={image} title={title} />

//           <StepDescription
//             smallText={smallText}
//             title={title}
//             description={description}
//           />
//         </div>
//       )}
//     </article>
//   );
// };

// export default Step;
