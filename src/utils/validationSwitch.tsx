

// import { ValidationType } from "../store/form";

// export const validationSwitch = ( // Depending on selected validation rules change the other validation rules disabled value(true or false)
//   label: string,
//   fieldtype: string,
//   validationRulesValues: ValidationType
// ): boolean => {

//         if (!fieldtype || fieldtype === "boolean") {
//           return true;
//         }
    
//         if (fieldtype === "string") {
//           if (label === "Greater than or equal to 5" || label === "Valid Date") return true;
//         }
//         if (fieldtype === "number") {
//           if (
//             label === "Begin with a capital letter" ||
//             label === "Valid email address" ||
//             label === "Not contain special chars" ||
//             label === "Valid Date"
//           )
//             return true;
//         }
    
//         if (fieldtype === "date") {
//           if (
//             label === "Begin with a capital letter" ||
//             label === "Valid email address" ||
//             label === "Not contain special chars" ||
//             label === "Greater than or equal to 5"
//           )
//             return true;
//         }
    
//         if (validationRulesValues.emailFormat === "1" && label === "Not contain special chars") {
//           return true;
//         }
    
//         if (validationRulesValues.noSpecialChars === "1" && label === "Valid email address") {
//           return true;
//         }
//         else{
//             return false
//         }
        
//       }