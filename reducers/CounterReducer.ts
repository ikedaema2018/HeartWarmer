import { CounterAction, CounterActionType } from '../actions/Count';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case CounterActionType.ADD_COUNT:
      return {
        ...state,
        value: state.value + (action.value || 0),
      };
    case CounterActionType.RESET_COUNT:
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;