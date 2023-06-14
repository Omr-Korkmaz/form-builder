import { ChangeEvent, useState } from 'react';
import {TextField, TextFieldProps} from "@mui/material";

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


console.log(field)


const validationRules = [

      {
        name: 'greaterThanFive',

        rule: (value: string) => parseInt(value, 10) >= 5,
        message: 'The entered value must be greater than or equal to 5.',
      },
      {
        name: 'startsWithCapital',

        rule: (value: string) => /^[A-Z]/.test(value),
        message: 'The input must begin with a capital letter.',
      },
      {
        name: 'noSpecialChars',

        rule: (value: string) => /^[a-zA-Z\s]*$/.test(value),
        message: 'The input must not contain any special characters.',
      },
  
   {
        name: 'emailFormat',

        rule: (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
        message: 'Please enter a valid email address.',
      },
    
 
];

const getItemName = (object, value) => {
    const keys = [];
    for (let key in object) {
      if (object[key] === value) {
        keys.push(key);      }
    }
    return keys;
};


  const itemName = getItemName(field?.validationRules, "1");

  const validateInput = (value, type,  rules) => {

    setErrorMessage([]);
    // Perform basic type validation
    if (type === ParamType.Number && !/^\d+$/.test(value)) {

      setErrorMessage((prevErrorMessages) => [...prevErrorMessages, "type Error"]);
    }
      else{  validationRules.map((item) => {
            if (!item.rule(value) &&  (rules.includes(item.name))) {

        console.log("errorMessage", item.message)
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