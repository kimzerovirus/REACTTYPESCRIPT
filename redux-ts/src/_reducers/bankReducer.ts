import { Action } from "../_actions/actions";
import { ActionType } from "../_actions/action-types";

const initialState = 0;

// interface Action {
//   type: string;
//   payload?: number; // 파산의 경우 payload가 필요없음 따라서 이렇게 하나로 만들게 아니라 조건별로 타입을 만들어줘야된다.
// }

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      if (state < 500) {
        return 0;
      } else {
        return state - action.payload;
      }
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
