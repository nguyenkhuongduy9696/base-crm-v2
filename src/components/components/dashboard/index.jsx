import { useQuery } from '@tanstack/react-query';
import NavBar from 'components/layouts/navBar/NavBar';
import { axiosInstance } from 'helpers/axios';
import React from 'react';
import Actions from './Actions';

const Dashboard = () => {
  const getContact = async () => {
    return await axiosInstance.get('/contact/contact?page=1&pageLimit=1000');
  };

  const {data} = useQuery(
    ['contact-list'],
    () => getContact(),
  );

  console.log(data);

  return(
    <>
      <NavBar>
        <Actions />
      </NavBar>
    </>
  );
};

export default Dashboard;