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
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "54px",
          fontSize: "16px",
          backgroundColor: "#212121",
          color: "#9ca3af", // text-gray-400
          borderRadius: 0,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#bab8c6",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6c51f5 !important",
            borderWidth: "1px !important",
          },
        },
        input: {
          padding: "0 20px",
          "&::placeholder": {
            color: "#6b7280", // text-gray-500
            opacity: 1,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#bab8c6",
            borderRadius: 0,
            borderWidth: "1px", // Match Input border width
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#bab8c6",
            borderWidth: "1px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6c51f5",
            borderWidth: "1px",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ef4444", // red-500
            borderWidth: "1px",
          },
        },
        notchedOutline: {
          borderWidth: "1px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          display: "none", // Hide MUI's label since we're using custom label
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          marginTop: "4px",
          fontSize: "0.875rem",
          color: "#ef4444", // red-500
        },
      },
    },
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
      <label
        htmlFor={name}
        className="grid grid-cols-[auto_1fr] gap-1.5 mb-1.5 font-semibold text-gray-400 antialiased"
      >
        <span>{label}</span>
        {required && <span className="text-gray-400">*</span>}
      </label>
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name={name}
            control={control}
            rules={{
              required: required ? `${label} is required` : false,
            }}
            render={({ field }) => (
              <DatePicker
                value={field.value ? dayjs(field.value) : null}
                onChange={(date: Dayjs | null) => {
                  field.onChange(date ? date.format("YYYY-MM-DD") : "");
                }}
                slotProps={{
                  textField: {
                    id: name,
                    fullWidth: true,
                    error: !!error,
                    helperText: error?.message,
                    placeholder: label,
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