import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import HomeView from './src/views/HomeView';
import reducers from './src/redux/reducers';
import {Provider} from 'react-redux';
import saga from './src/redux/sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
import LoginView from './src/views/LoginView';
import TodoFormView from './src/views/TodoFormView';
import {HOME, LOGIN, TODO_FORM} from './src/common/navKeys';

const Stack = createStackNavigator();

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(saga);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={LOGIN}
              component={LoginView}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={HOME}
              component={HomeView}
              options={{headerShown: false}}
            />
            <Stack.Screen name={TODO_FORM} component={TodoFormView} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
