import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: 1, name: "John Sinha", ph: "000-000-000", type: "work", imp: true },
  ],
};

export const ContactSlice = createSlice({
  name: "ContactSlice",
  initialState,

  reducers: {
    addContact: (state, action) => {
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        ph: action.payload.ph,
        type: action.payload.type,
        imp: action.payload.imp,
      };

      state.contacts.push(contact);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter((t) => {
        return t.id !== action.payload;
      });
    },
  },
});

export const { addContact, removeContact } = ContactSlice.actions; // 'actions' instead of 'action'
export default ContactSlice.reducer;
