import { IconChat } from '../assets/icons';

const Header = () => {
  return (
    <header className="app-header px-6 flex items-center text-primary-100	bg-accent-500">
      <IconChat className="h-10 w-10 mr-2" />
      <h1 className="text-2xl">Welcome to chat</h1>
    </header>
  );
};

export default Header;
