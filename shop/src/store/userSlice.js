import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeAge(state) {
      state.age += 1;
    },
  },
});

export let { changeAge } = user.actions;
export default user;
