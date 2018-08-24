export const record = pattern => {
  return {
    type: "RECORD_PATTERN",
    patternValue: pattern
  };
};

export const reset = () => {
  return {
    type: "RESET_PATTERN"
  };
};

export const checkTrue = () => {
  return {
    type: "CHECK_PATTERN_TRUE"
  };
};
export const checkError = () => {
  return {
    type: "CHECK_ERROR"
  };
};
