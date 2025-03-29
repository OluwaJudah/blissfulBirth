"use client";
import { regsiterUser } from "@/actions/auth";
import { RegisterButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { RegisterUserForm, registerUserformSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const initialState = {
    message: "",
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    regsiterUser,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserForm>({
    resolver: zodResolver(registerUserformSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex h-[98vh] md:h-screen items-center ">
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
            <form
              ref={formRef}
              onSubmit={(evt) => {
                evt.preventDefault();
                handleSubmit(() => {
                  const formData = new FormData(formRef.current!);
                  startTransition(() => {
                    formAction(formData);
                  });
                })(evt);
              }}
              className="flex flex-col items-center"
            >
              <div className="w-full mb-4">
                <InputValidated
                  label="Username"
                  name="username"
                  placeholder="E.g johnDoe, johndoe@gmail.com, 061 234 5678, etc..."
                  register={register}
                  iconUrl="/femaleUser.svg"
                  errors={errors}
                  bgColour="bg-turquoise-50"
                  isPending={isPending}
                  stateError={state?.errors?.username}
                />
                <InputValidated
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  register={register}
                  iconUrl="/passwordKey.svg"
                  errors={errors}
                  bgColour="bg-turquoise-50"
                  isPending={isPending}
                  stateError={state?.errors?.password}
                />
                <InputValidated
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  register={register}
                  iconUrl="/passwordKey.svg"
                  errors={errors}
                  bgColour="bg-turquoise-50"
                  isPending={isPending}
                  stateError={state?.errors?.confirmPassword}
                />
              </div>
              <div>
                <RegisterButton isPending={isPending} />
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
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
