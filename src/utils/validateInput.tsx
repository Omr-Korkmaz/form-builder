enum ParamType {
  Number = "number",
  String = "string",
}

export const validateInput = (  // Validate input value by using entered regular exp. 
  value: string,
  type: string,
  regexPattern?: RegExp | undefined,

  errorMessage?: string | undefined
): string => {
  if (type === ParamType.Number && !/^\d+$/.test(value)) {
    return "Type error, please provide number input.";
  } else if (regexPattern && !regexPattern.test(value)) {
    return errorMessage || "Invalid input";
  }

  return "";
};
