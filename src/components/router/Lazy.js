import {lazy} from 'react';

export const LoginScreen = lazy(() => import('./../auth/login/LoginPage'));

export const DashboardScreen = lazy(() => import('components/components/dashboard'));