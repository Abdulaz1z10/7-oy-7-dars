import { createSlice } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
let date = sub(new Date(), { minutes: 10 }).toISOString();
const initialState = [
  {
    id: 1,
    title: "Learn Modern Redux",
    select: "Asilbek",
    date: date,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam incidunt commodi quidem.",
  },
];

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title, select, content }) {
        return {
          payload: {
            title: title,
            date: new Date().toISOString(),
            select: select,
            content: content,
          },
        };
      },
    },
  },
});
export const getUsers = (state) => state.user_card;
export const { userAdded } = UserSlice.actions;
export default UserSlice.reducer;
