import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export enum FieldType {
  Number = "number",
  String = "string",
  Date = "date",
  Boolean = "boolean",
}

export type ValidationType = {
  [key: string]: string; //  index signature to provide string-based indexing
};

export type Field = {
  key: string;
  type: FieldType;
  label: string;
  value: string;
//   validationRules: ValidationType;
errorMessage?: string,
regexRules?: RegExp,
required?:string,

};

export interface FormState {
  fields: { [key: string]: Field };
}

const initialState: FormState = {
  fields: {},
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addField: (
      state: FormState,
      action: PayloadAction<{
        key: string;
        type: FieldType;
        label: string;
        errorMessage?: string,
        regexRules?: RegExp,
        required?:string   
         // validationRules: ValidationType;
      }>
    ) => {
      const { key, type, label,  errorMessage, regexRules, required } = action.payload;

      state.fields[key] = {
        key,
        type,
        label,
        value: "",
        // validationRules,
        errorMessage,
        regexRules,
        required
      };
    },
    setValue: (
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      const { key, value } = action.payload;
      const field = state.fields[key];

      field.value = value;
    },

    removeField: (state, action: PayloadAction<string>) => { // Delete field when the action called
      const keyToRemove = action.payload;
      delete state.fields[keyToRemove];
    },
  },
});

export const { addField, setValue, removeField } = formSlice.actions;
export const formReducer = formSlice.reducer;
