import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter} from "react-router-dom";
import {AppContextProvider} from "./Context-api/Context";
import { Provider } from "react-redux";
import { store } from "./Store/store";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <Provider store={store}>

    <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
    </BrowserRouter>
  </Provider>
  </StyledEngineProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
