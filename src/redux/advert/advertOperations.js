import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6551a0375c69a7790328f807.mockapi.io';

export const getAllItems = createAsyncThunk(
  'advert/getAllItems',
  async (page = 1, controller, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        limit: 12,
        page,
      });
      console.log(controller);
      const response = await axios.get(`/advert?${params}`, {
        signal: controller.signal,
      });
      // console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
