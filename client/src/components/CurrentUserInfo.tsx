import { FunctionComponent } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { IconLogout } from '../assets/icons';
import { RootState } from '../store';
import { logOut } from '../store/user/actions';
import UserImage from './UserImage';

const CurrentUserInfo: FunctionComponent<{ className: string }> = ({
  className,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className={`${className} flex justify-between items-center pl-3 pr-6 w-full border border-primary-800 bg-primary-700`}
    >
      <p className="flex items-center text-primary-200 text-lg">
        <UserImage picture={user.picture} name={user.name} className="mr-3" />
        {user.name}
      </p>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID_PUBLIC as string}
        onLogoutSuccess={() => dispatch(logOut())}
        buttonText="Login"
        render={(renderProps) => (
          <IconLogout
            onClick={renderProps.onClick}
            className="w-9 h-9 text-primary-200 cursor-pointer hover:text-primary-300 hover:drop-shadow-md"
          />
        )}
      />
    </div>
  );
};

export default CurrentUserInfo;
