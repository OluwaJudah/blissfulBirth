import { features } from "@/data";
import EmblaCarouselWrapper from "@/components/(protected)/carousel/EmblaCarouselWrapper";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <p className="font-mono font-bold text-turquoise-900">Features</p>
      <div className="flex flex-row space-x-10">
        <EmblaCarouselWrapper>
          {features.map((feature, index) => (
            <div
              className="embla__slide h-[175px] md:w-[105px] w-[115px]"
              key={index}
            >
              <div className="embla__slide__number flex items-center justify-center rounded-[2rem] bg-turquoise-100 md:w-[138px] md:h-[135px] w-[145px] h-[140px] shadow-xl">
                <div className="flex flex-col items-center gap-2 p-3">
                  <div className="flex justify-center items-center w-[60px] h-[60px] bg-turquoise-400 rounded-full overflow-hidden">
                    <feature.Icon color="#fff" size={35} />
                  </div>
                  <div className="font-sans text-sm tracking-tight font-semibold text-turquoise-800 text-center h-[30px]">
                    {feature.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </EmblaCarouselWrapper>
      </div>
    </div>
  );
};

export default Features;
