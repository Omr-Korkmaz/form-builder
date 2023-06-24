import { Dropdown } from "./fields/Dropdown.tsx";
import { useEffect, useState } from "react";
import { addField, FieldType } from "../store/form.ts";
import {
  Button,
  Grid,
  Typography,
  Divider,
  InputAdornment,
  Container,
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
  const [currentRequired, setCurrentRequired] = useState("false");

  const [currentError, setCurrentError] = useState("");

  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentType === "number" || currentType === "string") {
        setShowAdditionalInputs(true);
      } else {
        setShowAdditionalInputs(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [currentType]);

  useEffect(() => {
    setCurrentKey("");
    setCurrentLabel("");
    setCurrentErrorMessage("");
    setCurrentPattern("");
    setCurrentRequired("");
  }, [currentType]);

  const dispatch = useDispatch();
  const { fields } = useSelector((state: RootState) => state.form);

  const handleAddingField = () => {
    if (fields[currentKey] !== undefined) {
      alert("Key already exists");
      return;
    }
    if (!currentKey || !currentLabel) {
      setCurrentError("not keep empty");
      return;
    }

    if (currentType && currentKey && currentLabel) {
      const pattern = currentPattern.trim()
        ? currentPattern.trim().toString()
        : undefined;

      dispatch(
        addField({
          key: currentKey.trim(),
          type: currentType as FieldType,
          label: currentLabel.trim(),
          errorMessage: currentErrorMessage.trim(),
          regexRules: pattern,
          required: currentRequired,
        })
      );
    }
  };

  return (
    <Grid
      container
      spacing={2}
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
          {(currentType === "number" || currentType === "string") && (
            <Container>
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
            </Container>
          )}

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
