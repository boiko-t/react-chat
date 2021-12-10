import { FunctionComponent } from 'react';
import defaultDialogAvatar from '../assets/images/defaultChatAvatar.png';

interface UserImageProps {
  picture: string;
  name: string;
  className?: string;
}

const UserImage: FunctionComponent<UserImageProps> = (props) => {
  const { picture, name, className } = props;

  return (
    <img
      src={picture || defaultDialogAvatar}
      className={`${className} h-14 w-14 rounded-full`}
      alt={`Picture of ${name}` || 'User Picture'}
    />
  );
};

export default UserImage;
