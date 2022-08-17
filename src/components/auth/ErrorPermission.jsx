import React from 'react';
import {NavLink} from 'react-router-dom';

const ErrorPermission = () => {

  return(
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <p className='text-9xl text-red-weak'>403</p>
        <p className='text-3xl mb-2 text-red-weak'>Truy cập bị từ chối</p>
        <p className='text-15'>Tài khoản của bạn không có quyền truy cập tính năng này.</p>
        <p className='text-15 mb-1'>Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết</p>
        <NavLink to='/'>
          <p className='text-16 text-primary underline hover:text-primary-strong cursor-pointer'>
            Quay về trang chủ
          </p>
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPermission;