import { useState, useEffect } from 'react';
import defaultDialogAvatar from '../assets/images/defaultChatAvatar.png';

const ChatPreview = ({ id, avatar, name, preview, isOpened }) => {
  const [backgroundClass, setBackgroundClass] = useState('');

  useEffect(() => {
    setBackgroundClass(isOpened ? 'bg-accent-800' : 'bg-accent-700');
  }, [isOpened]);

  return (
    <div
      className={`flex px-3 py-2 items-center text-primary-50 ${backgroundClass}`}
    >
      <img
        src={avatar || defaultDialogAvatar}
        className="h-14 w-14 mr-3 rounded-full"
        alt="Chat thumbnail"
      />
      <div>
        <h3 className="text-xl">{name}</h3>
        <p>{preview}</p>
      </div>
    </div>
  );
};

export default ChatPreview;
