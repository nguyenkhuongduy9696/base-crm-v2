import React from 'react';

const ErrorTenant = () => {


  return(
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <p className='text-5xl text-red-weak mb-1'>Lỗi tài khoản</p>
        <p className='text-2xl mb-2'>Tài khoản khách hàng không tồn tại!</p>
        <p className='text-15 mb-1'>Vui lòng liên hệ quản trị viên để biết thêm thông tin chi tiết.</p>
        <p className='text-15'>Tổng đài hỗ trợ: <span className='text-primary hover:text-primary-strong underline cursor-pointer'>0902291318</span></p>
      </div>
    </>
  );
};

export default ErrorTenant;