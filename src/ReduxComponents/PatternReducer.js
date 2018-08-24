export const PatternReducer = (
  state = {
    loading: false,
    done: false,
    error: false,
    selectedPattern: []
  },
  action
) => {
  switch (action.type) {
    case "RECORD_PATTERN":
      return Object.assign({}, state, { selectedPattern: action.patternValue });
    case "RESET_PATTERN":
      return Object.assign({}, state, {
        selectedPattern: [],
        loading: false,
        done: false,
        error: false
      });
    case "CHECK_PATTERN_TRUE":
      return Object.assign({}, state, { done: true });
    case "CHECK_ERROR":
      return Object.assign({}, state, { error: true });
    default:
      return state;
  }
};
