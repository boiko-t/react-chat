import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { requestLogIn } from './../store/user/actions';

const LogIn = () => {
  const dispatch = useDispatch();

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID_PUBLIC}
      buttonText="Sign in with Google"
      onSuccess={(data) => dispatch(requestLogIn(data))}
      onFailure={(data) => dispatch(requestLogIn(data))}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LogIn;
