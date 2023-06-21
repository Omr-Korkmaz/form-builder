import { Checkbox, FormControlLabel } from "@mui/material";
import { Field } from "../../store/form";

type CheckboxFieldProps = {
  label: string;
  value: string;
  onChange: (checked: string) => void;
  field?: Field;
};

export const CheckboxField = ({
  label,
  value,
  onChange,
//   field,
}: CheckboxFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? "1" : "0");
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
        //   required={field?.validationRules.required === "1"}
          checked={value === "1"}
          onChange={handleChange}
        />
      }
      label={label}
    />
  );
};
