import { Checkbox, FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";

type CheckboxFieldProps = {
  label: string;
  value: string;
  onChange: (checked: string) => void;
  fieldtype: string;
  section?: string;
  email?: any;
  noSpecialChars?: any;
};

export const CheckboxField = ({
  label,
  value,
  onChange,
  fieldtype,
  section,
  email,
  noSpecialChars,
}: CheckboxFieldProps) => {
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
    if (!fieldtype || fieldtype === "boolean") {
      return true;
    }

    if (fieldtype === "string") {
      if (label === "greaterThanFive" || label === "validDate") return true;
    }
    if (fieldtype === "number") {
      if (
        label === "startsWithCapital" ||
        label === "emailFormat" ||
        label === "noSpecialChars" ||
        label === "validDate"
      )
        return true;
    }

    if (fieldtype === "date") {
      if (
        label === "startsWithCapital" ||
        label === "emailFormat" ||
        label === "noSpecialChars" ||
        label === "greaterThanFive"
      )
        return true;
    }

    if (email === "1" && label === "noSpecialChars") {
      return true;
    }

    if (noSpecialChars === "1" && label === "emailFormat") {
      return true;
    }
  };

  return (
    <FormControlLabel
      disabled={section === "view" ? validation("view") : validation(fieldtype)}
      control={
        <Checkbox
          // checked={value === "1"}
          checked={checked}
          onChange={handleChange}
        />
      }
      // control={
      //     <Switch
      //       checked={checked}
      //       onChange={handleChange}
      //       color="primary"
      //       inputProps={{ "aria-label": "checkbox" }}
      //     />
      //   }
      label={label}
    />
  );
};
