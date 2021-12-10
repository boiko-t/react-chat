// Icons copied from https://heroicons.com/
import { FunctionComponent, MouseEventHandler } from 'react';

interface GenericIconProps extends IconProps {
  content: string;
}
interface IconProps {
  className: string;
  onClick?: MouseEventHandler<SVGElement>;
}

const IconGeneric: FunctionComponent<GenericIconProps> = (props) => {
  const { className, content, onClick } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      dangerouslySetInnerHTML={{ __html: content }}
    ></svg>
  );
};

export const IconChat: FunctionComponent<IconProps> = ({
  className,
  onClick,
}) => {
  const content =
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>';
  return (
    <IconGeneric className={className} onClick={onClick} content={content} />
  );
};

export const IconCog: FunctionComponent<IconProps> = ({
  className,
  onClick,
}) => {
  const content =
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />';
  return (
    <IconGeneric className={className} onClick={onClick} content={content} />
  );
};

export const IconUser: FunctionComponent<IconProps> = ({
  className,
  onClick,
}) => {
  const content =
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />';
  return (
    <IconGeneric className={className} onClick={onClick} content={content} />
  );
};

export const IconLogout: FunctionComponent<IconProps> = ({
  className,
  onClick,
}) => {
  const content =
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />';
  return (
    <IconGeneric className={className} onClick={onClick} content={content} />
  );
};
