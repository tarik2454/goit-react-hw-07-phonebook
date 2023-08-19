import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const pending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const itemIndex = state.items.findIndex(
          item => item.id === action.payload
        );
        if (itemIndex !== -1) {
          state.items.splice(itemIndex, 1);
        }
      })

      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        (state, action) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchContacts.pending, deleteContact.pending),
        pending
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
