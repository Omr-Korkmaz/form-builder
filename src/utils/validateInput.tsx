enum ParamType {
    Number = "number",
    String = "string",
  }
  
  export const validateInput = (
    value: string,
    type: string,
    regex: RegExp | undefined,
    
    errorMessage: string | undefined
  ): string => {
    if (type === ParamType.Number && !/^\d+$/.test(value)) {
      return "Type error";
    } else if (regex && !regex.test(value)) {
      return errorMessage || "Invalid input";
    }
  
    return "";
  };