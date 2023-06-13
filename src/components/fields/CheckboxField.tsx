import {Checkbox, FormControlLabel} from "@mui/material";

type CheckboxFieldProps = {
    label: string;
    value: string;
    onChange: (checked: string) => void;
    fieldtype: string;

}

export const CheckboxField = ({ label, value, onChange, fieldtype }: CheckboxFieldProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked ? "1" : "0");
    };



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


            console.log(validation(fieldtype))

    return (
        <FormControlLabel
        disabled = {validation(fieldtype)}

            control={<Checkbox checked={value === "1"} onChange={handleChange} />}
            label={label}
        />
    );
};