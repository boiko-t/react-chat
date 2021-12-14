import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchUsers } from '../store/users/actions';
import UserImage from './UserImage';

const UsersFinder: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="text-primary-100">
      {console.log(users)}
      {users.map((user) => (
        <p
          key={user._id}
          className="flex items-center pl-3 py-3 border-b border-primary-700 transition-colors hover:bg-primary-700"
        >
          <UserImage picture={user.picture} name={user.name} className="mr-3" />
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default UsersFinder;
