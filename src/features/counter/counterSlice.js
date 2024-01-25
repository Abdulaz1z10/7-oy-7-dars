import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
    count1: 0,
    users: [],
    users1: []
}
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, actions) {
      state.count += actions.payload;
    },
    decrement(state, actions) {
      state.count -= actions.payload;
    },
    increment1(state) {
      state.count1 += 1;
    },
    decrement1(state) {
      state.count1 -= 1;
    },
    increment2(state, action) {
      state.users.push(action.payload);
    },
    increment3(state, action) {
      state.users[action.payload] += 1;
    },
    decrement3(state, action) {
      state.users[action.payload] -= 1;
    },
    remove(state, action) {
      state.users1.splice(action.payload, 1);
    },
    editOpen(state, action) {
      state.modal = true;
      state.defualtValue = action.payload;
    },

    editOpen2(state, action) {
      state.index = action.payload;
    },
  },
});

export const {increment, decrement, increment1, decrement1, increment2, increment3, decrement3, remove, editOpen, editOpen2} = counterSlice.actions
export default counterSlice.reducer