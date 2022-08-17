import React from 'react';
import styles from './styles.module.scss';
import Logo from 'assets/images/logo/logo.png';
import BaseInput from 'components/base/baseInput/BaseInput';
import {MdCopyright} from 'react-icons/md';
import { useForm } from 'react-hook-form';

const footerLinks = [
  {id: 1, title: 'NextCRM.vn', href: 'https://nextcrm.vn'},
  {id: 2, title: 'Giới thiệu', href: 'https://nextcrm.vn/gioi-thieu'},
  {id: 3, title: 'Tin tức', href: 'https://nextcrm.vn/tin-tuc'},
  {id: 4, title: 'Hỗ trợ', href: 'https://support.nextcrm.vn/'},
  {id: 5, title: 'Khách hàng', href: 'https://nextcrm.vn/khach-hang'}
];

const LoginPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-24 md:mt-32 lg:mt-40 xl:mt-48 2xl:mt-52">
        <div className={ `${styles.container} mb-8`}>
          <img src={Logo} alt="" />
          <p className={styles.title}>Đăng nhập hệ thống</p>
          <BaseInput 
            label='Tên tài khoản'
            placeholder='Nhập tên tài khoản'
            autoFocus={true}
            {...register('username', {required: true})}
            errors={errors}
            validateErrors={[
              {type: 'required', errorText: 'Tên tài khoản không được bỏ trống'},
            ]}
            validateName='username'
          />
          <BaseInput 
            label='Mật khẩu'
            placeholder='Nhập mật khẩu'
            type='password'
            {...register('password', {required: true})}
            errors={errors}
            validateErrors={[
              {type: 'required', errorText: 'Mật khẩu không được bỏ trống'},
            ]}
            validateName='password'
          />
          <div className={ `w-full text-white text-center bg-primary hover:bg-primary-strong mb-4 md:mb-8 ${styles.button}` }
            onClick={ handleSubmit(onSubmit) }>
              Đăng nhập
          </div>
          <div className='w-full flex items-center justify-center'>
            2011-2022 <MdCopyright className='mx-1 text-18 text-primary' /> Bản quyền thuộc về <span className='ml-1 text-primary font-bold'>NextCRM</span>
          </div>
        </div>
        <ul className={styles.loginFooter}>
          {
            footerLinks.map(item => {
              return(
                <li className='hover:text-primary' key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    </>
  );
};

export default LoginPage;