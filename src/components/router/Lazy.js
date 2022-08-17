import {lazy} from 'react';

export const LoginScreen = lazy(() => import('./../auth/login/LoginPage'));
export const Error404Screen = lazy(() => import('components/auth/Error404'));
export const ErrorTenantScreen = lazy(() => import('components/auth/ErrorTenant'));
export const ErrorPermissionScreen = lazy(() => import('components/auth/ErrorPermission'));

export const DashboardScreen = lazy(() => import('components/components/dashboard'));