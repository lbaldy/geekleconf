import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import FullWidthButton from '../common/components/FullWidthButton';
import {TODO_FORM} from '../common/navKeys';
import {styles} from '../common/styles';
import {
  TODO_GET_PROCESS_START,
  TODO_SAVE_PROCESS_START,
} from '../redux/actions/TodoActions';

const HomeView = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const todos = useSelector(({TodoReducer}) => TodoReducer.todos);
  useEffect(() => {
    dispatch({
      type: TODO_GET_PROCESS_START,
    });
  }, []);

  return (
    <View style={styles.flexOne}>
      <View style={styles.flexOne}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            const {id} = item;
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(TODO_FORM, {id});
                }}>
                <View style={styles.todoListItem}>
                  <Text numberOfLines={1}>{item.body}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <FullWidthButton
        callback={() => {
          navigation.navigate(TODO_FORM);
        }}
        label="Add new"
      />
    </View>
  );
};

export default HomeView;
