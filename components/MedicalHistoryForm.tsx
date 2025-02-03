import { conditions, familyHistory, tbSymptomsScreen } from "@/data/conditions";
import {
  BabyInfoSkipButton,
  BirthCompanionButton,
  MedicalHistoryArrowButton,
  MedicalHistoryBackButton,
} from "./Buttons";
import Conditions from "./Conditions";

const MedicalHistoryForm = () => {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="flex h-screen items-center dark:bg-neutral-800">
      <main className="relative md:rounded-3xl md:shadow-2xl bg-gradient-to-r from-turquoise-100 to-turquoise-50 h-full md:h-[850px] border md:border-gray-400/2 w-[400px] md:w-[370px] mx-auto md:p-6 md:overflow-scroll">
        <div className="absolute left-0 bottom-0 flex flex-col w-full">
          <div className="flex justify-between px-5 bg-gradient-to-r from-turquoise-100 to-turquoise-50 py-2 sticky md:-top-10 top-0">
            <div className="flex gap-2 items-center">
              <MedicalHistoryArrowButton />
              <span className="font-mono leading-none text-xl text-turquoise-900 font-semibold">
                Medical History
              </span>
            </div>
            <div>
              <BabyInfoSkipButton />
            </div>
          </div>
          <div className="rounded-t-[50px] h-[93vh] bg-white py-8 md:py-4 px-7 flex flex-col md:overflow-scroll">
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-4">
                {steps.map((step) => (
                  <div
                    key={step}
                    className={`w-4 h-4 ${
                      step === 4
                        ? "bg-pinklet-400"
                        : "border border-pinklet-400"
                    }  rounded-full`}
                  ></div>
                ))}
              </div>
              <div className="w-full my-3">
                <div className="font-mono text-md font-semibold text-turquoise-900">
                  Conditions
                </div>
                <Conditions conditions={conditions} />
              </div>

              <div className="w-full my-3">
                <div className="font-mono text-md font-semibold text-turquoise-900">
                  Family History
                </div>
                <Conditions conditions={familyHistory} />
              </div>
              <div className="w-full mb-3">
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Details
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <input
                      placeholder="Enter details of Family history"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Medication
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <input
                      placeholder="Enter Medications"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Operations
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <input
                      placeholder="Enter Operations description"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Allergies
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <input
                      placeholder="Enter Allergies"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full my-3">
                <div className="font-mono text-md font-semibold text-turquoise-900">
                  TB symptoms screen
                </div>
                <Conditions conditions={tbSymptomsScreen} />
              </div>
              <div className="flex gap-3">
                <MedicalHistoryBackButton />
                <BirthCompanionButton />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalHistoryForm;
