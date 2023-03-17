import React, { useContext } from 'react';
import AdultsDropsdown from '../components/AdultsDropdown';
import KidsDropsdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import { RoomContext } from '../context/RoomContext';

const BookForm = () => {
  const {handleClick} = useContext(RoomContext)
  return <form className='h-[300px] w-full lg:h-[70px]'>
    <div className='flex flex-col w-full h-full lg:flex-row'>
      <div className='flex-1 border-r'>
        <CheckIn />
      </div>
      <div className='flex-1 border-r'>
        <CheckOut />
      </div>
      <div className='flex-1 border-r'>
        <AdultsDropsdown />
      </div>
      <div className='flex-1 border-r'>
        <KidsDropsdown />
      </div>
      {/* btn */}
      <button onClick={(e) => handleClick(e)} type='submit' className='btn btn-primary'>Check now</button>
    </div>
  </form>;
};

export default BookForm;
