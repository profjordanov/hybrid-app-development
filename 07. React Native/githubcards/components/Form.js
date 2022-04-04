import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

const Form = (props) => {
  const [username, setUsername] = useState('');

  let handleSubmit = async (username) => {
    try {
      const resp = await axios.get(`https://api.github.com/users/${username}`);
      props.onSubmit(resp.data);
      setUsername('');
    } catch (ex) {
      alert(ex);
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        type="text"
        value={username}
        onChangeText={(username) => setUsername(username)}
        placeholder="GitHub username"
        ref={input => { this.textInput = input }}
        required
      />
      <Button title="Add card" onPress={() => handleSubmit(username)} />
    </SafeAreaView>
  );
};

export default Form;
