import * as React from "react";
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
}

export const Select = ({ onChange, options, label, error }: SelectProps) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const val = event.target.value;
    setValue(val);
    onChange(val);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth error={Boolean(error?.length)}>
        <InputLabel>{label}</InputLabel>
        <UISelect value={value} label={label} onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </UISelect>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </Box>
  );
};
