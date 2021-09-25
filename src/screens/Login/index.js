import React, { useState,useEffect } from 'react';
import {
  View

} from 'react-native';
import styles from './style';
import Login_Shape from 'components/LoginShape/index';
import Logo from 'components/Logo/index';
import UsernameTextInput from './UsernameTextInput/index';
import PasswordTextInput from './PasswordTextInput';
import LoginButton from './LoginButton';
import Footer from 'components/Footer';
import { connect } from 'react-redux'
import {setLogin} from 'store/actions/loginAction'

 function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onChangeUsername = (username) => {
    setUsername(username)
  }
  const onChangePassword = (password) => {
    setPassword(password)
  }
  const handleLogin = () => {
    props.setLogin({name:username})

  }
  return (
    <View style={styles.container}>
      <Login_Shape />
      <Logo width={100} height={100} position/>
      <UsernameTextInput onChangeUsername={onChangeUsername} />
      <PasswordTextInput onChangePassword={onChangePassword} />
      <LoginButton handleLogin={handleLogin} />
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};
const mapDispatchToProps = {
  setLogin
};
export default connect(null, mapDispatchToProps)(Login)
