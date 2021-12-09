import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, logInGoogle } from './../store/user/actions';
import { RootState } from '../store';
import { FunctionComponent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

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
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID_PUBLIC as string}
        buttonText="Sign in with Google"
        onSuccess={(data) => dispatch(logInGoogle(data))}
        onFailure={(data) => dispatch(logInGoogle(data))}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default LoginPage;
