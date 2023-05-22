import {createSlice} from '@reduxjs/toolkit';

const sidebarMobile = createSlice({
    name:'sidebarmobile',
    initialState:{
        isOpen:'false'
    },
    reducers:{
        sidebarShowHide(state,action){
            state.isOpen = action.payload;
        }
    }
});


export const {sidebarShowHide} = sidebarMobile.actions;
export default sidebarMobile.reducer;