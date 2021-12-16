import { FunctionComponent } from 'react';
import { IconSend } from '../assets/icons';

interface MessageSenderProps {
  className?: string;
}
const MessageSender: FunctionComponent<MessageSenderProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      <textarea
        className="resize-none p-3 w-full h-full"
        placeholder="Send your message"
      ></textarea>
      <IconSend
        onClick={() => {}}
        className="w-8 h-8 cursor-pointer text-accent-700 hover:text-accent-900 transition-colors absolute top-2 right-3"
      />
    </div>
  );
};

export default MessageSender;
