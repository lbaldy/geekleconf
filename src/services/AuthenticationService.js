import auth from '@react-native-firebase/auth';

export const loginWithEmailAndPassword = ({email, password}) => {
  // return new Promise((resolve, reject) => {
  //   resolve({user: {uid: '1234'}});
  // });
  return auth().signInWithEmailAndPassword(email, password);
};
