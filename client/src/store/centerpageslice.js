import {createSlice} from '@reduxjs/toolkit';

const centerPageSlice = createSlice({
    name:'centerpage',
    initialState:{
        page:'Dashboard'
    },
    reducers:{
        changePage(state,action){
            state.page = action.payload;
        }
    }
});


export const {changePage} = centerPageSlice.actions;
export default centerPageSlice.reducer;