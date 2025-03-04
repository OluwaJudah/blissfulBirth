import { BackArrowButton, BackButton, NextButton, SkipButton } from "@/components/Buttons";
import { steps } from "@/data";

const BabyInfoForm = () => {
  return (
    <div className="flex h-screen items-center ">
      <main className="relative md:rounded-3xl md:shadow-2xl bg-gradient-to-r from-turquoise-100 to-turquoise-50 h-full md:h-[850px] border md:border-gray-400/2 w-[400px] md:w-[370px] mx-auto md:p-6 md:overflow-scroll">
        <div className="absolute left-0 bottom-0 flex flex-col w-full">
          <div className="flex justify-between px-5 bg-gradient-to-r from-turquoise-100 to-turquoise-50 py-2 sticky md:-top-10 top-0">
            <div className="flex gap-2 items-center">
              <BackArrowButton />
              <span className="font-mono leading-none text-xl text-turquoise-900 font-semibold">
                Baby's Info
              </span>
            </div>
            <div>
              <SkipButton url={"/register?type=medical-history"} />
            </div>
          </div>
          <div className="rounded-t-[50px] h-[93vh] bg-white py-8 md:py-4 px-7 flex flex-col md:overflow-scroll">
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-4">
                {steps.map((step) => (
                  <div
                    key={step}
                    className={`w-4 h-4 ${
                      step === 3
                        ? "bg-pinklet-400"
                        : "border border-pinklet-400"
                    }  rounded-full`}
                  ></div>
                ))}
              </div>
              <div className="w-full mb-2">
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Full Name
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <input
                      placeholder="E.g John"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Surname
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <input
                      placeholder="E.g Doe"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <BackButton />
                <NextButton url={"/register?type=medical-history"} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BabyInfoForm;
