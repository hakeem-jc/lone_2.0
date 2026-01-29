"use client";
import { Controller, Control, FieldError } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import dayjs, { Dayjs } from "dayjs";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface DatePickerInputProps {
  name: string;
  control: Control<any>;
  label: string;
  error?: FieldError;
  required?: boolean;
}

export default function DatePickerInput({
  name,
  control,
  label,
  error,
  required = false,
}: DatePickerInputProps) {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label
            htmlFor={name}
            className="grid grid-cols-[auto_1fr] gap-1.5 mb-1.5 font-semibold text-gray-400 antialiased"
          >
            <span>{label}</span>
            {/* {registration && <span className="text-gray-400">*</span>} */}
          </label>
          <Controller
            name={name}
            control={control}
            rules={{
              required: required ? `${label} is required` : false,
            }}
            render={({ field }) => (
              <DatePicker
                label={label}
                value={field.value ? dayjs(field.value) : null}
                onChange={(date: Dayjs | null) => {
                  field.onChange(date ? date.format("YYYY-MM-DD") : "");
                }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!error,
                    helperText: error?.message,
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}