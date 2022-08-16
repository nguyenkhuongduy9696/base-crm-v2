import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {BsListUl} from 'react-icons/bs';

export const SidebarMenu = [
  {
    id: 1,
    icon: <AiOutlineHome />,
    title: 'Tổng quan',
    path: '/',
    subMenu: [],
  },
  {
    id: 2,
    icon: <FiUsers />,
    title: 'Khách hàng',
    path: '/customer',
    subMenu: [
      { id: 200, subIcon: <BsListUl />, subTitle: 'Lead', subPath: '/admin/contact/contact' },
      { id: 201, subIcon: <BsListUl />, subTitle: 'Telesales', subPath: '/admin/telesales/telesales' },
      { id: 202, subIcon: <BsListUl />, subTitle: 'Khách hàng', subPath: '/customer/customer' },
      { id: 203, subIcon: <BsListUl />, subTitle: 'Nhà cung cấp', subPath: '/admin/supplier/supplier' },
    ],
  },
  {
    id: 4,
    icon: <BsListUl />,
    title: 'Công việc',
    path: '/task',
    subMenu: [
      { id: 400, subIcon: <BsListUl />, subTitle: 'Công việc', subPath: '/admin/task/task' },
      { id: 402, subIcon: <BsListUl />, subTitle: 'Dự án', subPath: '/admin/project/project' },
      { id: 403, subIcon: <BsListUl />, subTitle: 'Tài liệu', subPath: '/admin/note-documents/note-documents'},
    ]
  },
  {
    id: 8,
    icon: <BsListUl />,
    title: 'Nhân viên',
    path: '/employee',
    subMenu: [
      { id: 800, subIcon: <BsListUl />, subTitle: 'Nhân viên', subPath: '/admin/employee/employee' },
      { id: 801, subIcon: <BsListUl />, subTitle: 'Hoa hồng', subPath: '/admin/commission/commission' },
      { id: 802, subIcon: <BsListUl />, subTitle: 'KPI', subPath: '/admin/kpi/kpi-list'},
    ],
  },
  {
    id: 9,
    icon: <BsListUl />,
    title: 'Sổ quỹ',
    path: '/admin/payment/payment',
    subMenu: []
  },
];