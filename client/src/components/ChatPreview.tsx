import { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Conversation } from '../types/Chat';
import UserImage from './UserImage';

import defaultDialogAvatar from '../assets/images/defaultChatAvatar.png';
import { openChat } from '../store/chat/actions';
import { RootState } from '../store';

interface ChatPreviewProps {
  conversation: Conversation;
}

const ChatPreview: FunctionComponent<ChatPreviewProps> = ({ conversation }) => {
  const dispatch = useDispatch();
  const { openedConversationId } = useSelector(
    (state: RootState) => state.chat
  );

  const [backgroundClass, setBackgroundClass] = useState('');
  const { picture, name, messages } = conversation;

  const isOpened = openedConversationId === conversation._id;

  useEffect(() => {
    setBackgroundClass(isOpened ? 'bg-primary-700' : 'bg-primary-600');
  }, [isOpened]);

  return (
    <div
      onClick={() => dispatch(openChat(conversation._id))}
      className={`flex px-3 py-2 items-center text-primary-50 ${backgroundClass}`}
    >
      <UserImage
        picture={picture || defaultDialogAvatar}
        name={name}
        className="mr-3"
      />
      <div>
        <h3 className="text-md">{conversation.name}</h3>
        <p className="text-sm">{messages[messages.length - 1].text}</p>
      </div>
    </div>
  );
};

export default ChatPreview;
