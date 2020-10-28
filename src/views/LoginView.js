import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import FullWidthButton from '../common/components/FullWidthButton';
import {HOME} from '../common/navKeys';
import {styles} from '../common/styles';
import {AUTHENTICATION_PROCESS_START} from '../redux/actions/AuthenticationActions';

const LoginView = () => {
  const [email, setEmail] = useState('lukasz@example.com');
  const [password, setPassword] = useState('Password1');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const uid = useSelector(
    ({AuthenticationReducer}) => AuthenticationReducer.uid,
  );
  useEffect(() => {
    if (uid) {
      navigation.replace(HOME);
    }
  }, [navigation, uid]);

  return (
    <View style={styles.flexOne}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 100, fontWeight: 'bold'}}>TO</Text>
        <Text style={{fontSize: 100, fontWeight: 'bold'}}>DO</Text>
      </View>
      <View style={{padding: 10, flex: 3}}>
        <View>
          <Text>Email:</Text>
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View>
          <Text>Password:</Text>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            autoCompleteType="password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
      </View>
      <FullWidthButton
        callback={() => {
          dispatch({
            type: AUTHENTICATION_PROCESS_START,
            payload: {
              email,
              password,
            },
          });
        }}
        label="Login"
      />
    </View>
  );
};

export default LoginView;
