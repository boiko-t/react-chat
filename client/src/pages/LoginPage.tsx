import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { logInGoogle } from '../store/auth/actions';
import { RootState } from '../store';
import { FunctionComponent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { IconUser } from '../assets/icons';

const LoginPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { user, isLoginFailed } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (!isLoginFailed && user.name) {
      navigate(from, { replace: true });
    }
  }, [user, isLoginFailed]);

  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center bg-primary-200">
      <IconUser
        className="text-primary-500 h-28 w-28 mx-auto mb-3"
        strokeWidth={3}
      />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID_PUBLIC as string}
        onSuccess={(data) => dispatch(logInGoogle(data))}
        onFailure={() => {}}
        cookiePolicy={'single_host_origin'}
        buttonText="Login"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            type="button"
            className="bg-accent-700  hover:bg-accent-800 text-primary-50 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md transition ease-in-out duration-120"
          >
            Log in with Google
          </button>
        )}
      />
    </div>
  );
};

export default LoginPage;
