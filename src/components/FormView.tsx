import { RootState } from "../store/config.ts";
import { useDispatch, useSelector } from "react-redux";
import { FieldType, setValue, removeField } from "../store/form.ts";
import { InputField } from "./fields/InputField.tsx";
import { CheckboxField } from "./fields/CheckboxField.tsx";
import { DateField } from "./fields/DateField.tsx";
import { Box, Divider, Grid, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
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

      switch (field.type) {
        case FieldType.Number:
        case FieldType.String:
          renderedFields.push(
            <Grid item xs={12} key={key}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position:"relative"
                }}
              >
                <InputField
                  label={label}
                  onChange={onChange}
                  value={value}
                  field={field}
                  section="view"
                />
                <DeleteIcon
                  onClick={onRemove}
                  sx={{
                    position: "absolute",
                    right: -30,
                    top: 30,
                    // transform: "translateY(-50%)",
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
                  position:"relative",
                    borderRadius: 1,
          border: 'thin dashed gray'

               
                }}
              >
              <CheckboxField label={label} onChange={onChange} value={value}
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
                  position:"relative"

                
                }}
              >
              <DateField label={label} onChange={onChange} value={value} />
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
    <Grid container spacing={2} sx={{ width: 300, margin: "auto",  pb:2  }}>
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
