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

export interface SelectProps<T extends string> {
  onChange: (val: T) => void;
  label: string;
  options: T[];
  error?: string;
}

export const Select = function <T extends string>({
  onChange,
  options,
  label,
  error,
}: SelectProps<T>) {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    // find a better solution for this type
    const val = event.target.value as T;
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
