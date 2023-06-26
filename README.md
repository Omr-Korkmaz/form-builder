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







## Updated by Omer Korkmaz by adding the text below:


# Project Description

The Form Builder App allows users to create and validate form fields dynamically (user-defined). It provides a interface to define form fields.

# Key Features & Logic

1. Form State Management: The FormState is managed using Redux, which provides a centralized store to handle form data. 

2. Dynamic Form Field Creation: Users can dynamically create form fields by specifying the field type, key, label, custom error message, and custom Regex pattern. The logic for field creation is implemented in "FormBuilder.tsx". Additionally, local error handling is implemented to display the message "This field is required" when the user hasn't filled in the "label" and "key" fields.  The form builder section includes information icons next to the "custom error message" and "custom pattern" fields, providing explanations about these features. The helpIcon triggers a reusable Material UI Popover component located in the utils folder.

3. Validation Rule Configurations: The "validateInput" function (located in the utils folder) is a reusable function that checks if a value matches a specific type, such as number, and also verifies if the entered value matches the provided pattern. Based on the value, it returns a custom error message.

4. Error Messages: Validation errors are displayed using Material UI element attributes (error and helperText). Errors are triggered when the user clicks outside the field or on another field, indicating whether the entered data is incorrect. Validation errors are not applied to "Date" and "Boolean" fields because these field types have correct input formats by default.

5. Remove Feature:  This is an extra feature. The app includes a feature to remove fields from the form preview section. Users can easily remove unwanted fields as needed.

# Design

1. General Design: The app is designed to be responsive using grid and Material-UI styled components.

4. User Interface (for Field) Design: The user interface incorporates hover effects and guide text to provide visual cues and hints, enhancing the user experience. The interface dynamically adapts based on the selected field type, making it more intuitive and user-friendly.