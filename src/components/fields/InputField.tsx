import { ChangeEvent } from "react";
import { TextField, TextFieldProps } from "@mui/material";

type InputFieldProps = Omit<TextFieldProps, "onChange"> & {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
};

export const InputField = ({
  label,
  value,
  onChange,
  onBlur,
  ...rest
}: InputFieldProps) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <TextField
      label={label}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      margin="normal"
      {...rest}
    />
  );
};
