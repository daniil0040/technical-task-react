import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { constants } from 'helpers';

axios.defaults.baseURL = 'https://6551a0375c69a7790328f807.mockapi.io';

export const getAllItemsPerPage = createAsyncThunk(
  'advert/getAllItemsPerPage',
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(`/advert`, {
        params: {
          limit: constants.ITEMS_PER_PAGE,
          page,
        },
        signal: thunkAPI.signal,
      });
      return response.data;
    } catch (e) {
      if (e.code !== constants.ERROR_CANCELED_STATUS_CODE) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const getAllItems = createAsyncThunk(
  'advert/getAllItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/advert`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
