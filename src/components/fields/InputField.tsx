import { ChangeEvent, useState } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Field } from "../../store/form";
import { validateInput } from "../../utils/ValidateInput";

type InputFieldProps = Omit<TextFieldProps, "onChange"> & {
  label: string;
  value: string;
  onChange: (value: string) => void;
  field?: Field;
  section?: string;
};

export const InputField = ({
  label,
  value,
  onChange,
  field,
  section,
  ...rest
}: InputFieldProps) => {
  const [customErrorMessage, setCustomErrorMessage] = useState<string>('');

console.log("value", value)


console.log("Regex Rule", field?.regexRules)

console.log("Error M", field?.errorMessage)

console.log(" Boolean(customErrorMessage.length)",Boolean(customErrorMessage.length))


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);


    }
  };

  const handleBlur = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if(field) {
    const errorMessage = validateInput(
        event.target.value,
        field.type,
        field.regexRules,
        field.errorMessage
      );
      setCustomErrorMessage(errorMessage);
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
      error={section === "formPreview" && Boolean(customErrorMessage.length)}
required = {field?.required==="1"}
      helperText={section === "formPreview" && Boolean(customErrorMessage) && customErrorMessage  }

      {...rest}
    />
  );
};
