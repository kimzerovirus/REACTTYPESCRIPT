> - 툴킷에 대한 설명은 reservation파일에 정리함.

How to Start

```
yarn add react-redux @reduxjs/toolkit
```

### 이 예제는 slice로 구현되어 있습니다.

slice 객체는 `{ name, initialState, reducers, extraReducers }`로 구성되어 있다.
- name: 문자열을 값으로 받으며, prefix이다.
- initialState: 초기화
- reducers: slice 안에서 사용할 reducer 들을 만들수 있다, 해당 reducer들을 만들면 자동으로 slice.action에 reducers에서 만든 reducer에 대한 actionCreator 함수가 들어 있다.
- extraReducers: slice에서 만들어진 reducers에 의한 action, reducer가 아닌 외부에서 만들어진 action을 통해 현재 slice에서 사용하는 initialState에 변경을 가하는 경우 처리받는 reducer이다. (비동기 작업 함수 처리 등에 사용된다)

### 만약 기존의 thunk와 actions의 방식을 사용하고 싶다면

형식이 비슷한
```
import {createAction, createReducer} from "@reduxjs/toolkit"
```
에서 꺼내와 사용하면 된다.


### 리듀서 함수를 구성할 때

이 예제에서는 직접 값을 변경하는 방법으로 구성하였는데 만약 기존값을 복사하여 새로운 값을 만들어서 state에 저장한다면
```
addReservation: (state, action: PayloadAction<string>) => {
    return { ...state, value:action.payload }
},
```
다음과 같이 전개연산자로 기존 값을 꺼낸 후 합쳐서 리턴해줘야 한다.

### 비동기 다루기
toolkit에서 제공하는 *`createAsyncThunk()`* 를 활용해서 비동기 작업을 구현할 수 있다.
createAsyncThunk(type, payloadCreator, options)
- type: 해당 요청의 type명이다. `prefix/addPrefixAsync`와 같이 prefix를 포함하는 형식으로 작성하여야 한다. (여기서 말하는 prefix는 slice함수의 name부분)
- payloadCreator: actionCreator로 payload와 함께 보내져 요청되는 비동기 함수 실행 부분으로 arg(매개 변수), thunkAPI 두개의 인자를 받는다.
    - arg: 첫번째 인자로, actionCreator를 사용하면서 보낼 payload(인자)를 받아 실행하려는 비동기함수에 전달할 때 사용한다.
    - thunkAPI: dispatch, getState, rejectWithValue, fulfillWithValue 등의 함수를 실행 할수 있는 API 묶음이다.


참고 자료: 
 - [링크1](https://soyoung210.github.io/redux-toolkit/api/createAsyncThunk/)
 - [링크2](https://goforit.tistory.com/159?category=953061)
