"use client";
import { useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { useEffect, useState } from "react";

const EmblaCarouselWrapper = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });
  const [transform, setTransform] = useState("");
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    setTimeout(() => setTransform("translate3d(-7px, 0px, 0px)"), 0);
  }, []);

  return (
    <section className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          style={{ transform }}
          className="flex touch-pan-y touch-pinch-zoom"
        >
          {children}
        </div>
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
