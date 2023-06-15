import { Dropdown } from "./fields/Dropdown.tsx";
import { useState } from "react";
import { addField, FieldType, ValidationType } from "../store/form.ts";
import { Button, Grid, Typography, Box, Divider } from "@mui/material";
import { InputField } from "./fields/InputField.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/config.ts";
import { CheckboxField } from "./fields/CheckboxField.tsx";
import { SwitchField } from "./fields/SwitchField.tsx";

export const FormBuilder = () => {
  const [currentType, setCurrentType] = useState("");
  const [currentKey, setCurrentKey] = useState("");
  const [currentLabel, setCurrentLabel] = useState("");

  const [currentValidationRules, setCurrentValidationRules] =
    useState<ValidationType>({
      startsWithCapital: "",
      greaterThanFive: "",
      emailFormat: "",
      noSpecialChars: "",
      validDate: "",
    });

  const dispatch = useDispatch();
  const { fields } = useSelector((state: RootState) => state.form);

  const handleAddingField = () => {
    if (fields[currentKey] !== undefined) {
      alert("Key already exists");
      return;
    }

    if (currentType && currentKey && currentLabel) {
      dispatch(
        addField({
          key: currentKey,
          type: currentType as FieldType,
          label: currentLabel,
          validationRules: currentValidationRules as ValidationType,
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
            border: "1px solid gray",
          }}
        >
          <p>{!currentType && "please first select type"}</p>

          {Object.keys(currentValidationRules).map((key: string) => (
            <Grid item xs={12} key={key}>
              <SwitchField
                label={key}
                onChange={(value: string) =>
                  setCurrentValidationRules((prevState: ValidationType) => ({
                    ...prevState,
                    [key]: value,
                  }))
                }
                value={currentValidationRules[key]}
                fieldtype={currentType}
                email={currentValidationRules.emailFormat}
                noSpecialChars={currentValidationRules.noSpecialChars}
              />
            </Grid>
          ))}
        </Box>

        <Button variant="contained" color="primary" onClick={handleAddingField}>
          Add Field
        </Button>
      </Grid>
    </Grid>
  );
};
