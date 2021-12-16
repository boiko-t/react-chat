import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import MessageSender from './MessageSender';
import { RootState } from '../store';

const ChatView: FunctionComponent = () => {
  const { openedConversationId, conversations } = useSelector(
    (state: RootState) => state.chat
  );
  const currentUserId = useSelector((state: RootState) => state.auth.user)._id;
  const messages =
    conversations.find(({ _id }) => _id === openedConversationId)?.messages ||
    [];

  const messageClasses = ({ from }) => {
    return currentUserId === from
      ? 'ml-auto text-right bg-accent-500 text-primary-100'
      : 'bg-primary-200';
  };

  return (
    <div className="relative scrollbar-y scrollbar-color-primary h-screen overflow-y-auto w-2/3 bg-primary-100 px-5 pb-24">
      {messages.map((message, i) => (
        <div
          key={i}
          className={`${messageClasses(
            message
          )} mt-3 px-3 py-1 w-max rounded-md`}
        >
          <p className="text-xs">
            {new Date(message.createdAt).toLocaleString()}
          </p>
          <p>{message.text}</p>
        </div>
      ))}
      <MessageSender className="w-full h-24 absolute bottom-0 left-0" />
    </div>
  );
};

export default ChatView;
