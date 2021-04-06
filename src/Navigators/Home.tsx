import React from 'react';
import {Text, View} from 'react-native';
import {TodoInterface} from '../Models/TodoInterface';
import {getTodo} from '../Services/UserService';

const Home = () => {
  const [todo, setTodo] = React.useState<TodoInterface>();
  React.useEffect(() => {
    getTodo().then(response => {
      setTodo(response);
    });
  }, []);

  return (
    <View>
      <Text>ID: {todo?.id}</Text>
      <Text>User ID: {todo?.userId}</Text>
      <Text>Title: {todo?.title}</Text>
      <Text>Completed: {todo?.completed}</Text>
    </View>
  );
};
export default Home;
