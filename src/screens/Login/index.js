import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './style';
import Login_Shape from 'components/LoginShape/index';
import Logo from 'components/Logo/index';
import UsernameTextInput from './UsernameTextInput/index';
import PasswordTextInput from './PasswordTextInput';
import LoginButton from './LoginButton';
import Footer from 'components/Footer';
import {connect} from 'react-redux';
import {setLogin} from 'store/actions/loginAction';
import LanguageButton from 'src/components/LanguageButton';
import WarningText from 'src/components/WarningText';
import I18n from 'language/I18n';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setwarning] = useState(false);
  const onChangeUsername = _username => {
    setUsername(_username);
  };
  const onChangePassword = _password => {
    setPassword(_password);
  };
  const handleLogin = () => {
    if (username) {
      props.setLogin({name: username});
    } else {
      setwarning(true);
      setTimeout(() => {
        console.log('dssd');
        setwarning(false);
      }, 3000);
    }
  };
  return (
    <View style={styles.container}>
      <Login_Shape />
      <Logo width={100} height={100} position />
      <UsernameTextInput onChangeUsername={onChangeUsername} />
      <WarningText warning={warning ? I18n.t('login.alert') : ''} />
      <PasswordTextInput onChangePassword={onChangePassword} />
      <LoginButton handleLogin={handleLogin} />
      <LanguageButton />

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}
const mapDispatchToProps = {
  setLogin,
};
export default connect(null, mapDispatchToProps)(Login);
