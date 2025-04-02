"use client";
import { loginUser } from "@/actions/auth";
import { SubmitButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { loginFormData } from "@/data";
import { LoginUserForm, loginUserformSchema } from "@/definitions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const initialState = {
    message: "",
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    loginUser,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserForm>({
    resolver: zodResolver(loginUserformSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

  return (
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
      {" "}
      <div className="w-full mb-4">
        {loginFormData.map((data) => (
          <InputValidated
            key={data.name}
            {...data}
            register={register}
            errors={errors}
            isPending={isPending}
            stateError={state?.errors}
          />
        ))}
      </div>
      <div>
        <SubmitButton name="Sign In" isPending={isPending} />
      </div>
      <p className="mt-5 text-sm text-turquoise-900">
        Don't have an account yet?
        <Link
          className="text-pinklet-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
          href="/register"
        >
          Sign Up here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
