import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable

} from 'react-native';
import styles from './style';
import Login_Shape from './LoginShape/index';
import Logo from './Logo/index';
import UsernameTextInput from './UsernameTextInput/index';
import PasswordTextInput from './PasswordTextInput';
import LoginButton from './LoginButton';
import Footer from 'components/Footer';
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let onChangeUsername = (username) => {
    setUsername(username)
  }
  let onChangePassword = (password) => {
    setPassword(password)
  }
  let handleLogin=()=>{

  }
  return (
    <View style={styles.container}>
      <Login_Shape />
      <Logo />
      <UsernameTextInput onChangeUsername={onChangeUsername} />
      <PasswordTextInput onChangePassword={onChangePassword} />
      <LoginButton handleLogin={handleLogin}/>
      <Footer />
    </View>
  );

};


