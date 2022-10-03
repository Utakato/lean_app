import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  Typography,
  TextField,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ThunkStatuses } from "../../../../core/constants/RequestStatuses";
import { useAppDispatch, useAppSelector } from "../../../../core/redux/store";
import { routes } from "../../../../core/routes/routes";
import { AuthWrapper } from "../../components";
import { forgotPasswordAction } from "../../redux";
import { forgotPasswordSchema } from "./ForgotPasswordSchema";

interface ForgotPasswordFormData {
  email: string;
}

const defaultValues = {
  email: "",
};

export const ForgotPasswordPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { forgotPasswordStatus } = useAppSelector(
    (root) => root.authentication
  );

  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(forgotPasswordSchema) });

  useEffect(() => {
    if (forgotPasswordStatus === ThunkStatuses.FULLFILLED) {
      setModalOpen(true);
    }
  }, [forgotPasswordStatus]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOk = () => {
    setModalOpen(false);
    router.push("/");
  };

  const submitHandler = (data: ForgotPasswordFormData) => {
    const { email } = data;
    const newData = {
      email: email,
    };
    dispatch(forgotPasswordAction(newData));
  };

  const handleRedirect = () => {
    router.push(routes.login);
  };
  return (
    <AuthWrapper>
      <div className="bg-secondary w-screen h-screen flex justify-center items-center px-4">
        <Card className="w-full p-8">
          <Typography variant="h2" className="mb-6 text-center">
            Forgot password
          </Typography>
          <form
            onSubmit={handleSubmit((data) => submitHandler(data))}
            className="flex flex-col gap-6 mb-4"
          >
            <TextField
              variant="outlined"
              label="Email"
              {...register("email")}
            />
            <Typography variant="h5" className="text-error ml-6 ">
              {errors.email?.message}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              className="h-14 text-base"
            >
              Send reset password link
            </Button>
            <Button
              variant="text"
              className="h-14 text-base"
              onClick={handleRedirect}
            >
              <Typography className="normal-case">Go back to login</Typography>
            </Button>
          </form>
        </Card>
        <Dialog open={modalOpen} onClose={handleModalClose}>
          <DialogTitle>
            <Typography className="text-xl">Email sent succesfully!</Typography>
          </DialogTitle>
          <DialogContentText className="px-6">
            You will receive an email with a password reset link.
          </DialogContentText>
          <DialogActions>
            <Button variant="contained" onClick={handleModalOk} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </AuthWrapper>
  );
};
