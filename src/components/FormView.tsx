import { RootState } from "../store/config.ts";
import { useDispatch, useSelector } from "react-redux";
import { FieldType, setValue, removeField } from "../store/form.ts";
import { InputField } from "./fields/InputField.tsx";
import { CheckboxField } from "./fields/CheckboxField.tsx";
import { DateField } from "./fields/DateField.tsx";
import { Box, Divider, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const FormView = () => {
  const { fields } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const renderFields = () => {
    const renderedFields = [];
    for (const key in fields) {
      const field = fields[key];
      const label = field.label;
      const onChange = (value: string) => dispatch(setValue({ key, value }));
      const value = field.value;
      const onRemove = () => dispatch(removeField(key)); //this key line added for extra feature

    //   const errorMessage = field.errorMessage;
    //   const regex = field.regex;

      console.log("viewsectoin", field)

      switch (field.type) {
        case FieldType.Number:
        case FieldType.String:


        // if (regex && !regex.test(value)) {
          
        //       error: true,
        //       helperText: "Invalid input.",
          
        //   }

          renderedFields.push(
            <Grid item xs={12} key={key}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <InputField
                  label={label}
                  onChange={onChange}
                  value={value}

                //   helperText={errorMessage}
                //   regex={regex}
                  field={field}
                  section="formPreview" // to see  where the inputField belongs. depending on formPreview or FormBuilder display error message
// regex={regex}
                //   error={errorMessage !== undefined}
                />
                <DeleteIcon 
                  onClick={onRemove}
                  sx={{
                    position: "absolute",
                    right: -30,
                    top: 30,
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.15)",
                      color: "#8f130c",
                    },
                    transition: "color 0.2s, transform 0.2s",
                  }}
                />
              </Box>
            </Grid>
          );
          break;
        case FieldType.Boolean:
          renderedFields.push(
            <Grid item xs={12} key={key}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  borderRadius: 1,
                  border: "thin dashed lightGray",
                }}
              >
                <CheckboxField
                  label={label}
                  onChange={onChange}
                  value={value}
                //   field={field}
                // error={errorMessage !== undefined}
                // helperText={errorMessage}
                />
                <DeleteIcon
                  onClick={onRemove}
                  sx={{
                    position: "absolute",
                    right: -30,
                    top: 10,
                    "&:hover": {
                      transform: "scale(1.15)",
                      color: "#8f130c",
                    },
                    transition: "color 0.2s, transform 0.2s",
                  }}
                />
              </Box>
            </Grid>
          );
          break;
        case FieldType.Date:
          renderedFields.push(
            <Grid item xs={12} key={key}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <DateField
                  field={field}
                  label={label}
                  onChange={onChange}
                  value={value}
                //   error={errorMessage !== undefined}
                //   helperText={errorMessage}
                />
                <DeleteIcon
                  onClick={onRemove}
                  sx={{
                    position: "absolute",
                    right: -30,
                    top: 30,
                    "&:hover": {
                      transform: "scale(1.15)",
                      color: "#8f130c",
                    },
                    transition: "color 0.2s, transform 0.2s",
                  }}
                />
              </Box>
            </Grid>
          );
      }
    }
    

    return renderedFields;
  };

  return (
    <Grid container spacing={2} sx={{ width: 300, margin: "auto", pb: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Form Preview
        </Typography>
        <Divider sx={{ my: 2, borderWidth: 1 }} />
      </Grid>
      {renderFields()}
    </Grid>
  );
};
