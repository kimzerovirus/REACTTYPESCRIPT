import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";

// createStore를 대체해서 configureStore() 사용하면, Thunk, dev tool까지 자동으로 연결해준다.
//property명은 반드시 reducer로 시작한다.
export const store = configureStore({
  reducer: {
    reservations: reservationsReducer, //export 할 때 리듀서 모양 그대로 보냈기 때문에 바로 넣어줄 수 있다.
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; //store를 사용할때 이 타입을 이용한다.
export type AppDispatch = typeof store.dispatch; //dispatch타입 설정
