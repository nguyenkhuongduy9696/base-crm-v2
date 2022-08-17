import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {

  return(
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <p className='text-9xl text-red-weak'>404</p>
        <p className='text-3xl mb-2'>Không tìm thấy trang!</p>
        <p className='text-15 mb-1'>Trang bạn tìm đã bị đổi tên hoặc không tồn tại.</p>
        <NavLink to='/'>
          <p className='text-16 text-primary underline hover:text-primary-strong cursor-pointer'>
            Quay về trang chủ
          </p>
        </NavLink>  
      </div>
    </>
  );
};

export default Error404;