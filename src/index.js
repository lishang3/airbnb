import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";

import 'normalize.css'
import './assets/css/index.less'
import routes from './router';
import store from './store';
import theme from './assets/theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback='loading'>
      <ThemeProvider theme={theme}>

        <RouterProvider router={routes} />

      </ThemeProvider>
    </Suspense>
  </Provider>

  // </React.StrictMode>
);




