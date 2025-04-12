import Image from "next/image";
import { testimonials } from "@/data";
import EmblaCarouselWrapper from "@/components/(protected)/carousel/EmblaCarouselWrapper";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">Testimonials</p>
      <div className="flex flex-row gap-10">
        <EmblaCarouselWrapper>
          {testimonials.map((testimonial, index) => (
            <div
              className="embla__slide__1 h-[210px] md:w-[80px] w-[90px]"
              key={index}
            >
              <div className="embla__slide__number shadow-xl gap-4 flex flex-col w-[315px] md:w-[305px] h-[180px] bg-turquoise-100 rounded-2xl p-5 overflow-y-hidden">
                <div className="flex items-center gap-2">
                  <div className="flex justify-center items-center bg-turquoise-100 w-[30px] h-[30px] rounded-full">
                    <Image
                      className=""
                      src="/user_1.svg"
                      height={25}
                      width={25}
                      alt="User 1"
                    />
                  </div>
                  <p className="font-mono font-bold text-turquoise-900 text-medium">
                    {testimonial.name}
                  </p>
                </div>
                <p className="font-sans font-medium text-turquoise-900 text-sm overflow-hidden">
                  {testimonial.comment}
                </p>
              </div>
            </div>
          ))}
        </EmblaCarouselWrapper>
      </div>
    </div>
  );
};

export default Testimonials;
