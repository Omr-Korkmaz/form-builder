import { TextField } from "@mui/material";
import { Field } from "../../store/form";

type DateFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  field?: Field;
};

export const DateField = ({
  label,
  value,
  onChange,
  field,
}: DateFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      required={field?.required === "1"}
      label={label}
      type="date"
      value={value}
      onChange={handleChange}
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth
      margin="normal"
    />
  );
};
