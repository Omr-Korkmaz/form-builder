import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
export enum FieldType {
    Number = 'number',
    String = 'string',
    Date = 'date',
    Boolean = 'boolean',
}


export interface ValidationType {
    startsWithCapital:string,
    greaterThanFive:string,
    emailFormat:string,
    noSpecialChars:string,
    validDate:string,
}


type Field = {
    key: string,
    type: FieldType,
    label: string,
    value: string,
    validationRules :ValidationType
//     startsWithCapital:string,
//     greaterThanFive:string,
//     emailFormat:string,
//     noSpecialChars:string,
//     validDate:string,
}

export interface FormState {
    fields: { [key: string]: Field }
}

const initialState: FormState = {
    fields: {},
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addField: (state: FormState, action: PayloadAction<{ key: string, type: FieldType, label: string, validationRules: ValidationType,
   
         }>) => {
            const { key, type, label, validationRules

             } = action.payload

            state.fields[key] = {
                key,
                type,
                label,
                value: '',
                validationRules,
            }
        },
        setValue: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload
            const field = state.fields[key];

            field.value = value;

        },

        removeField: (state, action: PayloadAction<string>) => {
            const keyToRemove = action.payload;
            delete state.fields[keyToRemove];
        },
    },
})

export const { addField, setValue, removeField } = formSlice.actions
export const formReducer = formSlice.reducer