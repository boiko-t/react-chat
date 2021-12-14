import { FunctionComponent, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { IconLogout, IconChat, IconUser } from '../assets/icons';
import { RootState } from '../store';
import { logOut } from '../store/auth/actions';
import UserImage from './UserImage';
import ChatPreviewsList from './ChatPreviewsList';
import UsersFinder from './UsersFinder';

const iconClassList =
  'w-10 h-10 cursor-pointer hover:text-accent-200 hover:drop-shadow-md';

const ChatControlView: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState(0);

  const getIconStateClasses = (iconIndex) => {
    return activeTab === iconIndex ? 'text-accent-400' : 'text-primary-100';
  };

  return (
    <div className="h-screen w-5/12 flex">
      <div className="w-1/6 max-w-xs bg-primary-700 py-5 flex flex-col justify-between items-center">
        <div className="flex flex-col items-center">
          <UserImage picture={user.picture} name={user.name} />
          <div className="mt-5 w-full">
            <IconChat
              className={`${getIconStateClasses(0)} ${iconClassList} mt-2 mb-3`}
              onClick={() => setActiveTab(0)}
            />
            <IconUser
              className={`${getIconStateClasses(1)} ${iconClassList} mt-2 mb-3`}
              onClick={() => setActiveTab(1)}
            />
          </div>
        </div>
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID_PUBLIC as string}
          onLogoutSuccess={() => dispatch(logOut())}
          buttonText="Login"
          render={(renderProps) => (
            <IconLogout
              onClick={renderProps.onClick}
              className={iconClassList + ' text-primary-100'}
            />
          )}
        />
      </div>

      <div className="w-5/6 bg-primary-600">
        {activeTab === 0 ? <ChatPreviewsList /> : <UsersFinder />}
      </div>
    </div>
  );
};

export default ChatControlView;
