import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

// useState 랑 비슷 state 하나를 slice 라고 부름.
// 1. slice 를 생성한다.
// 2. slice 를 reducer 에 등록한다.

// state 수정하는 법
// 1. state 수정해주는 함수 만들기 reducers
// 2. export 해줌 name.actions

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "white and black", count: 2 },

    { id: 1, name: "grey yordan", count: 1 },
    // { id: 0, name: "White and Black", count: 1 },
  ],

  reducers: {
    changeCount(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].count += 1;
      // item.id 라 ..
    },

    addCart(state, action) {
      {
        const item = action.payload;
        // return [...state, item];

        console.log("장바구니에 추가될 아이템:", item);
        state.push(item); // state 를 직접 수정하는 방법
        console.log("추가 후:", [...state]);
      }
    },
  },
});

export let { changeCount, addCart } = cart.actions; // . actions 하면 reducers 만 남음.

export default configureStore({
  reducer: {
    user: user.reducer, // user 라는 이름으로 slice 를 reducer 에 등록
    // user 는 state 의 이름이 되고, user.reducer 는 slice 의 reducer 가 된다.
    // slice 는 state 의 조각을 의미한다.
    // slice 는 state 의 일부를 관리하는데 사용된다.
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
