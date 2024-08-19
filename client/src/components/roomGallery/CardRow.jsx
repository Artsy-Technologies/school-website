/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const CardRow = ({ images, title, description, buttonSrc }) => {
  return (
    <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
      <div className="flex items-start gap-10 px-[50px] py-0 relative self-stretch w-full flex-[0_0_auto] z-[1]">
        {images.map((src, index) => (
          <img
            key={index}
            className="relative flex-1 grow h-[304px] object-cover"
            alt={`Image ${index + 1}`}
            src={src}
          />
        ))}
      </div>
      <div className="flex flex-col items-start gap-10 pt-[200px] pb-[50px] px-[50px] relative self-stretch w-full flex-[0_0_auto] mt-[-159px] z-0 bg-absolutewhite rounded-xl overflow-hidden border-2 border-solid border-grey-15 shadow-[6px_6px_0px_2px_#1e1e1e]">
        <div className="flex items-end gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex-1 [font-family:'Raleway-Bold',Helvetica] font-bold text-[#7134f1] text-[40px] tracking-[0] leading-[52.0px]">
            {title}
          </div>
          {buttonSrc && (
            <img
              className="relative flex-[0_0_auto]"
              alt="Buttons container"
              src={buttonSrc}
            />
          )}
        </div>
        <p className="relative self-stretch [font-family:'Outfit-Medium',Helvetica] font-medium text-grey-30 text-[22px] tracking-[0] leading-[33px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardRow;
