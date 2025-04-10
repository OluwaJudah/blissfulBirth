"use client";
import { useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";

const EmblaCarouselWrapper = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>

      <div className="flex justify-center">
        <div className="embla__dots flex flex-row justify-center gap-4">
          {scrollSnaps.map((_, index) => (
            <div
              onClick={() => onDotButtonClick(index)}
              key={index}
              className={`w-3 h-3 ${
                index === selectedIndex
                  ? "bg-pinklet-400"
                  : "border border-pinklet-400"
              }  rounded-full`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselWrapper;
