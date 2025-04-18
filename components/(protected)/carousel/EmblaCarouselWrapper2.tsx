"use client";
import { useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { useEffect, useState } from "react";
import { appointmentWeeks } from "@/constants/appointment";

const EmblaCarouselWrapper = ({
  pregnancyWeeks,
  children,
}: {
  pregnancyWeeks: number;
  children: React.ReactNode;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });
  const [transform, setTransform] = useState("");
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    setTimeout(() => setTransform("translate3d(-7px, 0px, 0px)"), 0);
  }, []);

  return (
    <section className="embla flex flex-col gap-3">
      <div className="overflow-x-auto pb-3">
        <div className="embla__dots flex items-center px-1 gap-4 w-[668px]">
          {scrollSnaps.map((_, index) => {
            const selected =
              index === selectedIndex
                ? "bg-pinklet-500 text-white"
                : "border border-pinklet-400";
            const completed =
              appointmentWeeks[index] <= pregnancyWeeks
                ? "bg-pinklet-400 text-white border-none"
                : "";

            return (
              <div
                onClick={() => onDotButtonClick(index)}
                key={index}
                className={`w-8 h-8 flex justify-center items-center cursor-pointer ${selected} ${completed} rounded-full`}
              >
                <span className="">{appointmentWeeks[index]}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          style={{ transform }}
          className="flex touch-pan-y touch-pinch-zoom"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselWrapper;
