import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: ["Yuri"],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationsSlice.actions;

//slice를 reservationsSlice.reducer로 export default하면 reducer 모양으로 그대로 스토어에서 받을 수 있다.
export default reservationsSlice.reducer;

/*
    리듀서 함수를 구성할 때
    위에서는 직접 값을 변경하는 방법으로 구성하였는데
    만약 기존값을 복사하여 새로운 값을 만들어서 state에 저장한다면
    addReservation: (state, action: PayloadAction<string>) => {
      return { ...state, value:action.payload }
    },
    다음과 같이 전개연산자로 기존 값을 꺼낸 후 합쳐서 리턴해줘야 한다.
*/
