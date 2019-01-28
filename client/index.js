import UserBox from './stream/containers/UserBox';
import SignInButton from './stream/containers/SignInButton';
import LoggedIn from './stream/containers/LoggedIn';
import SetUsernameDialog from './stream/containers/SetUsernameDialog';
import translations from './translations.yml';
import Login from './login/containers/Main';
import reducer from './login/reducer';

export default {
  reducer,
  translations,
  slots: {
    stream: [UserBox, SignInButton, SetUsernameDialog, LoggedIn],
    login: [Login],
  },
};
