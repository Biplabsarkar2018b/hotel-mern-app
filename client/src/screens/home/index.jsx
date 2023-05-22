import React, { useEffect, useState } from 'react'
import LeftDiv from '../../components/homecom/left'
import CenterDiv from '../../components/homecom/center'
import RightDiv from '../../components/homecom/right'
import ExploreCity from '../../components/homecom/homecenterscreens/explorecity'
import Notifications from '../../components/homecom/homecenterscreens/notifications'
import FavouritePage from '../../components/homecom/homecenterscreens/favouritepage'
import SettingsPage from '../../components/homecom/homecenterscreens/settingspage'
import { useSelector } from 'react-redux'
import BillingPage from '../../components/homecom/homecenterscreens/billingpage'
import BlogPage from '../../components/homecom/homecenterscreens/blogpage'
import UserMobileSidebar from '../../components/homecom/sidebar/usermobilesidebar'


const HomePage = () => {
    const pageName = useSelector((state)=>state.centerPage);
    const [selectedPage, setselectedPage] = useState('Dashboard');

    const onPageClick = (page)=>{
        setselectedPage(page);
    }
    
  return (
    <div className='w-screen h-screen flex'>
    {/* 3 sections below, by default they are in a row, i.e. 3 columns in a row */}
        <div className='hidden lg:block min-w-fit h-full'>
            <LeftDiv/>
        </div>
        <div className='sm:w-full md:w-full lg:flex-grow h-full overflow-x-auto scrollable xl:px-2'>

        <nav className="fixed block md:hidden top-0 left-0 w-full">
          {/* Navbar content here */}
          <UserMobileSidebar/>
        </nav>
        {/* Render content based on selectedPage */}



            {pageName.page==='Dashboard' && <CenterDiv/>}
            {pageName.page==='Explore City' && <ExploreCity/>}
            {pageName.page==='Bookings' && <Notifications/>}
            {pageName.page==='Wishlist' && <FavouritePage/>}
            {pageName.page==='Settings' && <SettingsPage/>}
            {pageName.page==='Billing' && <BillingPage/>}
            {pageName.page==='Blog' && <BlogPage/>}
        </div>
        <div className='hidden lg:block min-w-fit h-full'>
            <RightDiv/>
        </div>
    </div>
  )
}

export default HomePage