import React from 'react';
import styles from './styles.module.scss';
import Logo from 'assets/images/logo/logo.png';
import BaseInput from 'components/base/baseInput/BaseInput';

const LoginPage = () => {

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className={styles.container}>
          <img src={Logo} alt="" />
          <p className={styles.title}>Đăng nhập hệ thống</p>
          <BaseInput 
            label='Tên tài khoản'
            placeholder='Nhập tên tài khoản'
          />
          <BaseInput 
            label='Mật khẩu'
            placeholder='Nhập mật khẩu'
            type='password'
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;