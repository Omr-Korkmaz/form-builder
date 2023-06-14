export const validationRules = [
    {
      name: 'greaterThanFive',
      rule: (value: string) => parseInt(value, 10) >= 5,
      message: 'The entered value must be greater than or equal to 5.',
    },
    {
      name: 'startsWithCapital',
      rule: (value: string) => /^[A-Z]/.test(value),
      message: 'The input must begin with a capital letter.',
    },
    {
      name: 'noSpecialChars',
      rule: (value: string) => /^[a-zA-Z\s]*$/.test(value),
      message: 'The input must not contain any special characters.',
    },
    {
      name: 'emailFormat',
      rule: (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
      message: 'Please enter a valid email address.',
    },
  ];
  