import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {fetchList} from '../api'

interface SerializedError {
  name?: string
  message?: string
  code?: string
  stack?: string
}

interface ReservationState {
  value: string[];
  status: 'idle' | 'loading' | 'failed';
  error: SerializedError | any
}

const initialState: ReservationState = {
  value: ["Yuri"],
  status: 'idle',
//   loading: false,
  error: null
};

export const addReservationAsync = createAsyncThunk(
    "reservation/addReservationAsync",
    async (userData, thunkAPI) => {
        try {
            const {data} = await fetchList();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e) // { rejectWithValue } 이렇게 가져오면 더 편할듯
        }
    }
)

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
  extraReducers: (builder) => {
    builder
        .addCase(addReservationAsync.pending, state => {
            state.status = "loading"
        })
        .addCase(addReservationAsync.fulfilled, (state, action)=>{
            state.status = "idle";
            const list = action.payload.map(user => user.login).splice(0,10)
            state.value.push(...list)
        })
        .addCase(addReservationAsync.rejected, (state, action) => {
            state.status = "failed";
            // if (action.payload) state.error = action.payload
            state.error = action.error
            // console.log(action.error) // {message: 'Rejected'} 이렇게 반환된다.
        })
  },
});

export const { addReservation, removeReservation } = reservationsSlice.actions;

//slice를 reservationsSlice.reducer로 export default하면 reducer 모양으로 그대로 스토어에서 받을 수 있다.
export default reservationsSlice.reducer;

/*
    * 이 예제는 slice로 구현되어 있다 *
    slice 객체는 {name, initialState, reducers, extraReducers}로 구성되어 있다.
     - name: string을 값으로 받으며, prefix로 사용된다.
     - initialState: 초기화
     - reducers: slice 안에서 사용할 reducer 들을 만들수 있다, 해당 reducer들을 만들면 자동으로 slice.action에 reducers에서 만든 reducer에 대한 actionCreator 함수가 들어 있다.
     - extraReducers: slice에서 만들어진 reducers에 의한 action, reducer가 아닌 외부에서 만들어진 action을 통해 현재 slice에서 사용하는 initialState에 변경을 가하는 경우 처리받는 reducer이다. (비동기 작업 함수 처리 등에 사용된다)

    * 만약 기존의 thunk와 actions의 방식을 사용하고 싶다면 *
    형식이 비슷한
    import {createAction, createReducer} from "@reduxjs/toolkit" 
    에서 꺼내와 사용하면 된다.


    * 리듀서 함수를 구성할 때 *
    위에서는 직접 값을 변경하는 방법으로 구성하였는데
    만약 기존값을 복사하여 새로운 값을 만들어서 state에 저장한다면
    addReservation: (state, action: PayloadAction<string>) => {
      return { ...state, value:action.payload }
    },
    다음과 같이 전개연산자로 기존 값을 꺼낸 후 합쳐서 리턴해줘야 한다.

    * 비동기 다루기 *
    toolkit에서 제공하는 createAsyncThunk()를 활용해서 비동기 작업을 구현할 수 있다.
    createAsyncThunk(type, payloadCreator, options)
     - type: 해당 요청의 type명으로, prefix를 포함해서 작성해 주어야 한다. (pending, fulfilled, rejected는 알아서 상황에 맞게 붙여짐으로 고려하지 않아도 됨)
     - payloadCreator: actionCreator로 payload와 함께 보내져 요청되는 비동기 함수 실행 부분이다. (인자 두개를 받음)
     - arg: 첫번째 파라미터로 지정하면, actionCreator를 사용하면서 보낼 payload(인자)를 받아 실행하고자 하는 비동기 함수를 구성하는데 사용될 사용자 입력으로 활용할 수 있다.
     - thunkAPI: dispatch, getState, rejectWithValue, fulfillWithValue 등의 함수를 실행 할수 있는 API 묶음이다.
*/
