import { FunctionComponent } from 'react';
import { IconCog } from '../assets/icons';

const AppLoaderPage: FunctionComponent = () => {
  return (
    <div className="h-screen overflow-hidden flex justify-center items-center bg-accent-100">
      <p className="text-2xl text-primary-500">
        <IconCog className="animate-spin-slow h-20 w-20 mx-auto mb-3" />
        Please wait, the app is loading...
      </p>
    </div>
  );
};

export default AppLoaderPage;
