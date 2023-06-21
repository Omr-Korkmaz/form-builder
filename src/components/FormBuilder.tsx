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


//   const [currentValidationRules, setCurrentValidationRules] =
//     useState<ValidationType>({
//       startsWithCapital: "",
//       greaterThanFive: "",
//       emailFormat: "",
//       noSpecialChars: "",
//       validDate: "",
//       required: "",
//       other:"",
//     });

console.log("currentError", currentErrorMessage )
console.log("currentRegex", currentRegex)
  const dispatch = useDispatch();
  const { fields } = useSelector((state: RootState) => state.form);

  const handleAddingField = () => {

    
    if (fields[currentKey] !== undefined) {
      alert("Key already exists");
      return;
    }

   

    if (currentType && currentKey && currentLabel) {
        const regex = currentRegex ? new RegExp(currentRegex) : undefined;

      dispatch(
        addField({
          key: currentKey,
          type: currentType as FieldType,
          label: currentLabel,
        //   validationRules: currentValidationRules as ValidationType,
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
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          onChange={(value) => setCurrentLabel(value)}
          label="Label"
          value={currentLabel}
        />
      </Grid>
      <Grid item xs={12}>
        <Box
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
        >
         

          {!currentType && (
            <Typography variant="subtitle2" gutterBottom sx={{ color: "red" }}>
              *Choose a field type to activate rules
            </Typography>
          )}




<Grid container spacing={2}>
      {/* ... */}
      <Grid item xs={12} display={"flex"}>
        <InputField
          onChange={(value) => setCurrentErrorMessage(value)}
          label="Error Message"
          value={currentErrorMessage}
        />
           <HelpPopover content='In some cases, certain validation may turn disable others. ex: if the
          (Valid email address) validation is chosen, the (Not contain special
          chars) validation should be disabled.' />
      </Grid>
      <Grid item xs={12} display={"flex"}>
        <InputField
          onChange={(value) => setCurrentRegex(value)}
          label="Regex Rules"
          value={currentRegex}
          InputProps={{
            startAdornment: <InputAdornment  position="start">/</InputAdornment>,
            endAdornment:<InputAdornment position="end">/</InputAdornment>

            
          }}
        />
            <HelpPopover content='In some cases, certain validation may turn disable others. ex: if the
          (Valid email address) validation is chosen, the (Not contain special
          chars) validation should be disabled.' />
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






          {/* <Grid item xs={12}>
            <SwitchField
              label={"Begin with a capital letter"}
              onChange={(value: string) =>
                setCurrentValidationRules((prevState: ValidationType) => ({
                  ...prevState,
                  startsWithCapital: value,
                }))
              }
              value={currentValidationRules.startsWithCapital}
              fieldtype={currentType}
              validationRulesValues={currentValidationRules}
            />
          </Grid> */}

          {/* <Grid item xs={12}>
            <SwitchField
              label={"Greater than or equal to 5"}
              onChange={(value: string) =>
                setCurrentValidationRules((prevState: ValidationType) => ({
                  ...prevState,
                  greaterThanFive: value,
                }))
              }
              value={currentValidationRules.greaterThanFive}
              fieldtype={currentType}
              validationRulesValues={currentValidationRules}
            />
          </Grid> */}

          {/* <Grid item xs={12}>
            <SwitchField
              label={"Valid email address"}
              onChange={(value: string) =>
                setCurrentValidationRules((prevState: ValidationType) => ({
                  ...prevState,
                  emailFormat: value,
                }))
              }
              value={currentValidationRules.emailFormat}
              fieldtype={currentType}
              validationRulesValues={currentValidationRules}
            />
          </Grid> */}

          {/* <Grid item xs={12}>
            <SwitchField
              label={"Not contain special chars"}
              onChange={(value: string) =>
                setCurrentValidationRules((prevState: ValidationType) => ({
                  ...prevState,
                  noSpecialChars: value,
                }))
              }
              value={currentValidationRules.noSpecialChars}
              fieldtype={currentType}
              validationRulesValues={currentValidationRules}
            />
          </Grid> */}

          {/* <Grid item xs={12}>
            <SwitchField
              label={"Valid Date"}
              onChange={(value: string) =>
                setCurrentValidationRules((prevState: ValidationType) => ({
                  ...prevState,
                  validDate: value,
                }))
              }
              value={currentValidationRules.validDate}
              fieldtype={currentType}
              validationRulesValues={currentValidationRules}
            />
          </Grid> */}

          {/* <Grid item xs={12}>
            <SwitchField
              label={"Required field"}
              onChange={(value: string) =>
                setCurrentValidationRules((prevState: ValidationType) => ({
                  ...prevState,
                  required: value,
                }))
              }
              value={currentValidationRules.required}
              fieldtype={currentType}
              validationRulesValues={currentValidationRules}
            />
          </Grid> */}

          {/* <Grid item xs={12}>
            <SwitchField
              label={"Custom Validation"}
              onChange={(value: string) =>
                setCurrentValidationRules((prevState: ValidationType) => ({
                  ...prevState,
                  other: value,
                }))
              }
              value={currentValidationRules.other}
              fieldtype={currentType}
              validationRulesValues={currentValidationRules}
            />
          </Grid> */}

{/* {currentValidationRules.other==="1" && 
        <>  <Grid item xs={12}>
        <InputField
          onChange={(value) => setPattern(value)}
          label="Custom Validation"
          value={pattern}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          onChange={(value) => setErrorMessage(value)}
          label="Error Message"
          value={errorMessage}
        />
      </Grid>
      </>
    } */}


        </Box>

        <Button variant="contained" color="primary" onClick={handleAddingField}>
          Add Field
        </Button>
      </Grid>
    </Grid>
  );
};
