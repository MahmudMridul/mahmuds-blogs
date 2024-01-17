import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   isLoading: false,
   blogList: [],
   searchText: "",
};

export const getBlogList = createAsyncThunk(
   "app/getBlogList",
   async (obj, thunkAPI) => {
      try {
         const res = await fetch(`${process.env.PUBLIC_URL}/data/blogInfo.json`);
         const data = res.json();
         return data;

      } catch (error) {
         console.error("getBlogList", error.message);
      }
   }
);

export const searchBlogList = createAsyncThunk(
   "app/searchBlogList",
   async (obj, thunkAPI) => {
      try {
         const { searchText } = obj;
         const res = await fetch(`${process.env.PUBLIC_URL}/data/blogInfo.json`);
         const data = res.json();
         console.log(data);
         return data;

      } catch (error) {
         console.error("getBlogList", error.message);
      }
   }
);

export const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setState: {
         prepare(stateName, value) {
            return {
               payload: { stateName, value }
            }
         },
         reducer(state, action) {
            const { stateName, value } = action.payload;
            state[stateName] = value;
         }
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getBlogList.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getBlogList.fulfilled, (state, action) => {
            state.blogList = action.payload.blogList;
            state.isLoading = false;
         })
         .addCase(getBlogList.rejected, (state, action) => {
            console.error("getBlogList", action.error.message);
         })
   }
});


export const { setState } = appSlice.actions;

export default appSlice.reducer;