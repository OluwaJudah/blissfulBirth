import { steps } from "@/data";
import { BackArrowButton, BackButton, NextButton } from "@/components/Buttons";
const MotherInfoForm = () => {
  return (
    <div className="flex h-screen items-center ">
      <main className="relative md:rounded-3xl md:shadow-2xl bg-gradient-to-r from-turquoise-100 to-turquoise-50 h-full md:h-[850px] border md:border-gray-400/2 w-[400px] md:w-[370px] mx-auto md:overflow-scroll">
        <div className="absolute left-0 -bottom-300 flex flex-col w-full">
          <div className="flex justify-between px-5 bg-gradient-to-r from-turquoise-100 to-turquoise-50 py-2 sticky top-0">
            <div className="flex gap-2 items-center">
              <BackArrowButton />
              <span className="font-mono leading-none text-xl text-turquoise-900 font-semibold">
                Mother's Details
              </span>
            </div>
          </div>
          <div className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] py-8 md:py-4 px-7 md:overflow-scroll">
            <div className="flex flex-row gap-4">
              {steps.map((step) => (
                <div
                  key={step}
                  className={`w-4 h-4 ${
                    step === 1 ? "bg-pinklet-400" : "border border-pinklet-400"
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
              <div className="flex flex-col my-3">
                <label className="font-mono text-turquoise-900" htmlFor="">
                  Maiden Name
                </label>
                <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                  <input
                    placeholder="E.g Doe"
                    className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col my-3">
                <label className="font-mono text-turquoise-900" htmlFor="">
                  ID / Passport
                </label>
                <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                  <input
                    placeholder="E.g 93023234000 / D2341SDFASDF"
                    className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col my-3">
                <label className="font-mono text-turquoise-900" htmlFor="">
                  Date of Birth
                </label>
                <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                  <input
                    className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                    type="date"
                  />
                </div>
              </div>
              <div className="flex flex-col my-3">
                <label className="font-mono text-turquoise-900" htmlFor="">
                  Country of Origin
                </label>
                <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                  <input
                    placeholder="E.g South Africa"
                    className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col my-3">
                <label className="font-mono text-turquoise-900" htmlFor="">
                  Day Job / Occupation
                </label>
                <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                  <input
                    placeholder="E.g Nurse"
                    className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col my-3">
                <label className="font-mono text-turquoise-900" htmlFor="">
                  Contact Number
                </label>
                <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                  <div>+27</div>
                  <input
                    placeholder="E.g 0677123123123"
                    className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col my-3">
                <label className="font-mono text-turquoise-900" htmlFor="">
                  Email Address
                </label>
                <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                  <input
                    placeholder="E.g john@doe.com"
                    className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                    type="email"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <BackButton />
              <NextButton url={"/register?type=birth-companion-info"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MotherInfoForm;
