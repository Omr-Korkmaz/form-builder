# Frontend Developer Homework Assignment

## Objective:

You will be working with an existing form builder. The builder provides a possibility to choose one of several field types, set a key, a label, and add it into a form. Your task is divided into two main parts.

## Task Details:

### 1. Field Input Validation:

In the existing application, we need to add validation to each input field according to its assigned type. For instance, if a field's type is ParamType.Number, the system should not allow the input of any non-numeric characters or symbols. Conversely, if the type is ParamType.String, any character input should be acceptable.

If a user attempts to input data that does not conform to the field's type, your solution should trigger an error function that displays an appropriate message. Validation should be triggered upon the blur event on each field.

### 2. Dynamic Validation Setting:

In addition to basic field type validation, we need a feature that allows additional, user-defined validation rules to be set directly through the interface. This functionality should allow for rules such as:

- The entered value must be greater than or equal to 5.
- The input must begin with a capital letter.
- The input must match a specific pattern (e.g., an email format).
- The input must not contain any special characters.
- The input must be a valid date. 

The interface should allow for the definition of these and other validation rules, without requiring modifications to the codebase for each new rule. The specifics of how you enable this dynamic rule-setting are up to you, but we're looking for an innovative, flexible, and scalable solution.

## Submission:

Submit your solution by pushing your code to a public GitHub repository. Ensure your code is clean, well-commented, and adheres to our current project structure. Also, include a README file that explains your thought process and the design of your solution.

## Evaluation Criteria:

- The code must be clean, efficient and well-commented.
- The solution should successfully implement the features described above.
- The design should be scalable and maintainable, allowing for the possibility of adding more validation types in the future.
- The README file should provide clear insight into your thought process and the rationale behind your design decisions.

Good luck!






###### Updated by Omer Korkmaz by adding the text below ######


# Project Description

The Form Builder App allows users to create and validate form fields dynamically. It provides a user-friendly interface to define form fields, specify validation rules.

# Key Features

1. Dynamic Form Field Creation: Users can create form fields dynamically by providing a field type, key, label, and following validations 
    - The entered value must be greater than or equal to 5.
    - The input must begin with a capital letter.
    - The input must match a specific pattern (e.g., an email format).
    - The input must not contain any special characters.
    - The input must be a valid date.

2. Validation Rule Configuration: Users can define validation rules for each form field before add to form preview section. there are some combination for these validation. user can not select all validation at the same time. forexample:
 
  - Depending on fieldtype:
if selected fieldtype is number ("Greater than or equal to 5" and "Required Field" are active the others is disable )
If the field type is set to string, the "Begin with a capital letter", "Not contain special chars", "Required Field", and "Valid email address" validations are active, while the others are disabled. 

  - also the app provide combination depending on validation rules 
   if Valid email address is selected Not contain special chars will be disable. (vice versa)


3. Error Messages: Validation errors are displayed using the Material UI element attributes (error and helperText). Errors are triggered when the user clicks outside the field or on another field, indicating if the entered data is incorrect. Validation errors is not applied "Date" and "Boolean"  because these field type correct input by itself

4. Remove Feature:  This is an extra feature. The app includes a feature to remove fields from the form preview section. Users can easily remove unwanted fields as needed.


# Design Logic

 1. Form State Management: The FormState is managed using Redux, which provides a centralized store to handle form data and validation rules. 

2. Validation Rules and Error Handling: The app utilizes the Material UI switch slide components to represent each validation rule. The validation logic is implemented in the switchField component, where the error messages are displayed based on the validation results.

3. Reusable Components and Utils: The switchField component is designed to be reusable and handles the display and logic for each validation rule. The app also includes a utils folder and a validationRules file. The validationRules file consists of objects containing the name, rule, and error message for each validation rule. This structure enables easy management and configuration of validation rules.

4. User Interface Design: The user interface is styled with hover effects and guide text, providing visual cues and hints to enhance the user experience. The interface adapts dynamically based on the selected field type, making it more intuitive and user-friendly.
