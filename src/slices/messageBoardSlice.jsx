// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [{ id: 1, message: "This is the first message." }],
  prevId: 1,
};

export const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        id: state.prevId + 1,
        message: action.payload,
      });
      state.prevId += 1;
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addMessage, deleteMessage } = messageBoardSlice.actions;

export const selectMessages = (state) => state.messageBoard.messages;

export default messageBoardSlice.reducer;
