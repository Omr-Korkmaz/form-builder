import { FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
// import { ValidationType } from "../../store/form";

type SwitchFieldProps = {
  label: string;
  value: string;
  onChange: (checked: string) => void;
  fieldtype: string;
  // validationRulesValues: ValidationType;
};

export const SwitchField = ({
  label,
  value,
  onChange,
  fieldtype,
  // validationRulesValues,
}: SwitchFieldProps) => {
  const [checked, setChecked] = useState(value === "1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    onChange(event.target.checked ? "1" : "0");
  };

  useEffect(() => {
    setChecked(false); // Reset the checkbox state when fieldtype changes
    onChange("0");
  }, [fieldtype]);


  return (
    <FormControlLabel
      // disabled={validation(fieldtype)}
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          color="primary"
          inputProps={{ "aria-label": "checkbox" }}
        />
      }
      label={label}
    />
  );
};
