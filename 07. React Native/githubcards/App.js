import * as React from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <View style={styles.container}>
        <View className="header">{this.props.title}</View>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
});

export default App;
