import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { FormControl, FormHelperText } from "@mui/material";

export interface DateSelectorProps {
  label?: string;
  onChange: (val: string) => void;
  error?: string;
}

export const DateSelector = ({
  onChange,
  error,
  label = "Date",
}: DateSelectorProps) => {
  const handleChange = (val: Dayjs | null) => {
    if (!val) {
      return;
    }
    onChange(dayjs(val).format("MM/DD/YYYY"));
  };

  const hasError = Boolean(error?.length);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <FormControl fullWidth error={hasError}>
          <DatePicker
            slotProps={{
              openPickerButton: { color: hasError ? "warning" : "default" },
            }}
            label={label}
            onChange={handleChange}
            disablePast
          />
          <FormHelperText>{error}</FormHelperText>
        </FormControl>
      </DemoContainer>
    </LocalizationProvider>
  );
};
