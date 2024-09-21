import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, CardContent, TextField } from "@mui/material";
import { LoginInput } from "../../generated/graphql.js";

const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));

const StyledButton = styled(Button)(() => ({
  alignSelf: "center",
}));

export interface LoginFormProps {
  onSubmit: (values: LoginInput) => void;
  initialValues?: LoginInput;
}

const DEFAULT_VALUES: LoginInput = { email: "", password: "" };

export const LoginForm = ({
  onSubmit,
  initialValues = DEFAULT_VALUES,
}: LoginFormProps) => {
  const [values, setValues] = useState<LoginInput>({
    ...DEFAULT_VALUES,
    ...initialValues,
  });
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setValues((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledCardContent>
        <TextField
          required
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          required
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={handleChange}
        />
        <StyledButton variant="contained" type="submit">
          Login
        </StyledButton>
      </StyledCardContent>
    </form>
  );
};
