import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { toast } from 'react-toastify';

export const baseURL = axios.create({
  baseURL: 'https://64df632671c3335b2582897e.mockapi.io',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    // toast.info('You have active loading');
    try {
      const { data } = await baseURL.get('/api/contacts');

      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await baseURL.post('/api/contacts', body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await baseURL.delete(`/api/contacts/${String(id)}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     console.log(getState());
  //     const isLoading = getState().contacts.isLoading;
  //     if (isLoading) {
  //       alert('You have active loading');
  //       return false;
  //     }
  //   },
  // }
);
