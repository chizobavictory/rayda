import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// Export the hook to use in components
export const useGetProductsQuery = apiSlice.endpoints.getProducts.useQuery;

export default store;
