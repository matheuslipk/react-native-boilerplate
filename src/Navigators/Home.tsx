import React from 'react';
import {Text, View} from 'react-native';
import {TodoInterface} from '../Models/TodoInterface';
import {getTodo} from '../Services/UserService';
import {useGlobalStateUser} from '../Store';

const Home = () => {
  const [todo, setTodo] = React.useState<TodoInterface>();
  const user = useGlobalStateUser();

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
      <Text>{user.user.name.value}</Text>
    </View>
  );
};
export default Home;
