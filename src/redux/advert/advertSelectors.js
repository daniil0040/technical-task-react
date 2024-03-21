import { createSelector } from '@reduxjs/toolkit';

export const selectPaginetedItems = state => state.advert.cars.visibleItems;
export const selectIsLoading = state => state.advert.cars.isLoading;
export const selectError = state => state.advert.cars.error;
export const selectAllItems = state => state.advert.cars.allItems;
export const selectFilters = state => state.advert.filters;

export const selectVisibleItems = createSelector(
  [selectAllItems, selectFilters, selectPaginetedItems],
  (allItems, { carBrand, price, mileageMin, mileageMax }, paginetedItems) => {
    if (!carBrand && !price && !mileageMin && !mileageMax) {
      return paginetedItems;
    }

    return allItems
      .filter(item => {
        if (carBrand === '') return true;
        return item.make.toLowerCase() === carBrand;
      })
      .filter(item => {
        if (price === '') return true;
        return Number(item.rentalPrice.substring(1)) <= Number(price);
      })
      .filter(item => {
        if (mileageMin !== '' && mileageMax !== '')
          return (
            Number(item.mileage) >= Number(mileageMin) &&
            Number(item.mileage) <= Number(mileageMax)
          );
        if (mileageMin !== '')
          return Number(item.mileage) >= Number(mileageMin);
        if (mileageMax !== '')
          return Number(item.mileage) <= Number(mileageMax);
        return true;
      });
  }
);
