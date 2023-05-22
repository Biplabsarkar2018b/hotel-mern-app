import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { hotelCenterPageChange } from '../../../store/hotelpageslice';
import { sidebarShowHide } from '../../../store/sidebarmobile';

const SidebarIcon = ({icon,pagename}) => {
  const pageName = useSelector((state)=>state.hotelpage);
  const divcolor = 'rounded-full p-3 hover:bg-gray-300 text-gray-800 cursor-pointer';
  const selectedColor = 'rounded-full p-3 text-gray-800 cursor-pointer' + ' bg-yellow-500';
  const dispatch = useDispatch();
  const onIconClick = ()=>{
    dispatch(hotelCenterPageChange(pagename));
    dispatch(sidebarShowHide(false));
  }
  return (
    <div onClick={onIconClick} className={pageName.page===pagename ? selectedColor : divcolor}>
        {icon}
    </div>
  )
}

export default SidebarIcon