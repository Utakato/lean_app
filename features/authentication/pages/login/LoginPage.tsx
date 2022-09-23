import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Typography, TextField, Button, Divider } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ThunkStatuses } from "../../../../core/constants/RequestStatuses";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store";
import { routes } from "../../../../core/routes/routes";
import { loginAction } from "../../redux/thunkActions";
import { LoginData } from "../../redux/types";
import { signUpSchema } from "../signup/SignUpSchema";
import { loginSchema } from "./LoginSchema";

const defaultValues = {
  email: "",
  password: "",
};

export const LoginPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loginStatus } = useAppSelector((root) => root.authentication);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (loginStatus === ThunkStatuses.FULLFILLED) {
      router.push("/");
    }
  }, [loginStatus]);

  const submitHandler = (data: LoginData) => {
    const { email, password } = data;
    const newData = {
      email: email,
      password: password,
    };
    console.log(newData);
    dispatch(loginAction(newData));
  };

  const handleRegisterRedirect = () => {
    router.push(routes.register);
  };

  const handleForgotPasswordRedirect = () => {
    router.push(routes.forgotPassword);
  };

  return (
    <div className="bg-secondary w-screen h-screen flex justify-center items-center px-4">
      <Card className="w-full p-8">
        <Typography variant="h2" className="mb-6 text-center">
          Login
        </Typography>
        <form
          onSubmit={handleSubmit((data) => submitHandler(data))}
          className="flex flex-col gap-4 mb-4"
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
          <Button type="submit" variant="contained" className="h-14 text-base">
            Login
          </Button>
          <div className="flex flex-col items-center">
            <Button
              variant="text"
              className="h-14 text-base"
              onClick={handleRegisterRedirect}
            >
              <Typography className="normal-case">
                I want to create an account
              </Typography>
            </Button>
            <Button
              variant="text"
              className="text-base"
              onClick={handleForgotPasswordRedirect}
            >
              <Typography className="normal-case text-textSecondary">
                I forgot my password
              </Typography>
            </Button>
          </div>
        </form>
        <Divider>
          <Typography className="text-textSecondary">OR</Typography>
        </Divider>
        <div className="w-full h-full flex flex-col gap-4 mt-4">
          <Button
            variant="outlined"
            className="h-14 text-base text-textSecondary border-textSecondary"
          >
            Continue with Google
          </Button>
          <Button variant="outlined" className="h-14 text-base text-white">
            Continue with Facebook
          </Button>
        </div>
      </Card>
    </div>
  );
};
