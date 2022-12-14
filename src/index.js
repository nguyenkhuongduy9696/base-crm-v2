import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/plugins/tailwindcss/main.css';
import '../src/assets/css/common.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@progress/kendo-theme-material/dist/all.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
      retry: 2,
    }
  }
});

root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <App />
        <ToastContainer position='bottom-right' closeButton={false} />
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
  
);
