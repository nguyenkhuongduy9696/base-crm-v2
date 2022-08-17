import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/plugins/tailwindcss/main.css';
import '../src/assets/css/common.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';

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
    <App />
  </QueryClientProvider>
  
);
