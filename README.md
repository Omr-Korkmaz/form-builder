

https://github.com/Omr-Korkmaz/form-builder/assets/39599546/f37f0f28-ca8b-46aa-b878-878b47d50e42



# Project Description

The Form Builder App allows users to create and validate form fields dynamically (user-defined). It provides a interface to define form fields.

# Key Features & Logic

1. Form State Management: The FormState is managed using Redux, which provides a centralized store to handle form data. 

2. Dynamic Form Field Creation: Users can dynamically create form fields by specifying the field type, key, label, custom error message, and custom Regex pattern. The logic for field creation is implemented in "FormBuilder.tsx". Additionally, local error handling is implemented to display the message "This field is required" when the user hasn't filled in the "label" and "key" fields.  The form builder section includes information icons next to the "custom error message" and "custom pattern" fields, providing explanations about these features. The helpIcon triggers a reusable Material UI Popover component located in the utils folder.

3. Validation Rule Configurations: The "validateInput" function (located in the utils folder) is a reusable function that checks if a value matches a specific type, such as number, and also verifies if the entered value matches the provided pattern. Based on the value, it returns a custom error message.

4. Error Messages: Validation errors are displayed using Material UI element attributes (error and helperText). Errors are triggered when the user clicks outside the field or on another field, indicating whether the entered data is incorrect. Validation errors are not applied to "Date" and "Boolean" fields because these field types have correct input formats by default.

5. Remove Feature: The app includes a feature to remove fields from the form preview section. Users can easily remove unwanted fields as needed.

# Design

1. General Design: The app is designed to be responsive using grid and Material-UI styled components.

4. User Interface (for Field) Design: The user interface incorporates hover effects and guide text to provide visual cues and hints, enhancing the user experience. The interface dynamically adapts based on the selected field type, making it more intuitive and user-friendly.
