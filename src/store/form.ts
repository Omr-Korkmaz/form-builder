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
            //  startsWithCapital:string,
            // greaterThanFive:string,
            // emailFormat:string,
            // noSpecialChars:string,
            // validDate:string,
         }>) => {
            const { key, type, label, validationRules
                //  startsWithCapital,
                // greaterThanFive,
                // emailFormat,
                // noSpecialChars,
                // validDate,
             } = action.payload

            state.fields[key] = {
                key,
                type,
                label,
                value: '',
                validationRules,
                // startsWithCapital,
                // greaterThanFive,
                // emailFormat,
                // noSpecialChars,
                // validDate,
            }
        },
        setValue: (state, action: PayloadAction<{ key: string, value: string }>) => {
            const { key, value } = action.payload
            const field = state.fields[key];

            field.value = value;
            console.log("field", field.value )

        }
    },
})

export const { addField, setValue } = formSlice.actions
export const formReducer = formSlice.reducer