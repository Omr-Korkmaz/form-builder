import { Dropdown } from "./fields/Dropdown.tsx";
import { useEffect, useState } from "react";
import { addField, FieldType } from "../store/form.ts";
import {
  Button,
  Grid,
  Typography,
  Divider,
  InputAdornment,
} from "@mui/material";
import { InputField } from "./fields/InputField.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/config.ts";
import { HelpPopover } from "../utils/HelpPopover.tsx";
import { SwitchField } from "./fields/SwitchField.tsx";

export const FormBuilder = () => {
  const [currentType, setCurrentType] = useState("");
  const [currentKey, setCurrentKey] = useState("");
  const [currentLabel, setCurrentLabel] = useState("");
  const [currentErrorMessage, setCurrentErrorMessage] = useState("");
  const [currentPattern, setCurrentPattern] = useState("");
  const [currentRequired, setCurrentRequired] = useState("");

  const [currentRequiredMessage, setCurrentRequiredMessage] = useState(""); // the local state keep message if the key or label input keep empty when Addfield button clicked
  const [showContainer, setShowContainer] = useState(false); // this local state is used for showing extra inputs whenever "string" or "number" type selected 


  useEffect(() => {
    setCurrentKey("");
    setCurrentLabel("");
    setCurrentErrorMessage("");
    setCurrentPattern("");
    setCurrentRequired("");
    setCurrentRequiredMessage("");
    setShowContainer(currentType === "number" || currentType === "string");

  }, [currentType]);

  const dispatch = useDispatch();
  const { fields } = useSelector((state: RootState) => state.form);

  const handleAddingField = () => {
    if (fields[currentKey] !== undefined) {
      alert("Key already exists");
      return;
    }
    if (!currentKey || !currentLabel) {
      setCurrentRequiredMessage("This field is required");
      return;
    }

    if (currentType && currentKey && currentLabel) {
      // const pattern = currentPattern
      //   ? currentPattern.trim().toString()
      //   : undefined;

      dispatch(
        addField({
          key: currentKey.trim(),
          type: currentType as FieldType,
          label: currentLabel.trim(),
          errorMessage: currentErrorMessage.trim(),
          regexRules: currentPattern.trim(),
          required: currentRequired,
        })
      );
    }
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{ minWidth: { xs: "100%" }, margin: "auto", py: 2, px: 6 }}
    >
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
          helperText={ Boolean(!currentKey) && currentRequiredMessage}
          error={Boolean(currentRequiredMessage) && Boolean(!currentKey)}
        />
      </Grid>
      <Grid item xs={12}>
        <InputField
          onChange={(value) => setCurrentLabel(value)}
          label="Label"
          value={currentLabel}
          required
          helperText={Boolean(!currentLabel) && currentRequiredMessage}
          error={Boolean(currentRequiredMessage) && Boolean(!currentLabel)}


        />
      </Grid>
      <Grid item xs={12}>
          {/* {(currentType === "number" || currentType === "string") && ( */}
            <Grid 
             sx={{
              opacity: showContainer ? 1 : 0,
              height: showContainer ? "160px" : 0,
              transition: "opacity 500ms, height 500ms",
              overflow: "hidden",
            }}
             >

              <Grid item xs={12} display={"flex"}>
                <InputField
                  onChange={(value) => setCurrentErrorMessage(value)}
                  label="Custom error message"
                  value={currentErrorMessage}
                />
                <HelpPopover content="You can provide a specific error message to display when the input does not meet the validation rules (Custom pattern)." />
              </Grid>
              <Grid item xs={12} display={"flex"}>
                <InputField
                  onChange={(value) => setCurrentPattern(value)}
                  label="Custom pattern"
                  value={currentPattern}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">/</InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">/</InputAdornment>
                    ),
                  }}
                />
                <HelpPopover content="You can provide a regular expression to create a specific validation for the current field. For example, to create a pattern that ensures the input does not contain any special characters, you can use the following regular expression: ^[a-zA-Z0-9\s]*$." />
              </Grid>
            </Grid>
          {/* )} */}

          <Grid item xs={4} marginRight={"auto"}>
            <SwitchField
              label={"Required"}
              onChange={(value: string) => setCurrentRequired(value)}
              value={currentRequired}
              fieldtype={currentType}
            />
          </Grid>

        <Divider sx={{ my: 1, borderWidth: 1 }} />

        <Grid item xs={12} marginTop={"10px"}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddingField}
          >
            Add Field
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
