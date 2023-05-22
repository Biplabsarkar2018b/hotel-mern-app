import {createSlice} from '@reduxjs/toolkit';

const dropdowntoggle = createSlice({
    name:'dropdown',
    initialState:{
        isOpen:false
    },
    reducers:{
        toggleDropDown(state,action){
            state.isOpen = !state.isOpen;
        }
    }
});


export const {toggleDropDown} = dropdowntoggle.actions;
export default dropdowntoggle.reducer;