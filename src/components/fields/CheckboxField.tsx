import {Checkbox, FormControlLabel} from "@mui/material";
import { useEffect, useState } from "react";


type CheckboxFieldProps = {
    label: string;
    value: string;
    onChange: (checked: string) => void;
    fieldtype: string;

}

export const CheckboxField = ({ label, value, onChange, fieldtype }: CheckboxFieldProps) => {
    const [checked, setChecked] = useState(value === "1");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);

        onChange(event.target.checked ? "1" : "0");
    };

    useEffect(() => {
        setChecked(false); // Reset the checkbox state when fieldtype changes
        onChange("0")

      }, [fieldtype]);

    const validation = (fieldtype:string)=>{


        if(!fieldtype || fieldtype ==="boolean"){
            return true
        }
        
        if (fieldtype ==="string") {
        
            if(label==="greaterThanFive" || label==="validDate")
            return true    
        }
        if (fieldtype ==="number") {
        
            if(label==="startsWithCapital" || label==="emailFormat" || label==="noSpecialChars" || label==="validDate") 
            return true
        }
        
        if (fieldtype ==="date") {
        
            if(label==="startsWithCapital" || label==="emailFormat" || label==="noSpecialChars" || label==="greaterThanFive" ) 
            return true  
        }
            
            }



    return (
        <FormControlLabel
        disabled = {validation(fieldtype)}

            control={<Checkbox 
                // checked={value === "1"} 
                checked={checked}
            
            onChange={handleChange} />}
            label={label}
        />
    );
};