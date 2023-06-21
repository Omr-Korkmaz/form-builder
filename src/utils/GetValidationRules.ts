// export const GetValidationRules = (
//   // pattern: RegExp,
//   pattern: RegExp,

//   customMessage: string
// ): { rule: (value: string) => boolean; errorMessage: string }[] => {

//   console.log("sdsdsd", {pattern})
//   const validationRules = [
//     {
//       name: 'custom',
//       rule: (value: string) => {pattern.test(value)},
//       errorMessage: customMessage,
//     },
//     {
//       name: 'startsWithCapital',
//       rule: (value: string) => /^[A-Z]/.test(value),
//       errorMessage: 'The input must begin with a capital letter.',
//     },
//     {
//       name: 'noSpecialChars',
//       rule: (value: string) => /^[a-zA-Z0-9\s]*$/.test(value),
//       errorMessage: 'The input must not contain any special characters.',
//     },
//     {
//       name: 'emailFormat',
//       rule: (value: string) =>
//         /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
//       errorMessage: 'Please enter a valid email address.',
//     },
//     {
//       name: 'validDate',
//       rule: (value: string) =>
//         /^((0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4})$/.test(value),
//       errorMessage: 'Please enter a valid date in the format DD/MM/YYYY.',
//     },
//   ];

//   return [...validationRules];
// };







// // export const validationRules = [
// //     {
// //       name: 'greaterThanFive',
// //       rule: (value: string) => parseInt(value, 10) >= 5,
// //       errorMessage: 'The entered value must be greater than or equal to 5.',
// //     },
// //     {
// //       name: 'startsWithCapital',
// //       rule: (value: string) => /^[A-Z]/.test(value),
// //       errorMessage: 'The input must begin with a capital letter.',
// //     },
// //     {
// //       name: 'noSpecialChars',
// //       rule: (value: string) => /^[a-zA-Z0-9\s]*$/.test(value),
// //       errorMessage: 'The input must not contain any special characters.',
// //     },
// //     {
// //       name: 'emailFormat',
// //       rule: (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
// //       errorMessage: 'Please enter a valid email address.',
// //     },
// //     {
// //       name: 'validDate',
// //       rule: (value: string) =>  /^((0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4})$/.test(value),
// //       errorMessage: 'Please enter a valid date ex: DD/MM/YYYY',
// //     },
   

   
// //   ];
  