import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ContactState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialContactState: ContactState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSlice = createSlice({
  name: "contact",
  initialState: initialContactState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setName, setEmail, setSubject, setMessage } =
  ContactSlice.actions;

export default ContactSlice.reducer;
