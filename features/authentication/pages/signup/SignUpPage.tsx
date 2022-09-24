import { Button, Card, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { routes } from "../../../../core/routes/routes";
import { signUpSchema } from "./SignUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store";
import { signUpAction } from "../../redux/thunkActions";
import { ThunkStatuses } from "../../../../core/constants/RequestStatuses";

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { registrationStatus } = useAppSelector((root) => root.authentication);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(signUpSchema) });

  useEffect(() => {
    if (registrationStatus === ThunkStatuses.FULLFILLED) {
      router.push("/");
    }
  }, [registrationStatus]);

  const handleRedirect = () => {
    router.push(routes.login);
  };

  const submitHandler = (data: SignUpFormData) => {
    const { email, password } = data;
    const newData = {
      email: email,
      password: password,
    };
    dispatch(signUpAction(newData));
  };

  return (
    <div className="bg-secondary w-screen h-screen flex justify-center items-center px-4">
      <Card className="w-full p-8">
        <Typography variant="h2" className="mb-6 text-center">
          Create an account
        </Typography>
        <form
          className="flex flex-col gap-4 mb-4"
          onSubmit={handleSubmit((data) => submitHandler(data))}
        >
          <TextField variant="outlined" label="Email" {...register("email")} />
          <Typography variant="h5" className="text-error ml-6 ">
            {errors.email?.message}
          </Typography>
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            {...register("password")}
          />
          <Typography variant="h5" className="text-error ml-6 ">
            {errors.password?.message}
          </Typography>
          <TextField
            variant="outlined"
            label="Confirm password"
            type="password"
            {...register("confirmPassword")}
          />
          <Typography variant="h5" className="text-error ml-6 ">
            {errors.confirmPassword?.message}
          </Typography>
          <Button type="submit" variant="contained" className="h-14 text-base">
            Create Account
          </Button>
          <Button
            variant="text"
            className="h-14 text-base"
            onClick={handleRedirect}
          >
            <Typography className="normal-case">
              I already have an account
            </Typography>
          </Button>
        </form>
      </Card>
    </div>
  );
};
