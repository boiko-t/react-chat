import { FunctionComponent, useEffect } from 'react';

import AppLoaderPage from './pages/AppLoaderPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { checkAuth } from './store/auth/actions';
import ProtectedChatPage from './pages/ChatPage';
import { getConversations } from './dal/conversations';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { isAuthLoading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    console.log('Checking auth...');
    dispatch(checkAuth());
    getConversations();
  }, []);

  if (isAuthLoading) {
    return <AppLoaderPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
