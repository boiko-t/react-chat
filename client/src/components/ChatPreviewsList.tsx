import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConversations } from '../store/conversation/actions';
import ChatPreview from './ChatPreview';
import { RootState } from '../store';

const ChatPreviewsList = () => {
  const dispatch = useDispatch();
  const conversations = useSelector((state: RootState) => state.conversations);

  useEffect(() => {
    dispatch(fetchConversations());
  }, []);

  return (
    <div className="h-screen scrollbar-y overflow-y-auto scrollbar-color-primary">
      {conversations.map((dialog) => (
        <ChatPreview
          key={dialog._id}
          id={dialog._id}
          avatar={dialog.conversationPicture}
          name={dialog.conversationName}
          preview={dialog.messages[dialog.messages.length - 1].text}
          isOpened={false}
        />
      ))}
    </div>
  );
};

export default ChatPreviewsList;
