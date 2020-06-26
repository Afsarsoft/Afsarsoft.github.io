// Validation
export interface ValidateStuff {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export const validate = (validateStuffInput: ValidateStuff) => {
  let isValid = true;

  if (validateStuffInput.required) {
    isValid = isValid && validateStuffInput.value.toString().trim().length !== 0;
  }

  if (validateStuffInput.minLength != null && typeof validateStuffInput.value === 'string') {
    isValid = isValid && validateStuffInput.value.length >= validateStuffInput.minLength;
  }

  if (validateStuffInput.maxLength != null && typeof validateStuffInput.value === 'string') {
    isValid = isValid && validateStuffInput.value.length <= validateStuffInput.maxLength;
  }

  if (validateStuffInput.min != null && typeof validateStuffInput.value === 'number') {
    isValid = isValid && validateStuffInput.value >= validateStuffInput.min;
  }

  if (validateStuffInput.max != null && typeof validateStuffInput.value === 'number') {
    isValid = isValid && validateStuffInput.value <= validateStuffInput.max;
  }

  return isValid;
}
