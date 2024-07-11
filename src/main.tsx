import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {  persisStore, store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.tsx'
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisStore}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
