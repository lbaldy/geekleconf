import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity, View, Text, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  TODO_SAVE_PROCESS_START,
  TODO_DELETE_PROCESS_START,
} from '../redux/actions/TodoActions';
import {find, times} from 'lodash';
import {styles} from '../common/styles';
import FullWidthButton from '../common/components/FullWidthButton';

const TodoFormView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const [todo, setTodo] = useState({});
  const idParam = route.params?.id;
  const todoFromReducer = useSelector(({TodoReducer}) =>
    find(TodoReducer.todos, (item) => item.id === idParam),
  );
  useEffect(() => {
    let pageTitle = 'Add todo';
    if (todoFromReducer) {
      pageTitle = 'Edit';
      setTodo(todoFromReducer);
    }
    navigation.setOptions({
      title: pageTitle,
      headerRight: idParam
        ? () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Delete',
                    'Are you sure you want to delete this TODO note?',
                    [
                      {
                        text: 'OK',
                        onPress: () => {
                          dispatch({
                            type: TODO_DELETE_PROCESS_START,
                            payload: {id: idParam},
                          });
                          navigation.goBack();
                        },
                      },
                      {
                        text: 'Cancel',
                        style: 'cancel',
                      },
                    ],
                  );
                }}
                style={{padding: 10}}>
                <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
                  Delete
                </Text>
              </TouchableOpacity>
            );
          }
        : null,
    });
  }, [todoFromReducer, idParam, dispatch, navigation]);

  const {body, id, uid} = todo;
  return (
    <View style={styles.flexOne}>
      <View style={[styles.flexOne, {padding: 10}]}>
        <TextInput
          multiline={true}
          style={[
            {
              flex: 0.9,
            },
            styles.input,
          ]}
          value={body}
          onChangeText={(txt) => {
            setTodo({id: idParam, body: txt, uid});
          }}
        />
      </View>
      <FullWidthButton
        callback={() => {
          dispatch({
            type: TODO_SAVE_PROCESS_START,
            payload: {body, id: idParam},
          });
          navigation.goBack();
        }}
        label="Save"
      />
    </View>
  );
};

export default TodoFormView;
