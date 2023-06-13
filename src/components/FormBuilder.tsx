import {Dropdown} from "./fields/Dropdown.tsx";
import {useState} from "react";
import {addField, FieldType, ValidationType} from "../store/form.ts";
import {Button, Grid, Typography, Box} from "@mui/material";
import {InputField} from "./fields/InputField.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/config.ts";
import { CheckboxField } from "./fields/CheckboxField.tsx";

export const FormBuilder = () => {
    const [currentType, setCurrentType] = useState("");
    const [currentKey, setCurrentKey] = useState("")
    const [currentLabel, setCurrentLabel] = useState("")

    const [currentValidationRules, setCurrentValidationRules] = useState({
        startsWithCapital:'',
        greaterThanFive:'',
        emailFormat:'',
        noSpecialChars:'',
        validDate:'',
    })

    // const [currentValidationRules, setCurrentValidationRules] = useState<Record<ValidationType, string>>({
    //     [ValidationType.StartsWithCapital]: '',
    //     [ValidationType.GreaterThanFive]: '',
    //     [ValidationType.EmailFormat]: '',
    //     [ValidationType.NoSpecialChars]: '',
    //     [ValidationType.ValidDate]: ''
    //   });
      

    // const [currentStartsWithCapital, setCurrentStartsWithCapital] = useState("");
    // const [currentGreaterThanFive, setCurrentGreaterThanFive] = useState("");
    // const [currentEmailFormat, setCurrentEmailFormat] = useState("");
    // const [currentNoSpecialChars, setCurrentNoSpecialChars] = useState("");
    // const [currentValidDate, setCurrentValidDate] = useState("");


    const dispatch = useDispatch();
    const {fields} = useSelector((state: RootState) => state.form)

    const handleAddingField = () => {
        if (fields[currentKey] !== undefined) {
            alert("Key already exists")
            return
        }

        if (currentType && currentKey && currentLabel) {
            dispatch(addField({key: currentKey, type: currentType as FieldType, label: currentLabel,
                validationRules: currentValidationRules as  ValidationType

                // startsWithCapital:currentValidationRules.noSpecialChars,
                // greaterThanFive:currentValidationRules.greaterThanFive,
                // emailFormat:currentValidationRules.emailFormat,
                // noSpecialChars:currentValidationRules.noSpecialChars,
                // validDate:currentValidationRules.validDate,
            }))
        }
    }

    return (
        <Grid container spacing={2} sx={{width: 300, margin: "auto"}}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Form Builder
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Dropdown label="Choose a field type"
                          value={currentType}
                          onChange={(type) => setCurrentType(type)}
                          options={{
                              "Number": FieldType.Number,
                              "String": FieldType.String,
                              "Date": FieldType.Date,
                              "Boolean": FieldType.Boolean,
                          }}/>
            </Grid>
            <Grid item xs={12}>
                <InputField onChange={(value) => setCurrentKey(value)} label="Key" value={currentKey}/>
            </Grid>
            <Grid item xs={12}>
                <InputField onChange={(value) => setCurrentLabel(value)} label="Label" value={currentLabel}/>
            </Grid>
            <Grid item xs={12}>

                    <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
          mb:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid gray'
        }}
      >
                        <p>{!currentType && 'please first select type' }</p>

        
                 <Grid item xs={12}>
                            <CheckboxField label="startsWithCapital" onChange={(value) => setCurrentValidationRules(prevState => ({ ...prevState, startsWithCapital: value }))}
 value={currentValidationRules.startsWithCapital} fieldtype = {currentType}/>
                        </Grid>

                        <Grid item xs={12}>
                            <CheckboxField label="greaterThanFive" onChange={(value) => setCurrentValidationRules(prevState => ({ ...prevState, greaterThanFive: value }))}
 value={currentValidationRules.greaterThanFive} fieldtype = {currentType}/>
                        </Grid>
                        <Grid item xs={12}>
                            <CheckboxField label="emailFormat" onChange={(value) => setCurrentValidationRules(prevState => ({ ...prevState, emailFormat: value }))}
 value={currentValidationRules.emailFormat} fieldtype = {currentType}/>
                        </Grid>
                        <Grid item xs={12}>
                            <CheckboxField label="noSpecialChars" onChange={(value) => setCurrentValidationRules(prevState => ({ ...prevState, noSpecialChars: value }))}
 value={currentValidationRules.noSpecialChars} fieldtype = {currentType}/>
                        </Grid>

                        <Grid item xs={12}>
                            <CheckboxField label="validDate" onChange={(value) => setCurrentValidationRules(prevState => ({ ...prevState, validDate: value }))}
 value={currentValidationRules.validDate} fieldtype = {currentType}/>
                        </Grid>
</Box>



                <Button variant="contained" color="primary" onClick={handleAddingField}>
                    Add Field
                </Button>
            </Grid>
        </Grid>
    )
}