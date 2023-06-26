import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export enum FieldType {
  Number = "number",
  String = "string",
  Date = "date",
  Boolean = "boolean",
}

export type Field = {
  key: string;
  type: FieldType;
  label: string;
  value: string;
  errorMessage?: string,
  regexRules?: string,
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
        regexRules?: string, 
        required?:string   
      }>
    ) => {
      const { key, type, label, errorMessage, regexRules, required } = action.payload;

      state.fields[key] = {
        key,
        type,
        label,
        value: "",
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
