import { createSlice } from '@reduxjs/toolkit';
import { getAllItems } from './advertOperations';

const handlePending = state => {
  state.cars.isLoading = true;
};
const handleRejected = (state, action) => {
  state.cars.isLoading = false;
  state.cars.error = action.payload;
};

const advertSlice = createSlice({
  name: 'advert',
  initialState: {
    cars: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllItems.pending, handlePending)
      .addCase(getAllItems.fulfilled, (state, action) => {
        // const uniqueAdverts = action.payload.filter(
        //   newAdvert =>
        //     !state.cars.items.some(
        //       existingAdvert => existingAdvert.id === newAdvert.id
        //     )
        // );
        state.cars.items = [...state.cars.items, ...action.payload];
        state.cars.isLoading = false;
        state.cars.error = null;
      })
      .addCase(getAllItems.rejected, handleRejected);
  },
});

export const advertReduser = advertSlice.reducer;
