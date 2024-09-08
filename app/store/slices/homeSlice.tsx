import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Alert } from 'react-native';

interface homeListState {
  datas: [];
  loading: boolean;
  error: string | null;
  currentLocation: {
    latitude: number | null;
    longitude: number | null;
  };
}

const initialState: homeListState = {
  datas: [],
  loading: false,
  error: null,
  currentLocation: {
    latitude: null,
    longitude: null,
  },
};
export const fetchAllData = createAsyncThunk(
  'homelist/fetchAllData',
  async () => {
    const response = await axios.get('http://192.168.29.227:3000/homes');
    return response.data;
  }
);

export const updateDataOnServer = createAsyncThunk(
  'homelist/updateDataOnServer',
  async (updatedData: any) => {
    try {
      const response = await axios.put(
        `http://192.168.29.227:3000/homes/${updatedData.id}`,
        updatedData
      );
      console.log('updateDataOnServer response.data', response.data);
      Alert.alert('Success', 'Home unlocked successfully!');
      return response.data;
    } catch (error) {
      console.error('Failed to update data:', error);
      throw error;
    }
  }
);

const homeListSlice = createSlice({
  name: 'homelist',
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllData.fulfilled, (state, action) => {
        state.datas = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })

      .addCase(updateDataOnServer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDataOnServer.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        state.datas = state.datas.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
        state.loading = false;
      })
      .addCase(updateDataOnServer.rejected, (state, action) => {
        console.error('Failed to update data:', action.error);
        state.loading = false;
        state.error = action.error.message || 'Failed to update data';
      });
  },
});

export const { setCurrentLocation } = homeListSlice.actions;

export default homeListSlice.reducer;
