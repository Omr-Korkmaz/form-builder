import { ChangeEvent } from 'react';
import {TextField, TextFieldProps} from "@mui/material";

type InputFieldProps = Omit<TextFieldProps, "onChange"> & {
    label: string;
    value: string;
    onChange: (value: string) => void;
    field?:any;
    section?:string;
}

export const InputField = ({ label, value, onChange, field,  ...rest }: InputFieldProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }

        console.log("field", field)
    };

    return (
        <TextField
            label={label}
            value={value}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            {...rest}
        />
    );
};