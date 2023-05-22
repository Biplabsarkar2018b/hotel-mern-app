import {createSlice} from '@reduxjs/toolkit';
//to change the center screen of the hotel page not the user screen
const hotelPageSlice = createSlice({
    name:'hotelpage',
    initialState:{
        page:'dashboard'
    },
    reducers:{
        hotelCenterPageChange(state,action){
            state.page = action.payload;
        },
        
    }
});


export const {hotelCenterPageChange} = hotelPageSlice.actions;
export default hotelPageSlice.reducer;