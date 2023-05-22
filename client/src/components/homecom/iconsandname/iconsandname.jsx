import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../store/centerpageslice";
import { sidebarShowHide } from '../../../store/sidebarmobile';

const IconsAndNames = ({icon,name}) => {
  // const dispatch = useDispatch();
  const pageName = useSelector((state)=>state.centerPage);
  const divColor = "p-2 cursor-pointer hover:bg-gray-300 hover:rounded-full flex items-center gap-1";
  const onselectedColor = "p-2 cursor-pointer flex items-center gap-1" + ' bg-yellow-500 rounded-full';
  // const col = pageName.page
  // console.log(onselectedColor);

  // console.log(pageName);
  const dispatch = useDispatch();
  const onClickHandle = ()=>{
    dispatch(sidebarShowHide(false));
    dispatch(changePage(name));
    // console.log(name);
  }
  return (
    <div onClick={onClickHandle} className={pageName.page===name ? onselectedColor : divColor}>
      <div>
        {icon}
      </div>
      <h1 className={'text-gray-600'}>{name}</h1>
    </div>
  );
};

export default IconsAndNames;
