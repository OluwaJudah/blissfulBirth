import EmblaCarouselWrapper from "../carousel/EmblaCarouselWrapper";
import MyReport from "./MyReport";
import MyPendingReport from "./MyPendingReport";

const MyBody = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Body</p>
      <div className="">
        <EmblaCarouselWrapper>
          <MyReport />
          <MyPendingReport />
        </EmblaCarouselWrapper>
      </div>
    </div>
  );
};

export default MyBody;
