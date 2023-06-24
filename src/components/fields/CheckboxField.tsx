import { Checkbox, FormControlLabel, CheckboxProps } from "@mui/material";

type CheckboxFieldProps = Omit<CheckboxProps, "onChange"> & {
  // 'onChange' props pass from other components below, that's why remove the orginal one belong to CheckboxProps
  label: string;
  value: string;
  onChange: (checked: string) => void;
};

export const CheckboxField = ({
  label,
  value,
  onChange,
  ...rest
}: CheckboxFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? "1" : "0");
  };

  return (
    <FormControlLabel
      control={
        <Checkbox checked={value === "1"} onChange={handleChange} {...rest} />
      }
      label={label}
    />
  );
};
