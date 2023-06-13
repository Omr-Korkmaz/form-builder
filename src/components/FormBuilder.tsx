import {Dropdown} from "./fields/Dropdown.tsx";
import {useState} from "react";
import {addField, FieldType} from "../store/form.ts";
import {Button, Grid, Typography, Box} from "@mui/material";
import {InputField} from "./fields/InputField.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/config.ts";
import { CheckboxField } from "./fields/CheckboxField.tsx";

export const FormBuilder = () => {
    const [currentType, setCurrentType] = useState("");
    const [currentKey, setCurrentKey] = useState("")
    const [currentLabel, setCurrentLabel] = useState("")


    const [currentStartsWithCapital, setCurrentStartsWithCapital] = useState("");
    const [currentGreaterThanFive, setCurrentGreaterThanFive] = useState("");
    const [currentEmailFormat, setCurrentEmailFormat] = useState("");
    const [currentNoSpecialChars, setCurrentNoSpecialChars] = useState("");
    const [currentValidDate, setCurrentValidDate] = useState("");


    const dispatch = useDispatch();
    const {fields} = useSelector((state: RootState) => state.form)

    const handleAddingField = () => {
        if (fields[currentKey] !== undefined) {
            alert("Key already exists")
            return
        }

        if (currentType && currentKey && currentLabel) {
            dispatch(addField({key: currentKey, type: currentType as FieldType, label: currentLabel,
                startsWithCapital:currentStartsWithCapital,
                greaterThanFive:currentGreaterThanFive,
                emailFormat:currentEmailFormat,
                noSpecialChars:currentNoSpecialChars,
                validDate:currentValidDate,
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

                 <Grid item xs={12}>
                            <CheckboxField label="startsWithCapital" onChange={(value) => setCurrentStartsWithCapital(value)} value={currentStartsWithCapital} fieldtype = {currentType}/>
                        </Grid>

                        <Grid item xs={12}>
                            <CheckboxField label="greaterThanFive" onChange={(value) => setCurrentGreaterThanFive(value)} value={currentGreaterThanFive} fieldtype = {currentType}/>
                        </Grid>

                        <Grid item xs={12}>
                            <CheckboxField label="emailFormat" onChange={(value) => setCurrentEmailFormat(value)} value={currentEmailFormat} fieldtype = {currentType} />
                        </Grid>

                        <Grid item xs={12}>
                            <CheckboxField label="noSpecialChars" onChange={(value) => setCurrentNoSpecialChars(value)} value={currentNoSpecialChars} fieldtype = {currentType}/>
                        </Grid>

                        <Grid item xs={12}>
                            <CheckboxField label="validDate" onChange={(value) => setCurrentValidDate(value)} value={currentValidDate} fieldtype = {currentType} />
                        </Grid>
</Box>



                <Button variant="contained" color="primary" onClick={handleAddingField}>
                    Add Field
                </Button>
            </Grid>
        </Grid>
    )
}