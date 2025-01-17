import { useState } from "react";
import {
  Box,
  FormHelperText,
  Select as UISelect,
  SelectChangeEvent,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

export interface SelectProps {
  onChange: (val: string) => void;
  label: string;
  options: string[];
  error?: string;
  dataCy?: string;
}

export const Select = ({
  onChange,
  options,
  label,
  error,
  dataCy = "select",
}: SelectProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const val = event.target.value;
    setValue(val);
    onChange(val);
  };

  return (
    <Box data-cy={dataCy} sx={{ minWidth: 120 }}>
      <FormControl fullWidth error={Boolean(error?.length)}>
        <InputLabel>{label}</InputLabel>
        <UISelect value={value} label={label} onChange={handleChange}>
          {options.map((option) => (
            <MenuItem data-cy={option} key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </UISelect>
        <FormHelperText data-cy={`${dataCy}-error`}>{error}</FormHelperText>
      </FormControl>
    </Box>
  );
};
