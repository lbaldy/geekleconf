import firestore from '@react-native-firebase/firestore';

export const saveTodo = ({uid, body, id}) => {
  // return new Promise((resolve, reject) => {
  //   resolve();
  // });
  if (id) {
    return firestore().collection('Todos').doc(id).update({body});
  }

  return firestore().collection('Todos').add({body, uid});
};

export const deleteTodo = ({id}) => {
  // return new Promise((resolve, reject) => {
  //   resolve();
  // });
  return firestore().collection('Todos').doc(id).delete();
};

export const getUserTodos = async ({uid}) => {
  // return [{body: 'Hello World!', uid: 1234}];
  const todosCollection = await firestore()
    .collection('Todos')
    .where('uid', '==', uid)
    .get();
  const todosArray = [];
  todosCollection.forEach((todo) => {
    todosArray.push({
      ...todo.data(),
      id: todo.id,
    });
  });

  return todosArray;
};
