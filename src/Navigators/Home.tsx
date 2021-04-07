import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TodoInterface} from '../Models/TodoInterface';
import {getTodo} from '../Services/UserService';
import {useGlobalStateSession} from '../Store';

const Home = () => {
  const [todo, setTodo] = React.useState<TodoInterface>();
  const session = useGlobalStateSession();

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
      <Text>{session.getUser().name.value}</Text>
      <TouchableOpacity onPress={() => session.logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
