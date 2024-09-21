import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { LoginForm, LoginFormProps } from "../LoginForm/LoginForm.js";
import { SignUpForm, SignUpFormProps } from "../SignUpForm/SignUpForm.js";

export interface AuthFormProps {
  onLoginSubmit: LoginFormProps["onSubmit"];
  onSignUpSubmit: SignUpFormProps["onSubmit"];
}

export const AuthForm = ({ onLoginSubmit, onSignUpSubmit }: AuthFormProps) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleModeSwitch = () => {
    setIsLoginMode((prev) => !prev);
  };

  if (isLoginMode) {
    return (
      <Box>
        <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
          Log in
        </Typography>
        <LoginForm onSubmit={onLoginSubmit} />
        <Typography sx={{ textAlign: "center" }}>
          {`Don't have an account?`}
          <Button variant="text" onClick={handleModeSwitch}>
            Sign up
          </Button>
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
        Sign up
      </Typography>
      <SignUpForm onSubmit={onSignUpSubmit} />
      <Typography sx={{ textAlign: "center" }}>
        Already have an account?
        <Button variant="text" onClick={handleModeSwitch}>
          Log in
        </Button>
      </Typography>
    </Box>
  );
};
