import ChatPreviewsList from './components/ChatPreviewsList';
import ChatView from './components/ChatView';
import Header from './components/Header';
import LogIn from './components/LogIn';
import { Provider } from 'react-redux';
import store from './store';
import { useGoogleLogin } from 'react-google-login';

import './assets/styles.scss';

const App = () => {
  // const [one, two] = useGoogleLogin();
  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden">
        <LogIn />
        <Header />
        <div className="flex">
          <ChatPreviewsList />
          <ChatView />
        </div>
      </div>
    </Provider>
  );
};

export default App;
