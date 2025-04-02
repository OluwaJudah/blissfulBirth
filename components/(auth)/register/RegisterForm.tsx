"use client";
import { regsiterUser } from "@/actions/auth";
import { SubmitButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { registerFormData } from "@/data";
import { RegisterUserForm, registerUserformSchema } from "@/definitions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
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
        {registerFormData.map((data) => (
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
        <SubmitButton name="Sign Up" isPending={isPending} />
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
  );
};

export default RegisterForm;
