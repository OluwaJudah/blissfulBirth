import React from "react";
import BabyReport from "./BabyReport";
import EmblaCarouselWrapper from "../carousel/EmblaCarouselWrapper";
import BabyPendingReport from "./BabyPendingReport";

const MyBaby = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Baby</p>
      <div className="">
        <EmblaCarouselWrapper>
          <BabyReport />
          <BabyPendingReport />
        </EmblaCarouselWrapper>
      </div>
    </div>
  );
};

export default MyBaby;
