import { useEffect, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConversations } from '../store/chat/actions';
import ChatPreview from './ChatPreview';
import { RootState } from '../store';

const ChatPreviewsList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { conversations } = useSelector((state: RootState) => state.chat);

  useEffect(() => {
    dispatch(fetchConversations());
  }, []);

  return (
    <div className="h-screen scrollbar-y overflow-y-auto scrollbar-color-primary">
      {conversations.map((conversation) => (
        <ChatPreview key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
};

export default ChatPreviewsList;
