import React, {useEffect} from 'react';
import styles from './styles.module.scss';
import Logo from 'assets/images/logo/logo.png';
import BaseInput from 'components/base/baseInput/BaseInput';
import {MdCopyright} from 'react-icons/md';
import { useForm } from 'react-hook-form';
import {useMutation, useQueryClient, useQuery, useIsMutating, useIsFetching} from '@tanstack/react-query';
import { authApis } from 'api/auth';
import { getTenant } from 'helpers/common';
import { toast } from 'react-toastify';
import {QUERY_RESPONSE_ERROR, AUTH_USER_INFO_KEY} from 'constants/queryKeys/auth';
import { ACCESS_TOKEN, getCookie, setCookie } from 'helpers/cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { USER_LOGIN_BEFORE } from 'constants/localStorage';

const footerLinks = [
  {id: 1, title: 'Nextcrm.vn', href: 'https://nextcrm.vn'},
  {id: 2, title: 'Giới thiệu', href: 'https://nextcrm.vn/gioi-thieu'},
  {id: 3, title: 'Tin tức', href: 'https://nextcrm.vn/tin-tuc'},
  {id: 4, title: 'Hỗ trợ', href: 'https://support.nextcrm.vn/'},
  {id: 5, title: 'Khách hàng', href: 'https://nextcrm.vn/khach-hang'}
];

const LoginPage = () => {
  const queryClient = useQueryClient();
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();
  const navigate = useNavigate();
  const {login, getAuthUserInfo} = authApis();

  const {register, handleSubmit, formState: {errors}} = useForm();

  const authUser = queryClient.getQueryData([AUTH_USER_INFO_KEY]);
  const token = getCookie(ACCESS_TOKEN);

  const loginMutation = useMutation(params => login(params));

  const {refetch} = useQuery(
    [AUTH_USER_INFO_KEY],
    () => getAuthUserInfo(),
    {enabled: false, suspense: false}
  );

  const onSubmit = (value) => {
    const url = window.location.hostname.split('.');
    const type = url[1];
    const formData = {
      ...value,
      tenantcode: getTenant(),
      language: '',
      app_type: type === 'posx' ? 'sell' : 'crm'
    };
    loginMutation.mutate(formData, {
      onSuccess: async (res) => {
        if(res.meta.status_code !== 0){
          toast.error(res.meta.message);
        } else {
          setCookie(ACCESS_TOKEN, res.data.token, res.data.expires_in);
          toast.success('Đăng nhập thành công');
          localStorage.setItem(USER_LOGIN_BEFORE, 1);
          await refetch();
          navigate('/', {replace: true});
        }
      },
      onError: () => {
        toast.error(QUERY_RESPONSE_ERROR);
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

  useEffect(() => {
    if(token && authUser){
      navigate('/', {replace: true});
    } else {
      const userLoginBefore = localStorage.getItem(USER_LOGIN_BEFORE);
      if(userLoginBefore === '1'){
        toast.info('Phiên đăng nhập đã hết hạn');
        localStorage.setItem(USER_LOGIN_BEFORE, 0);
      }
    }
  },[authUser, token]);

  return (
    <>
      <div className="flex flex-col items-center mt-24 md:mt-32 lg:mt-40 xl:mt-48 2xl:mt-52">
        { 
          token && authUser ? (<Navigate to='/' replace={true} />) :
            <>
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
                    {type: 'required', errorText: 'Nhập tên tài khoản'},
                  ]}
                  validateName='username'
                  onKeyDown={ handleKeyDown }
                />
                <BaseInput 
                  label='Mật khẩu'
                  placeholder='Nhập mật khẩu'
                  type='password'
                  {...register('password', {required: true})}
                  errors={errors}
                  validateErrors={[
                    {type: 'required', errorText: 'Nhập mật khẩu'},
                  ]}
                  validateName='password'
                  onKeyDown={ handleKeyDown }
                />
                <div className={ `w-full text-white text-center ${isFetching || isMutating ? 'bg-gray-strong' : 'bg-primary hover:bg-primary-strong'} mb-4 md:mb-8 ${styles.button}` }
                  onClick={ isFetching || isMutating ? null : handleSubmit(onSubmit) }>
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
            </>
        } 
      </div>
    </>
  );
};

export default LoginPage;