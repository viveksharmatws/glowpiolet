const LaunchAdsCard = ({ heading, description, imageSrc }) => {
  return (
    <div
      className="
        launch-ads-card relative 
        flex flex-col-reverse lg:!flex-row 
        items-stretch 
        justify-between 
        w-full h-full gap-5 lg:gap-[12px] 
        p-4 sm:p-[24px] 
        bg-custom-gradient rounded-[24px] 
        max-w-[456px] min-h-[200px]
      "
    >
      {/* Text Section */}
      <div className="flex flex-col flex-[3] text-center sm:!text-left justify-center">
  <h2
  className="font-inter font-semibold 
    leading-[34px] sm:leading-[41px] lg:leading-[48px] 
    tracking-[-1.5px] 
    text-xl sm:!text-2xl md:!text-3xl 
    text-transparent bg-clip-text   
    text-center
    lg:!text-left whitespace-nowrap overflow-hidden text-ellipsis"
  style={{
    background:
      "linear-gradient(180deg, #000000 22.5%, rgba(0,0,0,0.7) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  {heading}
</h2>

        <p
          className="font-inter font-normal 
            text-base sm:text-lg md:text-[18px] 
            leading-[26px] sm:leading-[30px] tracking-[-0.3px] 
            mt-2 
            text-center lg:!text-left"
          style={{ color: "rgba(98, 98, 102, 1)" }}
        >
          {description}
        </p>
      </div>

{/* Image Section */}
<div className="flex-[1] flex justify-center sm:justify-center items-center flex-shrink-0">
  <img
    src={imageSrc}
    alt="Illustration"
    className="
      w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] 
      min-w-[48px] min-h-[48px] 
      object-contain
    "
  />
</div>

    </div>
  );
};

export default LaunchAdsCard;
