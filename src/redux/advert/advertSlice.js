import { createSlice } from '@reduxjs/toolkit';
import { getAllItems, getAllItemsPerPage } from './advertOperations';

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
      visibleItems: [],
      allItems: [],
      isLoading: false,
      error: null,
    },
    filters: {
      carBrand: '',
      price: '',
      mileageMin: '',
      mileageMax: '',
    },
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.filters = {
        carBrand: '',
        price: '',
        mileageMin: '',
        mileageMax: '',
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllItemsPerPage.pending, handlePending)
      .addCase(getAllItemsPerPage.fulfilled, (state, action) => {
        state.cars.visibleItems = [
          ...state.cars.visibleItems,
          ...action.payload,
        ];
        state.cars.isLoading = false;
        state.cars.error = null;
      })
      .addCase(getAllItemsPerPage.rejected, handleRejected)
      .addCase(getAllItems.pending, handlePending)
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.cars.allItems = action.payload;
        state.cars.isLoading = false;
        state.cars.error = null;
      })
      .addCase(getAllItems.rejected, handleRejected);
  },
});

export const advertReduser = advertSlice.reducer;
export const { setFilters, resetFilters } = advertSlice.actions;
