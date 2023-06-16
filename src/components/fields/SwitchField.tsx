import { FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { ValidationType } from "../../store/form";

type SwitchFieldProps = {
  label: string;
  value: string;
  onChange: (checked: string) => void;
  fieldtype: string;
  validationRulesValues: ValidationType;
};

export const SwitchField = ({
  label,
  value,
  onChange,
  fieldtype,
  validationRulesValues,
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

  const validation = (fieldtype: string) => {
    if (!fieldtype) {
      return true;
    }

    if (fieldtype === "string") {
      if (label === "Greater than or equal to 5") return true;
    }
    if (fieldtype === "number") {
      if (
        label === "Begin with a capital letter" ||
        label === "Valid email address" ||
        label === "Not contain special chars" ||
        label === "Valid Date"
      )
        return true;
    }

    if (fieldtype === "date" || fieldtype === "boolean") {
      if (label !== "Required field") return true;
    }

    if (validationRulesValues.emailFormat === "1") {
      if (label === "Not contain special chars" || label === "Valid Date" || label === "Valid email address" )
        return true;
    }

    if (validationRulesValues.noSpecialChars === "1") {
      if (label === "Valid email address" || label === "Valid Date")
        return true;
    }
    if (
      validationRulesValues.startsWithCapital === "1") {
        if (label === "Valid email address" || label === "Valid Date")
        return true;
    }

    if (validationRulesValues.validDate === "1" && label !== "Valid Date") {
      return true;
    }
  };

  return (
    <FormControlLabel
      disabled={validation(fieldtype)}
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
