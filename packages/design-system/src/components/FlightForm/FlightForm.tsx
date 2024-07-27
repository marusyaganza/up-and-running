import React from "react";
import { FormEventHandler, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Card, CardContent } from "@mui/material";
import { DateSelector } from "../DateSelector/DateSelector";
import { Select } from "../Select/Select";
import { FlightInput } from "../../generated/graphql";
import { isFlightInput } from "../../types/type-guards";

const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));

const StyledButton = styled(Button)(() => ({
  alignSelf: "center",
}));

export interface FlightFormProps {
  onSubmit: (values: FlightInput) => void;
  planets: string[];
  starships: string[];
  isLoading?: boolean;
}

enum Fields {
  Origin = "origin",
  Destination = "destination",
  Starship = "starship",
  Date = "date",
}

export const FlightForm = ({
  onSubmit,
  planets,
  starships,
}: FlightFormProps) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (values: Record<string, string>) => {
    const fields = Object.values(Fields);
    const errors: Record<string, string> = {};
    fields.forEach((field) => {
      if (!values[field]) {
        errors[field] = `${field} is required`;
      }
    });
    setErrors(errors);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    validate(values);
    if (
      !Object.values(errors).filter(Boolean).length &&
      isFlightInput(values)
    ) {
      onSubmit(values);
    }
  };

  const getChangeHandler = (name: string) => {
    return function handleChange(val: string) {
      const errs = { ...errors };
      errs[name] = "";

      const newValues = { ...values };
      newValues[name] = val;

      setValues(newValues);
      setErrors(errs);
    };
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <StyledCardContent>
          <Select
            label="Origin"
            options={planets}
            error={errors[Fields.Origin]}
            onChange={getChangeHandler(Fields.Origin)}
          />
          <Select
            label="Destination"
            options={planets}
            error={errors[Fields.Destination]}
            onChange={getChangeHandler(Fields.Destination)}
          />
          <Select
            label="Starship"
            options={starships}
            error={errors[Fields.Starship]}
            onChange={getChangeHandler(Fields.Starship)}
          />

          <DateSelector
            error={errors[Fields.Date]}
            onChange={getChangeHandler(Fields.Date)}
          />
          <StyledButton variant="contained" type="submit">
            Schedule flight
          </StyledButton>
        </StyledCardContent>
      </Card>
    </form>
  );
};
