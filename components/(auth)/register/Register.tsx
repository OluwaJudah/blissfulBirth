import { RegisterButton } from "@/components/Buttons";
import Image from "next/image";
import Link from "next/link";
const Register = () => {
  return (
    <div className="flex h-[98vh] md:h-screen items-center dark:bg-neutral-800">
      <main className="relative md:rounded-3xl md:shadow-2xl bg- bg-gradient-to-r from-turquoise-100 to-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto md:p-6 md:overflow-hidden">
        <div className="absolute left-0 bottom-0 flex flex-col w-full">
          <div className="bg-transparent flex w-100 justify-center">
            <div className="flex flex-col w-100 items-center justify-center">
              <Image
                className="mb-4"
                src="/blissfulLogo.svg"
                height={94}
                width={296}
                alt="BlissfulLogo"
              />
              <h3 className="font-mono font-semibold mb-6 md:text-3xl text-4xl text-turquoise-900 w-100">
                Blissful Birth
              </h3>
            </div>
          </div>
          <div className="rounded-t-[50px] h-[480px] bg-white py-16 px-7 flex flex-col justify-center">
            <h3 className="font-mono leading-none mb-4 text-xl text-turquoise-900 font-medium">
              Sign Up
            </h3>
            <div className="flex flex-col items-center">
              <div className="w-full mb-4">
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Username
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <Image
                      className=""
                      src="/femaleUser.svg"
                      height={23}
                      width={23}
                      alt="BlissfulLogo"
                    />
                    <input
                      placeholder="Username"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Password
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <Image
                      className=""
                      src="/passwordKey.svg"
                      height={23}
                      width={23}
                      alt="BlissfulLogo"
                    />
                    <input
                      placeholder="Password"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="password"
                    />
                  </div>
                </div>{" "}
                <div className="flex flex-col my-3">
                  <label className="font-mono text-turquoise-900" htmlFor="">
                    Confirm Password
                  </label>
                  <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
                    <Image
                      className=""
                      src="/passwordKey.svg"
                      height={23}
                      width={23}
                      alt="BlissfulLogo"
                    />
                    <input
                      placeholder="Confirm Password"
                      className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <div>
                <RegisterButton />
              </div>
              <p className="mt-5 text-sm text-turquoise-900">
                Already have an account?
                <Link
                  className="text-pinklet-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                  href="/login"
                >
                  Sign In here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
