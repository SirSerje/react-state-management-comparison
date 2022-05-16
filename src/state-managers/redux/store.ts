import { Action } from "redux";

export interface State {
  count: number;
}

const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
export const increment = () => ({ type: ACTION_TYPES.INCREMENT });
export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });

const initialState: State = {
  count: 0,
};
export const counterReducer = (state = initialState, action: Action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ACTION_TYPES.DECREMENT:
      return {
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    default:
      return state;
  }
};
