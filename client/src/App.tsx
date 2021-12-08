import { useEffect, FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import ChatPreviewsList from './components/ChatPreviewsList';
import ChatView from './components/ChatView';
import Header from './components/Header';
import LogIn from './components/LogIn';
import store from './store';

import './assets/styles.scss';

const App: FunctionComponent = () => {
  useEffect(() => {
    console.log('hi');
  }, []);

  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden">
        <LogIn />
        <Header />
        <div className="flex">
          <ChatPreviewsList />
          <ChatView />
        </div>
        test
      </div>
    </Provider>
  );
};

export default App;
