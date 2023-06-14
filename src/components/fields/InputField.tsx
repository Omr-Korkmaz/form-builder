import { ChangeEvent, useState } from 'react';
import {TextField, TextFieldProps} from "@mui/material";
import { validationRules } from "../../utils/validationRules";


type InputFieldProps = Omit<TextFieldProps, "onChange"> & {
    label: string;
    value: string;
    onChange: (value: string) => void;
    field?:any;
    section?:string;
}

enum ParamType {
    Number = 'number',
    String = 'string',
  }


export const InputField = ({ label, value, onChange, field, section,  ...rest }: InputFieldProps) => {



      const [errorMessage, setErrorMessage] = useState<string[]>([]);






      const getItemName = (object: Record<string, string>, value: string): string[] => {
        const keys: string[] = [];
        for (let key in object) {
          if (object[key] === value) {
            keys.push(key);
          }
        }
        return keys;
      };


  const itemName = getItemName(field?.validationRules, "1");

  const validateInput = (value: string, type: string,  rules:string[] ) => {

    setErrorMessage([]);
    // Perform basic type validation
    if (type === ParamType.Number && !/^\d+$/.test(value)) {

      setErrorMessage((prevErrorMessages) => [...prevErrorMessages, "type Error"]);
    }
      else{  validationRules.map((item) => {
            if (!item.rule(value) &&  (rules.includes(item.name))) {

        setErrorMessage((prevErrorMessages) => [...prevErrorMessages, item.message]);

      }

  })
}
   
    };

    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
          
        validateInput(event.target.value, field?.type, itemName )


        };


    return (
        <TextField
            label={label}
            value={value}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"

            error ={section==="view" &&  Boolean(errorMessage.length)
        }
            helperText= {section==="view" && errorMessage}


            {...rest}
        />
    );
};