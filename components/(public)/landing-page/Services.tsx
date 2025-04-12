import { services } from "@/data";
import Image from "next/image";
import EmblaCarouselWrapper from "@/components/(protected)/carousel/EmblaCarouselWrapper";

const Services = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <p className="font-mono font-bold text-turquoise-900">Services</p>
      <div className="flex flex-row space-x-10">
        <EmblaCarouselWrapper>
          {services.map((service, index) => (
            <div className="embla__slide h-[175px] md:w-[80px] w-[85px]" key={index}>
              <div className="embla__slide__number flex items-center justify-center rounded-[2rem] bg-turquoise-100 md:w-[140px] w-[145px] h-[140px] md:h-[135px] shadow-xl">
                <div className="flex flex-col items-center gap-2 p-3">
                  <div className="w-[74px] h-[57px] rounded-3xl overflow-hidden">
                    <Image
                      className="mb-4"
                      src={service.img}
                      height={77}
                      width={94}
                      alt={service.name}
                    />
                  </div>
                  <div className="font-sans text-sm tracking-tight font-semibold text-turquoise-800 text-center h-[20px]">
                    {service.name}
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

export default Services;
