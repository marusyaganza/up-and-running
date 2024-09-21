import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, CardContent, TextField } from "@mui/material";
import { Role, SignUpInput } from "../../generated/graphql.js";
import { Select } from "../Select/Select.js";

const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));

const StyledButton = styled(Button)(() => ({
  alignSelf: "center",
}));

export interface SignUpFormProps {
  onSubmit: (values: SignUpInput) => void;
  initialValues?: SignUpInput;
}

const DEFAULT_VALUES: SignUpInput = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

export const SignUpForm = ({
  onSubmit,
  initialValues = DEFAULT_VALUES,
}: SignUpFormProps) => {
  const [values, setValues] = useState<SignUpInput>({
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

  const handleRoleChange = (val: Role) => {
    setValues((curr) => ({ ...curr, role: val }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledCardContent>
        <TextField
          required
          name="firstName"
          label="First Name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          required
          name="lastName"
          label="Last Name"
          variant="outlined"
          onChange={handleChange}
        />
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
        <Select
          label="Role"
          options={Object.values(Role)}
          onChange={handleRoleChange}
        />
        <StyledButton variant="contained" type="submit">
          Sign up
        </StyledButton>
      </StyledCardContent>
    </form>
  );
};
