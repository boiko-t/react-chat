import './assets/styles.scss';
import ChatPreviewsList from './components/ChatPreviewsList';
import ChatView from './components/ChatView';
import Header from './components/Header';

const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-primary-50">
      <Header />
      <div className="flex">
        <ChatPreviewsList />
        <ChatView />
      </div>
    </div>
  );
};

export default App;
