export const saveTodo = ({uid, body, id}) => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

export const deleteTodo = ({id}) => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

export const getUserTodos = async ({uid}) => {
  return [{body: 'Hello World!', uid: 1234}];
};
