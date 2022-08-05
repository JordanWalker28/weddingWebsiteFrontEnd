import React from 'react';
import App from './components/App';
import configureStore from './store/store';
import { Provider } from "react-redux";
import { checkLoggedIn } from "../src/utils/session";
import { BrowserRouter } from "react-router-dom";
import {createRoot} from 'react-dom/client';

const renderApp = preloadedState => {
  const store = configureStore(preloadedState);
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};
(async () => renderApp(await checkLoggedIn()))();
