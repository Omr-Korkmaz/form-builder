import { ChangeEvent, useState } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { validationRules } from "../../utils/validationRules";
import { Field } from "../../store/form";

type InputFieldProps = Omit<TextFieldProps, "onChange"> & {
  label: string;
  value: string;
  onChange: (value: string) => void;
  field?: Field;
  section?: string;
};

enum ParamType {
  Number = "number",
  String = "string",
}

export const InputField = ({
  label,
  value,
  onChange,
  field,
  section,
  ...rest
}: InputFieldProps) => {
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const getItemName = (
    object: Record<string, string>,
    value: string
  ): string[] => {
    const keys: string[] = [];
    for (const key in object) {
      if (object[key] === value) {
        keys.push(key);
      }
    }
    return keys;
  };

  const itemName = field && getItemName(field?.validationRules, "1");

  const validateInput = (value: string, type: string, rules: string[]) => {
    setErrorMessage([]); // clear error messages

    if (type === ParamType.Number && !/^\d+$/.test(value)) {
      setErrorMessage((prevErrorMessages) => [
        ...prevErrorMessages,
        "Type error (Please enter a valid number)",
      ]);
    } else {
      validationRules.map((item) => {
        if (!item.rule(value) && rules.includes(item.name)) {
          setErrorMessage((prevErrorMessages) => [
            ...prevErrorMessages,
            item.errorMessage,
          ]);
        }
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleBlur = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    field &&
      itemName &&
      validateInput(event.target.value, field?.type, itemName);
  };
  console.log(field?.validationRules.required);
  return (
    <TextField
      label={label}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      margin="normal"
      error={section === "formPreview" && Boolean(errorMessage.length)}
      helperText={section === "formPreview" && errorMessage}
      required={
        section === "formPreview" && field?.validationRules.required === "1"
      }
      {...rest}
    />
  );
};
