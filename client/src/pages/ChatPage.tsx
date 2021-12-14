import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import ChatControlView from '../components/ChatControlView';
import ChatView from '../components/ChatView';
import Header from '../components/Header';
import { RootState } from '../store';

const ChatPage: FunctionComponent = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="flex">
        <ChatControlView />
        <ChatView />
      </div>
    </>
  );
};

const ProtectedChatPage: FunctionComponent = () => {
  const location = useLocation();
  const { isLoginFailed } = useSelector((state: RootState) => state.auth);

  return isLoginFailed ? (
    <Navigate to="/login" state={{ from: location }} />
  ) : (
    <ChatPage />
  );
};

export default ProtectedChatPage;
