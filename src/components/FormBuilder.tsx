import { Dropdown } from "./fields/Dropdown.tsx";
import { useState } from "react";
import { addField, FieldType,
    //  ValidationType
     } from "../store/form.ts";
import {
  Button,
  Grid,
  Typography,
  Box,
  Divider,
  InputAdornment,
} from "@mui/material";
import { InputField } from "./fields/InputField.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/config.ts";
import {HelpPopover} from "../utils/HelpPopover.tsx";
import { SwitchField } from "./fields/SwitchField.tsx";

export const FormBuilder = () => {
  const [currentType, setCurrentType] = useState("");
  const [currentKey, setCurrentKey] = useState("");
  const [currentLabel, setCurrentLabel] = useState("");

  const [currentErrorMessage, setCurrentErrorMessage] = useState("");
  const [currentRegex, setCurrentRegex] = useState("");
  const [currentRequired, setCurrentRequired] = useState("false");


const [currentError, setCurrentError] = useState("");

console.log("currentError", currentErrorMessage )
console.log("currentRegex", currentRegex)
  const dispatch = useDispatch();
  const { fields } = useSelector((state: RootState) => state.form);

  const handleAddingField = () => {

    
    if (fields[currentKey] !== undefined) {
      alert("Key already exists");
      return;
    }
    if (!currentKey || !currentLabel) {
        setCurrentError("not keep empty")
        return;
      }

   

    if (currentType && currentKey && currentLabel) {
        const regex = currentRegex ? new RegExp(currentRegex) : undefined;

      dispatch(
        addField({
          key: currentKey,
          type: currentType as FieldType,
          label: currentLabel,
        errorMessage: currentErrorMessage,
        regexRules: regex,
        required: currentRequired

        })
      );
    }
  };

  return (
    <Grid container spacing={2} sx={{ width: 300, margin: "auto", pb: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Form Builder
        </Typography>

        <Divider sx={{ my: 2, borderWidth: 1 }} />
      </Grid>
      <Grid item xs={12}>
        <Dropdown
          label="Choose a field type"
          value={currentType}
          onChange={(type) => setCurrentType(type)}
          options={{
            Number: FieldType.Number,
            String: FieldType.String,
            Date: FieldType.Date,
            Boolean: FieldType.Boolean,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          onChange={(value) => setCurrentKey(value)}
          label="Key"
          value={currentKey}
          required
          helperText={currentError}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          onChange={(value) => setCurrentLabel(value)}
          label="Label"
          value={currentLabel}
          required
        />
      </Grid>
      <Grid item xs={12}>
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            p: 1,
            mb: 2,
            bgcolor: "background.paper",
            borderRadius: 1,
            border: "thin dashed lightGray",
          }}
        > */}
         

          {/* {!currentType && (
            <Typography variant="subtitle2" gutterBottom sx={{ color: "red" }}>
              *Choose a field type to activate rules
            </Typography>
          )} */}




<Grid container spacing={2}>
      <Grid item xs={12} display={"flex"}>
        <InputField
          onChange={(value) => setCurrentErrorMessage(value)}
          label="Custom error message"
          value={currentErrorMessage}
        />
           <HelpPopover content='You can provide a specific error message to display when the input does not meet the validation rules (Custom pattern).' />
      </Grid>
      <Grid item xs={12} display={"flex"}>
        <InputField
          onChange={(value) => setCurrentRegex(value)}
          label="Custom pattern"
          value={currentRegex}
          InputProps={{
            startAdornment: <InputAdornment  position="start">/</InputAdornment>,
            endAdornment:<InputAdornment position="end">/</InputAdornment>

            
          }}
        />
            <HelpPopover content='You can provide a regular expression to create a specific validation for the current field. For example, to create a pattern that ensures the input does not contain any special characters, you can use the following regular expression: ^[a-zA-Z0-9\s]*$.' />
      </Grid>
      <Grid item xs={12}>
            <SwitchField
              label={"Required"}
              onChange={(value: string) =>
                setCurrentRequired(value)
              }
              value={currentRequired}
              fieldtype={currentType}
            />
          </Grid>
    </Grid>


        {/* </Box> */}

        <Button variant="contained" color="primary" onClick={handleAddingField}>
          Add Field
        </Button>
      </Grid>
    </Grid>
  );
};
